"use client";

import { useEffect } from "react";
import SliderAcutialite from "@/_Components/SliderActualite";
import { FaCheck } from "react-icons/fa";
import PremierNationale from "@/_Components/PremierNationale";

const bgImage = [
  {
    id: 1,
    image: "/apropos.jpg",
  },
];

// ✅ Données dynamiques
const defData = [
  "1er du CAP de Kalaban-Coro et 5è national au DEF 2019",
  "DEF 2020 : 100%",
  "DEF 2021 : plusieurs élèves classés parmi les meilleurs",
  "DEF 2022 : 95%",
  "DEF 2023 : 90%",
  "DEF 2024 : 97%",
];

const bacData = [
  "3è national au Bac 2022",
  "Bac 2023 : établissement distingué",
  "Bac 2024 : 1ère nationale",
];

const concoursData = [
  "Olympiades de mathématiques 2024 : médaille de bronze",
  "Olympiades 2025 : 1ère et 2ème places académiques",
];

export default function ActualitePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // ✅ animation une seule fois
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(
      ".hidden-left, .hidden-right"
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // ✅ cleanup
  }, []);

  return (
    <div>
      <SliderAcutialite />

      <div className="max-w-7xl m-auto mt-20 mb-20">
        <div className="m-3">
          {bgImage.map((item) => (
            <div
              key={item.id}
              style={{ backgroundImage: `url(${item.image})` }}
              className="w-full bg-cover bg-center rounded-2xl overflow-hidden"
            >
              <div className="bg-white/90 w-full min-h-full ">

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                  {/* DEF */}
                  <div className="text-white bg-gray-600 shadow-2xl p-6 md:p-10 rounded-xl space-y-5 hidden-left">
                    <h1 className="text-2xl font-bold">
                      Performances et distinctions :
                    </h1>

                    {defData.map((text, i) => (
                      <p key={i} className="flex items-center gap-4">
                        <FaCheck className="text-yellow-400 shrink-0" />
                        {text}
                      </p>
                    ))}
                  </div>

                  {/* BAC */}
                  <div className="text-white bg-gray-600 shadow-2xl p-6 md:p-10 rounded-xl space-y-5 hidden-right">
                    <h1 className="text-2xl font-bold">
                      Baccalauréat :
                    </h1>

                    {bacData.map((text, i) => (
                      <p key={i} className="flex items-center gap-4">
                        <FaCheck className="text-yellow-400 shrink-0" />
                        {text}
                      </p>
                    ))}
                  </div>
                </div>

                {/* SLIDER */}
                <div className="mt-16">
                  <PremierNationale />
                </div>

                {/* CONCOURS */}
                <div className="mt-10 text-white bg-gray-600 shadow-2xl p-6 md:p-10 rounded-xl space-y-5 hidden-left">
                  <h1 className="text-2xl font-bold">
                    Concours internationaux :
                  </h1>

                  {concoursData.map((text, i) => (
                    <p key={i} className="flex items-center gap-4">
                      <FaCheck className="text-yellow-400 shrink-0" />
                      {text}
                    </p>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}