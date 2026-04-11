"use client";

import { useEffect } from 'react';

function DifferentEcole() {

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
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>

            {/* GAUCHE */}
            <div className='border border-white/25 bg-gray-500/25 rounded-xl p-3 hidden-left delay-1'>
                <p>
                    D'un jardin d'enfants dénommé <strong>Jardin d'enfants LE ZENITH </strong>
                    comprenant la petite, la moyenne et la grande section;
                </p>
            </div>

            {/* GAUCHE (avec délai) */}
            <div className='border border-white/25 bg-gray-500/25 rounded-xl p-3 hidden-left delay-2'>
                D'un Ecole Fondamentale: <strong>
                    l'Ecole Privée Manténin Sidibé (EPMS) avec le Primaire et le collège;
                </strong>
            </div>

            {/* DROITE */}
            <div className='border border-white/25 bg-gray-500/25 rounded-xl p-3 hidden-right delay-3'>
                <p>
                    D'un lycée appelé <strong>Lycée Privé Djinèssira Coulibaly LPDJICOUL </strong>
                    où nous avons toutes les séries;
                </p>
            </div>

        </div>
    )
}

export default DifferentEcole;