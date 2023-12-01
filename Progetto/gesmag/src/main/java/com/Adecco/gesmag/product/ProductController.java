package com.Adecco.gesmag.product;

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
@RequestMapping("/product")
public class ProductController {

	@Autowired
	private ProductService srv;

	@GetMapping
	public Page<Product> getProduct(@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "10") int size, @RequestParam(defaultValue = "idProduct") String sortBy) {
		return srv.find(page, size, sortBy);
	}

	@GetMapping("/{productId}")
	public Product findById(@PathVariable UUID productId) {
		return srv.findById(productId);
	}

	@PostMapping
	public Product saveProduct(@RequestBody ProductPayLoad body) {
		Product prodotto = srv.create(body);
		return prodotto;
	}

	@DeleteMapping("/{idProduct}")
	public ResponseEntity<String> deleteAddress(@PathVariable UUID idProduct) {
		srv.findByIdAndDelete(idProduct);
		return ResponseEntity.ok("Prodotto eliminato con successo.");

	}

}
