import React from 'react';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

const ListaMovimenti = () => {
    const movimenti = [
        { id: 1, tipo: 'Acquisto', prodotto: 'Prodotto A', quantita: 10 },
        { id: 2, tipo: 'Vendita', prodotto: 'Prodotto B', quantita: 5 },
    ];

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Lista dei Movimenti</h1>
            <ul className="space-y-2">
                {movimenti.map((movimento) => (
                    <li key={movimento.id} className="border p-4 rounded-md">
                        <div>Tipo: {movimento.tipo}</div>
                        <div>Prodotto: {movimento.prodotto}</div>
                        <div>Quantità: {movimento.quantita}</div>
                    </li>
                ))}
            </ul>
            <Link href="/inserisci-movimento">
                <button className="block mt-4 text-blue-500 cursor-pointer hover:underline">
                    Inserisci Movimento
                </button>
            </Link>
        </div>
    );
};

export default ListaMovimenti;
