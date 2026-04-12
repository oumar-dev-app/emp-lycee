"use client";

import { useEffect, useRef } from 'react';
import Valeurs from './Valeurs';

function Presentation() {

  const ref1 = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    if (ref1.current) observer.observe(ref1.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div>

      <div className='max-w-7xl m-auto mb-10 mt-15'>

        {/* INTRO */}
        <div
          ref={ref1}
          className='border border-white border-b-4 border-b-green-600 shadow-2xl p-6 md:p-10 rounded-xl m-3 hidden-bottom'
        >
          <p className='font-bold text-center'>
            Créé en 2013 et ouvert en octobre 2013,
            le Groupe Scolaire Amadou Sidibé (GSAS)
            est un établissement scolaire moderne qui œuvre pour une formation de qualité.
          </p>
        </div>
        <Valeurs/>
      </div>

    </div>
  )
}

export default Presentation;