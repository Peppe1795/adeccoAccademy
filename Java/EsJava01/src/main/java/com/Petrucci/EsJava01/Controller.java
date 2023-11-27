package com.Petrucci.EsJava01;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
	@GetMapping("/somma")
	public ResponseEntity<String> verificaParametri(@RequestParam(name = "parametro1") String parametro1,
			@RequestParam(name = "parametro2") String parametro2) {

		if (!isNumero(parametro1)) {
			return new ResponseEntity<>("Primo parametro non valido", HttpStatus.BAD_REQUEST);
		}

		if (!isNumero(parametro2)) {
			return new ResponseEntity<>("Secondo parametro non valido", HttpStatus.BAD_REQUEST);
		}

		double valore1 = Double.parseDouble(parametro1);
		double valore2 = Double.parseDouble(parametro2);

		double risultatoCalcolato = valore1 + valore2;

		return new ResponseEntity<>("La somma è: " + risultatoCalcolato, HttpStatus.OK);
	}

	private boolean isNumero(String str) {
		try {
			Double.parseDouble(str);
			return true;
		} catch (NumberFormatException e) {
			return false;
		}
	}
}
