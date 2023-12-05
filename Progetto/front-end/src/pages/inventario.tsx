import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

interface Prodotto {
    idProduct: string;
    codeProduct: string;
    descrizione: string;
    um: string;
    prezzo: number;
    prezzoAcquisto: number;
    quantitaGiacenza: number;
    quantitaVenduta: number;
    quantitaAcquistata: number;
}

const Inventario = () => {
    const [prodotti, setProdotti] = useState<Prodotto[]>([]);

    async function getProdotti() {
        try {
            const response = await axios.get('http://localhost:3001/product');

            if (response.data && response.data.content && Array.isArray(response.data.content)) {
                setProdotti(response.data.content);
            } else {
                console.error("La risposta non contiene un array sotto la chiave 'content':", response.data);
            }
        } catch (error) {
            alert("Impossibile raggiungere il server!");
        }
    }

    useEffect(() => {
        getProdotti();
    }, []);

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Inventario</h1>
            <ul className="space-y-2">
                {prodotti.map((prodotto) => (
                    <li key={prodotto.idProduct} className="border p-4 rounded-md">
                        <div>Codice: {prodotto.codeProduct}</div>
                        <div>Descrizione: {prodotto.descrizione}</div>
                        <div>Prezzo Acquisto: {prodotto.prezzoAcquisto}</div>
                        <div>Giacenza: {prodotto.quantitaGiacenza}</div>
                        <div>Valore Giacenza: {prodotto.prezzoAcquisto * prodotto.quantitaGiacenza}</div>
                    </li>
                ))}
            </ul>
            <Link href="/listaprodotti">
                <button className="block mt-4 text-blue-500 cursor-pointer hover:underline">
                    Lista Prodotti
                </button>
            </Link>
        </div>
    );
};

export default Inventario;
