package com.Adecco.gesmag.product;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ProductPayLoad {

	private String codeProduct;

	private String descrizione;

	private String um;

	private double prezzo;

	private double prezzoAcquisto;

	private int quantitaGiacenza;

	private int quantitaVenduta;

	private int quantitaAcquistata;
}
