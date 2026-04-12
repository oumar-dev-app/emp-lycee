"use client";

import { useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';

const imgInfra = [
    {
        id: 1,
        image: "/infractructure.jpeg"
    }
]

function Infratructure() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        }, { threshold: 0.2 });

        const elements = document.querySelectorAll(
            ".hidden-left, .hidden-right"
        );

        elements.forEach((el) => observer.observe(el));
    }, []);

    return (
        <div className='max-w-7xl m-auto mb-15 mt-15'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 m-3'>

                {/* IMAGE → GAUCHE */}
                <div className='shadow-2xl rounded-xl hidden-left'>
                    {
                        imgInfra.map((item) => (
                            <div
                                style={{ backgroundImage: `url(${item.image})` }}
                                key={item.id}
                                className='h-100 w-full bg-cover bg-center rounded-xl'
                            />
                        ))
                    }
                </div>

                {/* TEXTE → DROITE */}
                <div className='text-white bg-gray-500 shadow-2xl p-4 md:p-10 rounded-xl space-y-5 hidden-right'>
                    <h1 className='text-2xl font-bold'>Infrastructures:</h1>

                    <p className='flex items-center gap-4'>
                        <FaCheck className="text-yellow-500 shrink-0" />
                        Caméras de surveillance (18 au secondaire, 24 au fondamental)
                    </p>

                    <p className='flex items-center gap-4'>
                        <FaCheck className="text-yellow-500 shrink-0" />
                        Bibliothèque équipée
                    </p>

                    <p className='flex items-center gap-4'>
                        <FaCheck className="text-yellow-500 shrink-0" />
                        Salle informatique moderne
                    </p>

                </div>

            </div>
        </div>
    )
}

export default Infratructure;