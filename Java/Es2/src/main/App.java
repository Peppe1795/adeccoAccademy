package main;

import java.util.ArrayList;
import java.util.Scanner;

public class App {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		ArrayList<String> lista = new ArrayList<>();

		while (true) {
			System.out.println("Inserisci una stringa (o -1 per terminare):");
			String str = scanner.nextLine();

			if (str.equals("-1")) {
				break;
			} else {
				lista.add(str);
				System.out.println("Contenuto della lista: " + lista);
			}
		}

		System.out.println("Contenuto finale della lista: " + lista);
		scanner.close();

	}

}
