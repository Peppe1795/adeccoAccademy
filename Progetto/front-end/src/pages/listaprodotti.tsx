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

const ListaProdotti: React.FC = () => {
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
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-center">Lista dei Prodotti</h1>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-3 px-4 border-b">ID</th>
                        <th className="py-3 px-4 border-b">Codice</th>
                        <th className="py-3 px-4 border-b">Descrizione</th>
                        <th className="py-3 px-4 border-b">Unita Di misura</th>
                        <th className="py-3 px-4 border-b">Prezzo</th>
                        <th className="py-3 px-4 border-b">Prezzo Acquisto</th>
                        <th className="py-3 px-4 border-b">Quantita Giacenza</th>
                        <th className="py-3 px-4 border-b">Quantita Venduta</th>
                        <th className="py-3 px-4 border-b">Quantita Acquistata</th>
                    </tr>
                </thead>
                <tbody>
                    {prodotti.map((prodotto) => (
                        <tr key={prodotto.idProduct} className="hover:bg-gray-100">
                            <td className="py-3 px-4 border-b">{prodotto.idProduct}</td>
                            <td className="py-3 px-4 border-b">{prodotto.codeProduct}</td>
                            <td className="py-3 px-4 border-b">{prodotto.descrizione}</td>
                            <td className="py-3 px-4 border-b">{prodotto.um}</td>
                            <td className="py-3 px-4 border-b">{prodotto.prezzo}</td>
                            <td className="py-3 px-4 border-b">{prodotto.prezzoAcquisto}</td>
                            <td className="py-3 px-4 border-b">{prodotto.quantitaGiacenza}</td>
                            <td className="py-3 px-4 border-b">{prodotto.quantitaVenduta}</td>
                            <td className="py-3 px-4 border-b">{prodotto.quantitaAcquistata}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="mt-4 flex justify-between">
                <Link href="/listamovimenti">
                    <div className="text-blue-500 cursor-pointer hover:underline">Movimenti</div>
                </Link>
                <Link href="/inventario">
                    <div className="text-blue-500 cursor-pointer hover:underline">Inventario</div>
                </Link>
            </div>
        </div>
    );
}

export default ListaProdotti;
