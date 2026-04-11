"use client";

import { useEffect } from 'react';
import Valeurs from './Valeurs';

function Presentation() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    const elements = document.querySelectorAll(".hidden-bottom");

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div>

      <div className='max-w-7xl m-auto mb-10 mt-15'>

        {/* INTRO → ANIMATION */}
        <div className='border border-white border-b-4 border-b-green-600 shadow-2xl p-6 md:p-10 rounded-xl m-3 hidden-bottom'>
          <p className='font-bold text-center'>
            Créé en 2013 et ouvert en octobre 2013,
            le Groupe Scolaire Amadou Sidibé (GSAS)
            est un établissement scolaire moderne qui œuvre pour une formation de qualité.
          </p>
        </div>

      </div>

      {/* SECTION VALEURS */}
      <div className="hidden-bottom">
        <Valeurs />
      </div>

    </div>
  )
}

export default Presentation;