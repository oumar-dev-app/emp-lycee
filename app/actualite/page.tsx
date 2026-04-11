"use client";

import { useEffect } from "react";
import SliderAcutialite from "@/_Components/SliderActualite";
import { FaCheck } from "react-icons/fa";

const bgImage = [
    {
        id: 1,
        image: "/apropos.jpg"
    }
]

export default function ActualitePage() {

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
        <div>
            <SliderAcutialite />

            <div className='max-w-7xl m-auto mt-20 mb-20'>
                <div className="m-3">

                    {bgImage.map((item) => (
                        <div
                            key={item.id}
                            style={{ backgroundImage: `url(${item.image})` }}
                            className='w-full h-full bg-cover bg-center rounded-2xl'
                        >
                            <div className="bg-white/90 w-full h-full">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                                    {/* DEF → GAUCHE */}
                                    <div className='text-white bg-gray-500 shadow-2xl p-6 md:p-10 rounded-xl space-y-5 hidden-left'>
                                        <h1 className='text-2xl font-bold'>
                                            Performances et distinctions :
                                        </h1>

                                        <p className='flex items-center gap-4'>
                                            <FaCheck className="text-yellow-500 shrink-0" />
                                            1er du CAP de Kalaban-Coro et 5è national au DEF 2019
                                        </p>

                                        <p className='flex items-center gap-4'>
                                            <FaCheck className="text-yellow-500 shrink-0" />
                                            DEF 2020 : 100%
                                        </p>

                                        <p className='flex items-center gap-4'>
                                            <FaCheck className="text-yellow-500 shrink-0" />
                                            DEF 2021 : plusieurs élèves classés parmi les meilleurs
                                        </p>

                                        <p className='flex items-center gap-4'>
                                            <FaCheck className="text-yellow-500 shrink-0" />
                                            DEF 2022 : 95%
                                        </p>

                                        <p className='flex items-center gap-4'>
                                            <FaCheck className="text-yellow-500 shrink-0" />
                                            DEF 2023 : 90%
                                        </p>

                                        <p className='flex items-center gap-4'>
                                            <FaCheck className="text-yellow-500 shrink-0" />
                                            DEF 2024 : 97%
                                        </p>
                                    </div>

                                    {/* BAC → DROITE */}
                                    <div className='text-white bg-gray-500 shadow-2xl p-6 md:p-10 rounded-xl space-y-5 hidden-right'>
                                        <h1 className='text-2xl font-bold'>
                                            Baccalauréat :
                                        </h1>

                                        <p className='flex items-center gap-4'>
                                            <FaCheck className="text-yellow-500 shrink-0" />
                                            3è national au Bac 2022
                                        </p>

                                        <p className='flex items-center gap-4'>
                                            <FaCheck className="text-yellow-500 shrink-0" />
                                            Bac 2023 : établissement distingué
                                        </p>

                                        <p className='flex items-center gap-4'>
                                            <FaCheck className="text-yellow-500 shrink-0" />
                                            Bac 2024 : 1ère nationale
                                        </p>
                                    </div>

                                    {/* CONCOURS → GAUCHE */}
                                    <div className='text-white bg-gray-500 shadow-2xl p-6 md:p-10 rounded-xl space-y-5 hidden-left'>
                                        <h1 className='text-2xl font-bold'>
                                            Concours internationaux :
                                        </h1>

                                        <p className='flex items-center gap-4'>
                                            <FaCheck className="text-yellow-500 shrink-0" />
                                            Olympiades de mathématiques 2024 : médaille de bronze
                                        </p>

                                        <p className='flex items-center gap-4'>
                                            <FaCheck className="text-yellow-500 shrink-0" />
                                            Olympiades 2025 : 1ère et 2ème places académiques
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}