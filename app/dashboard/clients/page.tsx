"use client";

import { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { CgMore } from "react-icons/cg";

type Client = {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    telephoneNumber: string;
};

export default function ClientsPage() {

    const [clients, setClients] = useState<Client[]>([]);
    const [loading, setLoading] = useState<boolean>(true); // nouvel état

    useEffect(() => {

        const fetchClients = async () => {
            setLoading(true); // commencer le chargement
            try {
                const token = localStorage.getItem("token");   // récupérer le token
                const res = await fetch("/api/clients", {
                    headers: { Authorization: `Bearer ${token}` } // envoyer le token
                });
                const data = await res.json();

                setClients(data.data || []); // fallback si data.data est undefined
            } catch (err) {
                console.error("Erreur fetch clients:", err);
                setClients([]);
            } finally {
                setLoading(false); // fin du chargement
            }
        };

        fetchClients();

    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-40">
                <p className="text-gray-500 font-bold">Chargement des clients...</p>
            </div>
        );
    }

    return (
        <div className="space-y-3">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl">Les listes des clients</h1>
                <button className="font-bold text-2xl bg-gray-400 cursor-pointer p-2 px-5 rounded-xl text-white" title="Ajouter">+</button>
            </div>


            {clients.length === 0 && (
                <p className="text-gray-500 font-medium">Aucun client trouvé.</p>
            )}

            {clients.map((c) => (
                <div key={c.id} className="flex justify-between gap-10 border border-black/25 rounded-xl p-2 ">
                    <div className="flex items-center gap-10">
                        <p>{c.id}</p>
                        <p>{c.nom}</p>
                        <p>{c.prenom}</p>
                        <p>{c.email}</p>
                        <p>{c.telephoneNumber}</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="bg-blue-500 p-2 rounded-xl text-sm font-bold hover:bg-blue-400 cursor-pointer text-white">
                            Modifier
                        </button>
                        <button className="bg-red-500 hover:bg-red-400 cursor-pointer p-2 rounded-xl text-white">
                            <BiTrash size={18} title="Supprimer" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}