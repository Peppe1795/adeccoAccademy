package com.Adecco.gesmag.product;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.Adecco.gesmag.exception.NotFoundException;

@Service
public class ProductService {

	@Autowired
	private ProductRepository rp;

	public Product create(ProductPayLoad body) {
		Product prodotto = new Product(body.getCodeProduct(), body.getDescrizione(), body.getUm(), body.getPrezzo(),
				body.getPrezzoAcquisto(), body.getQuantitaGiacenza(), body.getQuantitaVenduta(),
				body.getQuantitaAcquistata());
		return rp.save(prodotto);
	}

	public Page<Product> find(int page, int size, String sort) {
		Pageable pageable = PageRequest.of(page, size, Sort.by(sort));
		return rp.findAll(pageable);
	}

	public Product findById(UUID id) {
		return rp.findById(id).orElseThrow(() -> new NotFoundException(id));
	}

	public void findByIdAndDelete(UUID id) {
		Product found = this.findById(id);
		rp.delete(found);

	}
}
