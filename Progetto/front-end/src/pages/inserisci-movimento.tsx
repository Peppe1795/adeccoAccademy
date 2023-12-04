import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

interface Prodotto {
    id: number;
    nome: string;
}

const InserisciMovimento: React.FC = () => {
    const [tipoMovimento, setTipoMovimento] = useState('');
    const [prodotto, setProdotto] = useState('');

    const handleTipoMovimentoChange = (e: React.ChangeEvent<HTMLSelectElement>) => setTipoMovimento(e.target.value);
    const handleProdottoChange = (e: React.ChangeEvent<HTMLSelectElement>) => setProdotto(e.target.value);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const listaProdotti: Prodotto[] = [
        { id: 1, nome: 'Prodotto A' },
        { id: 2, nome: 'Prodotto B' },
    ];

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Inserisci Movimento</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Tipo di Movimento:</label>
                    <select
                        value={tipoMovimento}
                        onChange={handleTipoMovimentoChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    >
                        <option value="">Seleziona tipo</option>
                        <option value="acquisto">Acquisto</option>
                        <option value="vendita">Vendita</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Prodotto:</label>
                    <select
                        value={prodotto}
                        onChange={handleProdottoChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    >
                        <option value="">Seleziona prodotto</option>
                        {listaProdotti.map((p) => (
                            <option key={p.id} value={p.nome}>
                                {p.nome}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                    >
                        Inserisci Movimento
                    </button>
                </div>
            </form>
        </div>
    );
};

export default InserisciMovimento;
