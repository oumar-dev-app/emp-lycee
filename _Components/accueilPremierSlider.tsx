"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa";


const slides = [
  {
    id: 1,
    image: "/premier2.jpeg",
    titre: "Bintou Flamousso Diallo",
    desc: "Du Lycée Privé Djinèssira Coulibaly devient la première nationale",
  },
  {
    id: 2,
    image: "/d.jpeg",
    titre: "Kossi Roland Kpadenou",
    desc: "Troisième national au bac 2022 avec 17.63",
  },
];

function AccueilPremierSlider() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setAnimate(false);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" py-20">
      <div className="max-w-7xl m-auto    ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 shadow-2xl m-3 bg-gray-700 rounded-2xl">

          {/* IMAGE */}
          <div className="shadow-2xl rounded-xl overflow-hidden relative h-100">
            <div
              key={index}
              style={{ backgroundImage: `url(${slides[index].image})` }}
              className={`
                absolute w-full h-full bg-cover bg-center
                transition-all duration-700
                ${animate ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}
              `}
            />
          </div>

          {/* TEXTE */}
          <div className='text-white bg-gray-700 border border-white/25 shadow-2xl p-4 md:p-10 rounded-xl space-y-5'>

            <div
              key={index + "text"}
              className={`
                transition-all duration-700
                ${animate ? "translate-y-10 opacity-0" : "translate-y-0 opacity-100"}
              `}
            >
              <h2 className="text-2xl font-bold">
                {slides[index].titre}
              </h2>

              <p className="mt-2 text-lg">
                {slides[index].desc}
              </p>
            </div>

            <div className="bg-white rounded-xl p-2 w-fit">
              <Link
                href="https://youtu.be/9fXR4ZrPImY?si=t1hEXzfvhthyNCFk"
                className="flex items-center gap-3 text-black text-sm font-bold"
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