package com.Adecco.gesmag.product;

import java.util.UUID;

import com.Adecco.gesmag.mouvment.Mouvement;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "product")
@NoArgsConstructor
public class Product {
	@Id
	@GeneratedValue
	private UUID idProduct;

	private String codeProduct;

	private String descrizione;

	private String um;

	private double prezzo;

	private double prezzoAcquisto;

	private int quantitaGiacenza;

	private int quantitaVenduta;

	private int quantitaAcquistata;

	@OneToOne(mappedBy = "product", fetch = FetchType.LAZY)
	@JsonIgnoreProperties("product")
	private Mouvement mouvement;

	public Product(String codeProduct, String descrizione, String um, double prezzo, double prezzoAcquisto,
			int quantitaGiacenza, int quantitaVenduta, int quantitaAcquistata) {
		this.codeProduct = codeProduct;
		this.descrizione = descrizione;
		this.um = um;
		this.prezzo = prezzo;
		this.prezzoAcquisto = prezzoAcquisto;
		this.quantitaGiacenza = quantitaGiacenza;
		this.quantitaVenduta = quantitaVenduta;
		this.quantitaAcquistata = quantitaAcquistata;
	}
}