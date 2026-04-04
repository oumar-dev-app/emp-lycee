"use client";

import LoginIMG from "@/_Components/LoginIMG";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
    const router = useRouter();

    // 👇 États pour tous les champs du formulaire
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nom,
                prenom,
                email,
                telephone,
                password,
            }),
        });

        const data = await res.json();

        if (res.ok) {
            router.push("/"); // redirection après inscription
        } else {
            alert(data.message);
        }

        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex justify-center items-center h-screen'>
                <div className='bg-white rounded-xl shadow-2xl w-130 h-auto'>
                    <div className='flex flex-col space-y-6 p-6'>

                        <div className='flex justify-center'>
                            <LoginIMG />
                        </div>

                        {/* Nom */}
                        <div className='flex flex-col'>
                            <label className='text-sm font-bold text-black/40 p-2'>
                                Nom: <span className='text-red-600'>*</span>
                            </label>
                            <input
                                type="text"
                                placeholder='Nom'
                                className='p-2 border-2 border-black/20 rounded-xl outline-none'
                                value={nom}
                                onChange={(e) => setNom(e.target.value)}
                                required
                            />
                        </div>

                        {/* Prénom */}
                        <div className='flex flex-col'>
                            <label className='text-sm font-bold text-black/40 p-2'>
                                Prénom: <span className='text-red-600'>*</span>
                            </label>
                            <input
                                type="text"
                                placeholder='Prénom'
                                className='p-2 border-2 border-black/20 rounded-xl outline-none'
                                value={prenom}
                                onChange={(e) => setPrenom(e.target.value)}
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className='flex flex-col'>
                            <label className='text-sm font-bold text-black/40 p-2'>
                                Email: <span className='text-red-600'>*</span>
                            </label>
                            <input
                                type="email"
                                placeholder='Adresse e-mail'
                                className='p-2 border-2 border-black/20 rounded-xl outline-none'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        {/* Téléphone */}
                        <div className='flex flex-col'>
                            <label className='text-sm font-bold text-black/40 p-2'>
                                Téléphone: <span className='text-red-600'>*</span>
                            </label>
                            <input
                                type="text"
                                placeholder='Téléphone'
                                className='p-2 border-2 border-black/20 rounded-xl outline-none'
                                value={telephone}
                                onChange={(e) => setTelephone(e.target.value)}
                                required
                            />
                        </div>

                        {/* Mot de passe */}
                        <div className='flex flex-col'>
                            <label className='text-sm font-bold text-black/40 p-2'>
                                Password: <span className='text-red-600'>*</span>
                            </label>
                            <input
                                type="password"
                                placeholder='Mot de passe'
                                className='p-2 border-2 border-black/20 rounded-xl outline-none'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {/* Boutons */}
                        <div className='flex flex-col justify-center space-y-4'>
                            <button
                                type='submit'
                                className='text-sm p-2 py-2 px-10 text-white bg-blue-950 rounded-xl font-bold'>
                                Enregistrer
                            </button>

                            <button
                                type='button'
                                className='text-sm p-2 py-2 px-10 text-white bg-red-600 rounded-xl font-bold'
                                onClick={() => {
                                    setNom("");
                                    setPrenom("");
                                    setEmail("");
                                    setTelephone("");
                                    setPassword("");
                                    router.push("/");
                                }}
                            >
                                Annuler
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </form>
    );
}