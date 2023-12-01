package com.Adecco.gesmag.mouvment;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/mouvement")
public class MouvementController {

	@Autowired
	private MouvementService srv;

	@GetMapping
	public Page<Mouvement> getMouvement(@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "10") int size, @RequestParam(defaultValue = "mouvementId") String sortBy) {
		return srv.find(page, size, sortBy);
	}

	@GetMapping("/{mouvementId}")
	public Mouvement findById(@PathVariable UUID mouvementId) {
		return srv.findMouvementById(mouvementId);
	}

	@GetMapping("/cliente/{nomeCliente}")
	public Mouvement getByNomeCliente(@PathVariable String nomeCliente) {
		return srv.findByNomeCliente(nomeCliente);
	}

	@GetMapping("/codice/{codiceMovimento}")
	public Mouvement getByCodiceMovimento(@PathVariable String codiceMovimento) {
		return srv.findByCodiceMouvement(codiceMovimento);
	}

	@PostMapping
	public Mouvement saveMouvement(@RequestBody MouvementPayLoad body) {
		Mouvement movimento = srv.create(body);
		return movimento;
	}

	@DeleteMapping("/{mouvementId}")
	public ResponseEntity<String> deleteAddress(@PathVariable UUID mouvementId) {
		srv.findByIdAndDelete(mouvementId);
		return ResponseEntity.ok("Movimento eliminato con successo.");

	}

}
