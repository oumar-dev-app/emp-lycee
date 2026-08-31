"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
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

  {
    id: 2,
    image: "/Slider6.jpeg",
    titre: "Le LYCÉE PRIVÉ DJINESSERA COULIBALY LPDJICOUL",
    excellence:"PRIX D'EXCELLENCE",
    description:
      "a été honoré par le",
    description2:"obtenu par l'élève",
    description3:"Dicko DIAKITE",
    description4:"de la TSEXP avec 16,68"
  },

];

function PremierNationale() {
  const [currentIndex] = useState(0);

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  const currentSlide = slides[currentIndex];

  // Animation scroll gauche → droite
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => {
      if (leftRef.current) observer.unobserve(leftRef.current);
      if (rightRef.current) observer.unobserve(rightRef.current);
    };
  }, []);

  // Slider auto
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
          <div className="relative h-87.5 md:h-112.5 overflow-hidden rounded-xl">
            <div
              key={index}
              style={{ backgroundImage: `url(${slides[index].image})` }}
              className={`
                absolute inset-0 bg-cover bg-center
                transition-all duration-700
                ${animate ? "-translate-l-full opacity-0" : "translate-y-0 opacity-100"}
              `}
            />
          </div>

          {/* TEXTE */}
          <div className="relative text-white bg-gray-700 border border-white/25 shadow-2xl p-6 md:p-10 rounded-xl flex flex-col justify-between">

            {/* CONTENU TEXTE */}
            <div className="min-h-37.5 overflow-hidden">
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
                  {slides[index].description}
                  <strong>{slides[index].excellence}</strong>
                  {slides[index].description2}
                  <strong>{slides[index].description3}</strong>
                  {slides[index].description4}
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

export default PremierNationale;