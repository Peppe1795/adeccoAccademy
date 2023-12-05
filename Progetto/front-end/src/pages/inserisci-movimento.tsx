import React, { useState, useEffect } from 'react';
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

const InserisciMovimento: React.FC = () => {
    const [tipoMovimento, setTipoMovimento] = useState('');
    const [prodotto, setProdotto] = useState('');
    const [codiceMovimento, setCodiceMovimento] = useState('');
    const [nomeCliente, setNomeCliente] = useState('');
    const [prezzo, setPrezzo] = useState(0);
    const [quantitaMoviementata, setQuantitaMoviementata] = useState(0);
    const [listaProdotti, setListaProdotti] = useState<Prodotto[]>([]);

    useEffect(() => {
        const fetchProdotti = async () => {
            try {
                const response = await axios.get('http://localhost:3001/product');
                setListaProdotti(response.data.content);
            } catch (error) {
                console.error('Errore durante il recupero dei prodotti:', error);
            }
        };

        fetchProdotti();
    }, []);

    const handleTipoMovimentoChange = (e: React.ChangeEvent<HTMLSelectElement>) => setTipoMovimento(e.target.value);
    const handleProdottoChange = (e: React.ChangeEvent<HTMLSelectElement>) => setProdotto(e.target.value);
    const handleCodiceMovimentoChange = (e: React.ChangeEvent<HTMLInputElement>) => setCodiceMovimento(e.target.value);
    const handleNomeClienteChange = (e: React.ChangeEvent<HTMLInputElement>) => setNomeCliente(e.target.value);
    const handlePrezzoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        setPrezzo(isNaN(value) ? 0 : value);
    };
    const handleQuantitaMoviementataChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setQuantitaMoviementata(parseInt(e.target.value, 10));

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/mouvement', {
                codiceMovimento,
                nomeCliente,
                productId: prodotto,
                prezzo,
                quantitaMoviementata,
            });

            console.log('Movimento inserito con successo:', response.data);
        } catch (error) {
            console.error('Errore durante l\'inserimento del movimento:', error);
        }
    };

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
                        required
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
                        required
                    >
                        <option value="">Seleziona prodotto</option>
                        {listaProdotti.map((p) => (
                            <option key={p.idProduct} value={p.idProduct.toString()}>
                                {p.idProduct}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Codice Movimento:</label>
                    <input
                        type="text"
                        value={codiceMovimento}
                        onChange={handleCodiceMovimentoChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Nome Cliente:</label>
                    <input
                        type="text"
                        value={nomeCliente}
                        onChange={handleNomeClienteChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Prezzo:</label>
                    <input
                        type="number"
                        value={prezzo}
                        onChange={handlePrezzoChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Quantità Movimentata:</label>
                    <input
                        type="number"
                        value={quantitaMoviementata}
                        onChange={handleQuantitaMoviementataChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    />
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
