package com.Adecco.gesmag.mouvment;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.Adecco.gesmag.exception.NotFoundException;
import com.Adecco.gesmag.product.Product;
import com.Adecco.gesmag.product.ProductRepository;

import jakarta.transaction.Transactional;

@Service
public class MouvementService {

	private final mouvementRepository rp;
	private final ProductRepository pr;

	@Autowired
	public MouvementService(mouvementRepository rp, ProductRepository pr) {
		this.rp = rp;
		this.pr = pr;
	}

	@Transactional
	public Mouvement create(MouvementPayLoad body) {

		if (body.getProductId() == null) {
			throw new IllegalArgumentException("L'ID del prodotto è obbligatorio nel corpo della richiesta.");
		}

		Product product = pr.findById(body.getProductId())
				.orElseThrow(() -> new NotFoundException("Product con ID " + body.getProductId() + " non trovato"));

		if (product.getMouvement() != null) {

			throw new IllegalStateException(
					"Il Product con ID " + body.getProductId() + " ha già un Mouvement associato.");
		}

		Mouvement mouvement = new Mouvement(body.getCodiceMovimento(), body.getNomeCliente(), product, body.getPrezzo(),
				body.getQuantitaMoviementata());

		Mouvement savedMouvement = rp.save(mouvement);

		product.setMouvement(savedMouvement);
		pr.save(product);

		return savedMouvement;
	}

	public Page<Mouvement> find(int page, int size, String sort) {
		Pageable pageable = PageRequest.of(page, size, Sort.by(sort));
		return rp.findAll(pageable);
	}

	public Mouvement findMouvementById(UUID id) {
		return rp.findById(id).orElseThrow(() -> new NotFoundException(id));
	}

	public Mouvement findByNomeCliente(String nomeCliente) {
		return rp.findByNomeCliente(nomeCliente)
				.orElseThrow(() -> new NotFoundException("Nome Cliente " + nomeCliente + " non trovato"));
	}

	public Mouvement findByCodiceMouvement(String codiceMovimento) {
		return rp.findByCodiceMovimento(codiceMovimento)
				.orElseThrow(() -> new NotFoundException("Codice Movimento " + codiceMovimento + " non trovato"));
	}

	public void findByIdAndDelete(UUID id) {
		Mouvement found = rp.findById(id)
				.orElseThrow(() -> new NotFoundException("Mouvement con ID " + id + " non trovato"));
		rp.delete(found);
	}

}
