package main;

import java.util.Arrays;

public class Main {

	public static void main(String[] args) {

		String[] array1 = { "1", "2", "3", "4" };

		try {
			controllo(array1);
			stampa(array1);
			int numero = conversione(array1[1]);
			int num = conta(numero);
			System.out.println("La somma è " + num);
		} catch (IllegalArgumentException e) {
			System.out.println("Errore : " + e.getMessage());
		}

	}

	public static void controllo(String[] array) {
		if (array.length % 2 != 0) {
			throw new IllegalArgumentException("Il numero di argomenti è dispari");
		}
	}

	public static int conversione(String str) {
		try {
			int conv = Integer.parseInt(str);
			System.out.println("La Stringa " + str + " è stata convertita in numero " + conv);
			return conv;
		} catch (NumberFormatException e) {
			System.out.println("Errore nella conversione");
			return 3;
		}
	}

	public static void stampa(String[] array) {
		System.out.println(Arrays.toString(array));
	}

	public static int conta(int num) {
		int somma = 0;
		for (int i = 1; i <= num; i++) {
			somma += i;
		}
		return somma;
	}
}
