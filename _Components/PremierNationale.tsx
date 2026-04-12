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
    image: "/premier2.jpeg",
    titre: "Deuxième Élève",
    description: "Un autre élève remarquable dans le classement national",
    link: "#",
  },
];

function PremierNationale() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  // 🎬 Animation scroll
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

  // 🔁 Slider auto
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="bg-gray-600 rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        
        {/* IMAGE */}
        <div
          ref={leftRef}
          className="hidden-left shadow-2xl rounded-xl overflow-hidden relative h-100"
        >
          <div
            style={{ backgroundImage: `url(${currentSlide.image})` }}
            className="h-full w-full bg-cover bg-center transition-all duration-700"
          />
        </div>

        {/* TEXTE */}
        <div
          ref={rightRef}
          className="hidden-right text-white bg-gray-600 border border-white/25 shadow-2xl p-4 md:p-10 rounded-xl space-y-5 transition-all duration-700"
        >
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