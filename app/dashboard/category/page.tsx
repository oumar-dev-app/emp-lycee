"use client";

import { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";

type Category = {
    id: number;
    nom: string;
    couleur: string;
};

export default function CategoryPage() {

    const [category, setCategory] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true); // nouvel état

    useEffect(() => {
        const fetchCategory = async () => {
            setLoading(true); // démarrer le chargement
            try {
                const token = localStorage.getItem("token");
                const res = await fetch("/api/category", {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const data = await res.json();
                setCategory(data.message || []); // correction si data.message est undefined
            } catch (error) {
                console.error("Erreur fetch category:", error);
                setCategory([]);
            } finally {
                setLoading(false); // fin du chargement
            }
        };

        fetchCategory();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-40">
                <p className="text-gray-500 font-bold">Chargement des catégories...</p>
            </div>
        );
    }

    return (
        <div className="space-y-3">
             <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl">Les listes des categorys</h1>
                <button className="font-bold text-2xl bg-gray-400 cursor-pointer p-2 px-5 rounded-xl text-white" title="Ajouter">+</button>
            </div>

            {category.length === 0 && (
                <p className="text-gray-500 font-medium">Aucune catégorie trouvée.</p>
            )}

            {category.map((c) => (
                <div key={c.id} className="flex justify-between gap-10 border border-black/25 rounded-xl p-2">
                    <div className="flex gap-10 items-center">
                        <p>{c.id}</p>
                        <p>{c.nom}</p>
                        <p>{c.couleur}</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="bg-blue-500 p-2 rounded-xl text-sm font-bold hover:bg-blue-400 cursor-pointer text-white">
                            Modifier
                        </button>
                        <button className="bg-red-500 hover:bg-red-400 cursor-pointer p-2 rounded-xl text-white">
                            <BiTrash size={18} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}