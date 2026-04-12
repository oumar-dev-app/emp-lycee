"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaYoutube } from 'react-icons/fa';

const bgImage = [
    { id: 1, image: "/premier1.jpeg" },
    { id: 2, image: "/premier2.jpeg" },
];

function PremierNationale() {

    const [index, setIndex] = useState(0);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true);

            setTimeout(() => {
                setIndex((prev) => (prev + 1) % bgImage.length);
                setAnimate(false);
            }, 300); // durée de sortie

        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10'>

                {/* IMAGE */}
                <div className='shadow-2xl rounded-xl overflow-hidden relative h-100'>

                    <div
                        key={index}
                        style={{ backgroundImage: `url(${bgImage[index].image})` }}
                        className={`
                            absolute w-full h-full bg-cover bg-center rounded-xl
                            transition-all duration-700
                            ${animate ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}
                        `}
                    />

                </div>

                {/* TEXTE */}
                <div className='text-white bg-gray-500 shadow-2xl p-4 md:p-10 rounded-xl space-y-5'>
                    <p>
                        <span>Bintou Flamousso Diallo </span>
                        du Lycée Privé Djinèssira Coulibaly devient la première nationale
                    </p>

                    <div className='bg-white rounded-xl p-2 w-30'>
                        <Link
                            href="https://youtu.be/9fXR4ZrPImY?si=t1hEXzfvhthyNCFk"
                            className='flex items-center gap-3 text-black text-sm font-bold'
                        >
                            Voir sur <FaYoutube size={20} className='text-red-500' />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PremierNationale;