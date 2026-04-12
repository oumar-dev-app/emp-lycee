"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaYoutube } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image: "/premier1.jpeg",
    titre: "Bintou Flamousso Diallo",
    description:
      "du Lycée Privé Djinèssira Coulibaly devient la première nationale",
    link: "https://youtu.be/9fXR4ZrPImY?si=t1hEXzfvhthyNCFk",
  },
];

function PremierNationale() {
  const [currentIndex] = useState(0);

  const currentSlide = slides[currentIndex];

  return (
    <div className="bg-gray-600 rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

        {/* IMAGE */}
        <div className="shadow-2xl rounded-xl overflow-hidden relative h-[400px]">
          <div
            style={{ backgroundImage: `url(${currentSlide.image})` }}
            className="h-full w-full bg-cover bg-center"
          />
        </div>

        {/* TEXTE */}
        <div className="text-white bg-gray-600 border border-white/25 shadow-2xl p-4 md:p-10 rounded-xl space-y-5">

          <p>
            <span className="font-bold">{currentSlide.titre} </span>
            {currentSlide.description}
          </p>

          <div className="bg-white rounded-xl p-2 w-fit">
            <Link
              href={currentSlide.link}
              className="flex items-center gap-3 text-black text-sm font-bold"
            >
              Voir sur <FaYoutube size={20} className="text-red-500" />
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}

export default PremierNationale;