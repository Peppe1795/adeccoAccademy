import React from 'react';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

const Inventario = () => {
    const prodotti = [
        { id: 1, codice: 'P001', descrizione: 'Prodotto A', prezzoAcquisto: 50, giacenza: 20 },
        { id: 2, codice: 'P002', descrizione: 'Prodotto B', prezzoAcquisto: 30, giacenza: 15 },
    ];

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Inventario</h1>
            <ul className="space-y-2">
                {prodotti.map((prodotto) => (
                    <li key={prodotto.id} className="border p-4 rounded-md">
                        <div>Codice: {prodotto.codice}</div>
                        <div>Descrizione: {prodotto.descrizione}</div>
                        <div>Prezzo Acquisto: {prodotto.prezzoAcquisto}</div>
                        <div>Giacenza: {prodotto.giacenza}</div>
                        <div>Valore Giacenza: {prodotto.prezzoAcquisto * prodotto.giacenza}</div>
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
