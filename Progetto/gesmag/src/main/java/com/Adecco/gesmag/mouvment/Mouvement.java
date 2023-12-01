package com.Adecco.gesmag.mouvment;

import java.util.Date;
import java.util.UUID;

import org.hibernate.annotations.CreationTimestamp;

import com.Adecco.gesmag.product.Product;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "mouvement")
@Data
@NoArgsConstructor
public class Mouvement {
	@Id
	@GeneratedValue
	private UUID mouvementId;

	private String codiceMovimento;

	@CreationTimestamp
	private Date dataOraMovimento;

	private String nomeCliente;

	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "idProduct")
	@JsonIgnore
	private Product product;

	private double prezzo;

	private int quantitaMoviementata;

	public Mouvement(String codiceMovimento, String nomeCliente, Product product, double prezzo,
			int quantitaMoviementata) {
		this.codiceMovimento = codiceMovimento;
		this.nomeCliente = nomeCliente;
		this.product = product;
		this.prezzo = prezzo;
		this.quantitaMoviementata = quantitaMoviementata;
	}
}