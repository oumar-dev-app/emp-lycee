"use client";

import React, { useEffect, useState, useRef } from 'react';

function Resultats() {

  const [def, setDef] = useState(0);
  const [bac, setBac] = useState(0);
  const [bti, setBti] = useState(0);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false); // évite que ça rejoue

  useEffect(() => {
    const animate = (
      setter: React.Dispatch<React.SetStateAction<number>>,
      target: number
    ) => {
      let start = 0;

      const interval = setInterval(() => {
        start++;
        setter(start);

        if (start >= target) {
          clearInterval(interval);
        }
      }, 20);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.current) {

          // animation des blocs (fade + slide)
          entry.target.classList.add("show");

          // animation des chiffres
          animate(setDef, 100);
          animate(setBac, 54);
          animate(setBti, 50);

          hasAnimated.current = true;
        }
      });
    }, { threshold: 0.3 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

  }, []);

  return (
    <div
      ref={sectionRef}
      className='bg-gray-600  p-2 hidden-bottom'
    >
      <div className='max-w-7xl m-auto '>
        <div className='mt-15 mb-15 border border-white/25 rounded-2xl '>
          <h1 className='text-2xl font-bold text-center text-white mb-20'>
            Performances en 2025
          </h1>

          <div className='grid grid-cols-3 text-center mt-5 mb-5 text-white'>

            <div className='space-y-5'>
              <h1 className='text-yellow-500 text-4xl font-bold'>{def}%</h1>
              <p className='font-bold text-2xl'>DEF</p>
            </div>

            <div className='space-y-5'>
              <h1 className='text-yellow-500 text-4xl font-bold'>{bac}%</h1>
              <p className='font-bold text-2xl'>BAC</p>
            </div>

            <div className='space-y-5'>
              <h1 className='text-yellow-500 text-4xl font-bold'>{bti}%</h1>
              <p className='font-bold text-2xl'>BTI</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Resultats;