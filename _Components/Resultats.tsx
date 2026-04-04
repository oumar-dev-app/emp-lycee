"use client";

import React, { useEffect, useState } from 'react';

function Resultats() {

  const [def, setDef] = useState<number>(0);
  const [bac, setBac] = useState<number>(0);
  const [bti, setBti] = useState<number>(0);

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];

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

      intervals.push(interval);
    };

    animate(setDef, 100);
    animate(setBac, 54);
    animate(setBti, 50);

    return () => {
      intervals.forEach(clearInterval);
    };

  }, []);

  return (
    <div className='bg-blue-950 p-10 '>
       <h1 className='text-2xl font-bold text-center text-white mb-20'>Résultats globaux</h1>
        <div className='grid grid-cols-3 text-center  mt-5 mb-5 text-white'>
        <div>
            <h1 className='text-yellow-500 text-4xl font-bold'>{def}%</h1>
            <p className='font-bold'>DEF</p>
        </div>
        <div>
            <h1 className='text-yellow-500 text-4xl font-bold'>{bac}%</h1>
            <p className='font-bold'>BAC</p>
        </div>
        <div>
            <h1 className='text-yellow-500 text-4xl font-bold'>{bti}%</h1>
            <p className='font-bold'>BTI</p>
        </div>
    </div>
    </div>
   
  );
}

export default Resultats;