import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

interface Movimento {
    mouvementId: string;
    codiceMovimento: string;
    dataOraMovimento: number;
    nomeCliente: string;
    prezzo: number;
    quantitaMoviementata: number;
}

const ListaMovimenti = () => {
    const [movimenti, setMovimenti] = useState<Movimento[]>([]);

    async function getMovimenti() {
        try {
            const response = await axios.get('http://localhost:3001/mouvement');
            setMovimenti(response.data.content);
        } catch (error) {
            alert("Impossibile raggiungere il server!");
        }
    }

    useEffect(() => {
        getMovimenti();
    }, []);

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Lista dei Movimenti</h1>
            <ul className="space-y-2">
                {movimenti.map((movimento) => (
                    <li key={movimento.mouvementId} className="border p-4 rounded-md">
                        <div>Codice Movimento: {movimento.codiceMovimento}</div>
                        <div>Data e Ora Movimento: {new Date(movimento.dataOraMovimento).toLocaleString()}</div>
                        <div>Nome Cliente: {movimento.nomeCliente}</div>
                        <div>Prezzo: {movimento.prezzo}</div>
                        <div>Quantità Movimentata: {movimento.quantitaMoviementata}</div>
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
