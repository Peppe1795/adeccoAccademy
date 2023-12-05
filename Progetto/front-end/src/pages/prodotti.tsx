import React, { useState } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

interface Prodotto {
    codeProduct: string;
    descrizione: string;
    um: string;
    prezzo: number;
    prezzoAcquisto: number;
    quantitaGiacenza: number;
    quantitaVenduta: number;
    quantitaAcquistata: number;
}

const ProdottoForm: React.FC = () => {
    const [codice, setCodice] = useState('');
    const [descrizione, setDescrizione] = useState('');
    const [unitaDiMisura, setUnitaDiMisura] = useState('');
    const [prezzo, setPrezzo] = useState('');
    const [quantita, setQuantita] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/product', {
                codeProduct: codice,
                descrizione,
                um: unitaDiMisura,
                prezzo: parseFloat(prezzo),
                quantita: parseInt(quantita, 10),
            });

            console.log('Prodotto inserito con successo:', response.data);
        } catch (error) {
            console.error('Errore durante l\'inserimento del prodotto:', error);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Nuovo Prodotto</h1>
            <form onSubmit={handleSubmit} className="bg-white p-8 border border-gray-300">
                <div className="mb-4">
                    <label htmlFor="codice" className="block text-sm font-medium text-gray-600">
                        Codice
                    </label>
                    <input
                        type="text"
                        id="codice"
                        name="codice"
                        value={codice}
                        onChange={(e) => setCodice(e.target.value)}
                        className="mt-1 p-2 border w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="descrizione" className="block text-sm font-medium text-gray-600">
                        Descrizione
                    </label>
                    <input
                        type="text"
                        id="descrizione"
                        name="descrizione"
                        value={descrizione}
                        onChange={(e) => setDescrizione(e.target.value)}
                        className="mt-1 p-2 border w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="unitaDiMisura" className="block text-sm font-medium text-gray-600">
                        Unità di Misura
                    </label>
                    <input
                        type="text"
                        id="unitaDiMisura"
                        name="unitaDiMisura"
                        value={unitaDiMisura}
                        onChange={(e) => setUnitaDiMisura(e.target.value)}
                        className="mt-1 p-2 border w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="prezzo" className="block text-sm font-medium text-gray-600">
                        Prezzo
                    </label>
                    <input
                        type="text"
                        id="prezzo"
                        name="prezzo"
                        value={prezzo}
                        onChange={(e) => setPrezzo(e.target.value)}
                        className="mt-1 p-2 border w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="quantita" className="block text-sm font-medium text-gray-600">
                        Quantità
                    </label>
                    <input
                        type="text"
                        id="quantita"
                        name="quantita"
                        value={quantita}
                        onChange={(e) => setQuantita(e.target.value)}
                        className="mt-1 p-2 border w-full"
                        required
                    />
                </div>
                <div className="flex items-center justify-end">
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                        Salva
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProdottoForm;
