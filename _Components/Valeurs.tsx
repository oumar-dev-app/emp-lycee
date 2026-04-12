"use client";

import { useEffect } from "react";
import { FaCheck } from "react-icons/fa";

function Valeurs() {

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

    const elements = document.querySelectorAll(".hidden-right, .hidden-left");

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className='max-w-7xl m-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 m-3 gap-8'>

        {/* LEFT */}
        <div className='text-white bg-gray-500 shadow-2xl p-6 md:p-10 rounded-xl space-y-5 hidden-left'>
          <ul className='space-y-5'>
            <li className='flex items-center gap-4'>
              <FaCheck className="text-yellow-500 shrink-0" />
              Jardin d’enfants “LE ZENITH” (petite, moyenne, grande section)
            </li>

            <li className='flex items-center gap-4'>
              <FaCheck className="text-yellow-500 shrink-0" />
              École fondamentale EPMS (Mantènin Sidibé)
            </li>

            <li className='flex items-center gap-4'>
              <FaCheck className="text-yellow-500 shrink-0" />
              Lycée LPDJICOUL (toutes les séries)
            </li>

            <li className='flex items-center gap-4'>
              <FaCheck className="text-yellow-500 shrink-0" />
              Centre de formation professionnelle CFPBK-KCORO
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className='text-white bg-gray-500 shadow-2xl p-6 md:p-10 rounded-xl space-y-5 hidden-right'>
          <h1 className='text-2xl font-bold'>Nos valeurs détaillées</h1>

          <p className='flex items-center gap-4'>
            <FaCheck className="text-yellow-500 shrink-0" />
            Former les élites de demain
          </p>

          <p className='flex items-center gap-4'>
            <FaCheck className="text-yellow-500 shrink-0" />
            Réussir avec les TIC
          </p>
        </div>

      </div>
    </div>
  );
}

export default Valeurs;