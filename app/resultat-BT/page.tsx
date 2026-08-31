"use client";

import { useEffect } from "react";
import SlideResultat from "@/_Components/SlideResultat";

const bgImage = [
    {
        id: 1,
        image: "/apropos.jpg",
    },
];

const resultatParClasse = [
    {
        classe: "CAP-AC",
        presentG: 6,
        presentF: 9,
        admisG: 4,
        admisF: 2,
        tauxG: "66,67%",
        tauxF: "22,22%",
        tauxT: "40,00%",
    },
    {
        classe: "CAP-EB",
        presentG: 0,
        presentF: 11,
        admisG: 0,
        admisF: 9,
        tauxG: "#DIV/0!",
        tauxF: "81,82%",
        tauxT: "81,82%",
    },
    {
        classe: "BT1-TCA",
        presentG: 2,
        presentF: 3,
        admisG: 0,
        admisF: 1,
        tauxG: "0,00%",
        tauxF: "33,33%",
        tauxT: "20,00%",
    },
    {
        classe: "BT1-SD",
        presentG: 0,
        presentF: 5,
        admisG: 0,
        admisF: 3,
        tauxG: "#DIV/0!",
        tauxF: "60,00%",
        tauxT: "60,00%",
    },
    {
        classe: "BT2-TCA",
        presentG: 2,
        presentF: 3,
        admisG: 1,
        admisF: 0,
        tauxG: "50,00%",
        tauxF: "0,00%",
        tauxT: "20,00%",
    },
    {
        classe: "BT2-SD",
        presentG: 0,
        presentF: 7,
        admisG: 0,
        admisF: 7,
        tauxG: "#DIV/0!",
        tauxF: "100,00%",
        tauxT: "100,00%",
    },
    {
        classe: "TOTAUX",
        presentG: 10,
        presentF: 38,
        admisG: 5,
        admisF: 22,
        tauxG: "50,00%",
        tauxF: "57,89%",
        tauxT: "56%",
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
                                {/* RESULTATS PAR CLASSE */}

                                <div className="mt-10 hidden-right bg-gray-600 text-white shadow-2xl p-6 md:p-10 rounded-xl">
                                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                                        CFPBK-KCORO CAP & BT 2026
                                    </h2>

                                    <div className="overflow-x-auto">
                                        <table className="w-full min-w-212.5 border-collapse bg-white text-black rounded-xl overflow-hidden">
                                            <thead>
                                                {/* Première ligne */}
                                                <tr className="bg-green-600 text-white">
                                                    <th
                                                        rowSpan={2}
                                                        className="p-3  border-black text-left"
                                                    >
                                                        Classes
                                                    </th>

                                                    <th
                                                        colSpan={2}
                                                        className="p-3  border-black"
                                                    >
                                                        Candidats présentés
                                                    </th>

                                                    <th
                                                        colSpan={2}
                                                        className="p-3  border-black"
                                                    >
                                                        Nbre d'admis
                                                    </th>

                                                    <th
                                                        colSpan={3}
                                                        className="p-3  border-black"
                                                    >
                                                        % d'admission
                                                    </th>
                                                </tr>

                                                {/* Deuxième ligne */}
                                                <tr className="bg-green-600 text-white">
                                                    <th className="p-3  border-black">G</th>
                                                    <th className="p-3  border-black">F</th>

                                                    <th className="p-3  border-black">G</th>
                                                    <th className="p-3  border-black">F</th>

                                                    <th className="p-3  border-black">G</th>
                                                    <th className="p-3  border-black">F</th>
                                                    <th className="p-3  border-black">T</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {resultatParClasse.map((item) => {
                                                    const isTotal = item.classe === "TOTAUX";

                                                    return (
                                                        <tr
                                                            key={item.classe}
                                                            className={`border-b border-black ${isTotal
                                                                ? "font-bold  text-black"
                                                                : "hover:bg-gray-100"
                                                                }`}
                                                        >
                                                            <td className="p-4 font-bold">
                                                                {item.classe}
                                                            </td>

                                                            <td className="p-4 font-bold">
                                                                {item.presentG}
                                                            </td>

                                                            <td className="p-4 font-bold">
                                                                {item.presentF}
                                                            </td>

                                                            <td className="p-4 font-bold">
                                                                {item.admisG}
                                                            </td>

                                                            <td className="p-4 font-bold">
                                                                {item.admisF}
                                                            </td>

                                                            <td
                                                                className={`p-3  text-center font-bold ${item.tauxG === "#DIV/0!"
                                                                    ? "text-black"
                                                                    : "text-black"
                                                                    }`}
                                                            >
                                                                {item.tauxG}
                                                            </td>

                                                            <td className="p-4 font-bold">
                                                                {item.tauxF}
                                                            </td>

                                                            <td className="p-4 font-bold">
                                                                {item.tauxT}
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Résumé final comme sur l'image */}
                                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                                        <div className="bg-white text-black font-bold text-md sm:text-xl px-4 py-2 rounded-lg shadow w-full sm:w-auto text-center">
                                            48 candidats
                                        </div>

                                        <div className="bg-green-500 text-black font-bold text-md sm:text-xl px-4 py-2 rounded-lg shadow w-full sm:w-auto text-center">
                                            27 admis
                                        </div>

                                        <div className="bg-green-500 text-black font-bold text--md sm:text-xl px-4 py-2 rounded-lg shadow w-full sm:w-auto text-center">
                                            56%
                                        </div>
                                    </div>

                                    <div className="text-center mt-6 font-bold text-lg">
                                        La direction
                                    </div>

                                    <p className="text-center text-sm italic mt-3">
                                        GSAS, on n'est pas premier par hasard !
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}