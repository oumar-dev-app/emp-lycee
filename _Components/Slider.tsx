"use client";

import { useEffect, useState } from "react";

const images = [
  {
    id: 1,
    img: "/Lycee.jpeg",
    title: "DISCIPLINE-EFFORT-SUCCÈS:",
    desc1: "Le succès au bout de l’effort dans la discipline.",
    desc2: "On n'est pas premier par hasard !",
  },
  {
    id: 2,
    img: "/Slider1.jpg",
    title: "DISCIPLINE-EFFORT-SUCCÈS:",
    desc1: "Le succès au bout de l’effort dans la discipline.",
    desc2: "On n'est pas premier par hasard !",
  },
];

function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-125 overflow-hidden">

      {images.map((item, i) => (
        <div
          key={item.id}
          className={`
            absolute inset-0
            transition-opacity duration-1000 ease-in-out
            ${i === index ? "opacity-100 z-20" : "opacity-0 z-10"}
          `}
        >

          {/* IMAGE */}
          <div
            className={`
              absolute inset-0 bg-cover bg-center
              transition-transform duration-5000 ease-out
              ${i === index ? "scale-110" : "scale-100"}
            `}
            style={{ backgroundImage: `url(${item.img})` }}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* TEXTE */}
          <div className="relative z-30 h-full flex flex-col justify-center px-6 md:px-10 space-y-6">

            {/* TITLE MOBILE STACK + DESKTOP NORMAL */}
            <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight flex flex-col items-center text-center md:items-start md:text-left">
              <span>DISCIPLINE</span>
              <span>EFFORT</span>
              <span>SUCCÈS</span>
            </h1>

            {/* DESCRIPTION */}
            <div className="space-y-3 text-center md:text-left">
              <p className="text-white text-lg md:text-2xl">
                {item.desc1}
              </p>
              <p className="text-white text-lg md:text-2xl">
                {item.desc2}
              </p>
            </div>

          </div>

        </div>
      ))}

    </div>
  );
}

export default Slider;