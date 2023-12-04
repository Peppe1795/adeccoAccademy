import React from 'react';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

interface Prodotto {
    id: number;
    nome: string;
    prezzo: number;
}

const ListaProdotti: React.FC = () => {
    const prodotti: Prodotto[] = [
        { id: 1, nome: 'Prodotto 1', prezzo: 10 },
        { id: 2, nome: 'Prodotto 2', prezzo: 20 },
        { id: 3, nome: 'Prodotto 3', prezzo: 30 },
    ];

    return renderListaProdotti(prodotti);
};

function renderListaProdotti(prodotti: Prodotto[]) {
    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-center">Lista dei Prodotti</h1>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-3 px-4 border-b">ID</th>
                        <th className="py-3 px-4 border-b">Codice</th>
                        <th className="py-3 px-4 border-b">Descrizione</th>
                        <th className="py-3 px-4 border-b">Azione</th>
                    </tr>
                </thead>
                <tbody>
                    {prodotti.map((prodotto) => (
                        <tr key={prodotto.id} className="hover:bg-gray-100">
                            <td className="py-3 px-4 border-b">{prodotto.id}</td>
                            <td className="py-3 px-4 border-b">{prodotto.nome}</td>
                            <td className="py-3 px-4 border-b">{prodotto.prezzo} €</td>
                            <td className="py-3 px-4 border-b">
                                <Link href={`/prodotto/${prodotto.id}`} passHref>
                                    <div className="text-blue-500 cursor-pointer hover:underline">Dettagli</div>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListaProdotti;
