package com.Adecco.gesmag.mouvment;

import java.util.UUID;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class MouvementPayLoad {

	private String codiceMovimento;

	private String nomeCliente;

	private UUID productId;

	private double prezzo;

	private int quantitaMoviementata;
}