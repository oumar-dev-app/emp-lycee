"use client";

import { useEffect } from "react";
import SlideResultat from "@/_Components/SlideResultat";

const bgImage = [
    {
        id: 1,
        image: "/apropos.jpg",
    },
];

const resultatDef2026 = [
    {
        categorie: "Inscrits",
        garcon: 34,
        fille: 37,
        total: 71,
    },
    {
        categorie: "Présentés",
        garcon: 34,
        fille: 37,
        total: 71,
    },
    {
        categorie: "Admis",
        garcon: 33,
        fille: 35,
        total: 68,
    },
    {
        categorie: "Taux d'admission",
        garcon: "97,06%",
        fille: "94,59%",
        total: "95,77%",
    },
];



export default function ActualitePage() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const elements = document.querySelectorAll(
            ".hidden-left, .hidden-right"
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div>
            <SlideResultat />

            <div className="max-w-7xl m-auto mt-20 mb-20">
                <div className="m-3">

                    {bgImage.map((item) => (
                        <div
                            key={item.id}
                            style={{
                                backgroundImage: `url(${item.image})`,
                            }}
                            className="w-full bg-cover bg-center rounded-2xl overflow-hidden"
                        >

                            <div className="bg-white/90 p-5 md:p-10">

                                {/* TABLEAU RESULTATS DEF 2026 */}

                                <div className="mt-10 hidden-left bg-gray-600 text-white shadow-2xl p-6 md:p-10 rounded-xl">

                                    <h2 className="text-2xl md:text-3xl font-bold mb-3">
                                        Résultat du DEF Session 2026
                                    </h2>

                                    <p className="mb-8 text-yellow-400 font-bold">
                                        Taux national : 65,40%
                                    </p>


                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse bg-white text-black rounded-xl overflow-hidden">
                                            <thead className="bg-green-600 text-white">

                                                <tr>

                                                    <th className="p-4 text-left">
                                                        Catégorie
                                                    </th>

                                                    <th className="p-4">
                                                        Garçon
                                                    </th>

                                                    <th className="p-4">
                                                        Fille
                                                    </th>

                                                    <th className="p-4">
                                                        Total
                                                    </th>

                                                </tr>

                                            </thead>


                                            <tbody>

                                                {resultatDef2026.map((item) => (

                                                    <tr
                                                        key={item.categorie}
                                                        className={`border-b hover:bg-gray-100 ${item.categorie === "Taux d'admission"
                                                            ? "font-bold"
                                                            : ""
                                                            }`}
                                                    >

                                                        <td className="p-4 font-bold">
                                                            {item.categorie}
                                                        </td>


                                                        <td className="p-4 text-center">
                                                            {item.garcon}
                                                        </td>


                                                        <td className="p-4 text-center">
                                                            {item.fille}
                                                        </td>


                                                        <td className="p-4 text-center font-bold text-green-600">
                                                            {item.total}
                                                        </td>

                                                    </tr>

                                                ))}

                                            </tbody>

                                        </table>

                                    </div>


                                    {/* Résumé DEF */}

                                    <div className="mt-6 rounded-lg bg-white p-5 text-black">

                                        <h3 className="text-xl font-bold mb-3">
                                            Résumé DEF 2026
                                        </h3>

                                        <p>
                                            Sur <strong>71 candidats présentés</strong>,
                                            l'établissement a obtenu
                                            <strong> 68 admis</strong>, soit un taux de réussite de
                                            <strong className="text-green-600"> 95,77%</strong>.
                                        </p>

                                    </div>


                                </div>

                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}