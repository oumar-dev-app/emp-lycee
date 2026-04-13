"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image: "/premier2.jpeg",
    titre: "Bintou Flamousso Diallo",
    desc: "Première nationale au bac 2024",
  },
  {
    id: 2,
    image: "/d.jpeg",
    titre: "Kossi Roland Kpadenou",
    desc: "Troisième national au bac 2022 avec 17.63",
  },
  {
    id: 3,
    image: "/Lycee.jpeg",
    titre: "",
    desc: "On n'est pas premier par hasard !",
  },
];

function AccueilPremierSlider() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  // 🔁 Slider auto
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setAnimate(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-20">
      <div className="max-w-7xl m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 shadow-2xl m-3 bg-gray-700 rounded-2xl">

          {/* IMAGE */}
          <div className="relative h-[350px] md:h-[450px] overflow-hidden rounded-xl">
            <div
              key={index}
              style={{ backgroundImage: `url(${slides[index].image})` }}
              className={`
                absolute inset-0 bg-cover bg-center
                transition-all duration-700
                ${animate ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}
              `}
            />
          </div>

          {/* TEXTE */}
          <div className="relative text-white bg-gray-700 border border-white/25 shadow-2xl p-6 md:p-10 rounded-xl flex flex-col justify-between">

            {/* CONTENU TEXTE */}
            <div className="min-h-[150px] overflow-hidden">
              <div
                key={index + "text"}
                className={`
                  transition-all duration-700
                  ${animate ? "translate-y-8 opacity-0" : "translate-y-0 opacity-100"}
                `}
              >
                {slides[index].titre && (
                  <h2 className="text-2xl font-bold">
                    {slides[index].titre}
                  </h2>
                )}

                <p className="mt-2 text-lg">
                  {slides[index].desc}
                </p>
              </div>
            </div>

            {/* BOUTON */}
            <div className="mt-6 flex justify-end">
              <Link
                href="https://youtu.be/9fXR4ZrPImY?si=t1hEXzfvhthyNCFk"
                className="inline-flex items-center  gap-3 bg-white text-black px-4 py-2 rounded-xl text-sm font-bold hover:scale-105 transition"
              >
                Voir sur <FaYoutube size={20} className="text-red-500" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default AccueilPremierSlider;