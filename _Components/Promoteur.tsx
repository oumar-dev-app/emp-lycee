"use client";

import { useEffect } from "react";
import Adresse from './Adresse';

const image = [
    {
        id: 1,
        img: "/promoteur.jpg",
        title: "promoteur1"
    }
]

const bgImage = [
    {
        id: 1,
        image: "/apropos.jpg"
    }
]

function Promoteur() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        }, { threshold: 0.2 });

        const elements = document.querySelectorAll(".hidden-left, .hidden-right");

        elements.forEach((el) => observer.observe(el));
    }, []);

    return (
        <div className='max-w-7xl m-auto mt-20 mb-15'>
            <div className='m-3'>
                {
                    bgImage.map((item) => (
                        <div
                            style={{ backgroundImage: `url(${item.image})` }}
                            key={item.id}
                            className='w-full h-full bg-cover bg-center rounded-2xl'
                        >
                            <div className="bg-white/93 w-full h-full">
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

                                    {/* IMAGE → GAUCHE */}
                                    <div className='shadow-2xl rounded-xl hidden-left'>
                                        {
                                            image.map((item) => (
                                                <div key={item.id}
                                                    className='h-100 w-full bg-cover bg-center rounded-xl'
                                                    style={{ backgroundImage: `url(${item.img})` }}
                                                />
                                            ))
                                        }
                                    </div>

                                    {/* TEXTE → DROITE */}
                                    <div className='border border-white shadow-2xl p-5 rounded-xl space-y-5 hidden-right'>
                                        <h1 className='text-2xl font-bold'>Mot de Promoteur</h1>
                                        <p>
                                            Nous invitons les parents d'élèves à venir inscrire leurs enfants afin de leur garantir une formation de
                                            qualité avec des méthodes et techniques d'approches innovantes et captivantes. Alors chers parents ne ratez
                                            pas cette aubaine.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Promoteur;