"use client";

import { useEffect, useState } from "react";

const images = [
  {
    id: 1,
    img: "/Slider2.jpg",
    title: "DISCIPLINE-EFFORT-SUCCÈS:",
    desc1: "Le succès au bout de l’effort dans la discipline.",
    desc2: " On n'est pas premier par hasard  !"
  },
  {
    id: 2,
    img: "/Slider1.jpg",
    title: "DISCIPLINE-EFFORT-SUCCÈS:",
    desc1: "Le succès au bout de l’effort dans la discipline.",
    desc2: " On n'est pas premier par hasard !"
  },
];

function Promoteur() {
  const [index, setIndex] = useState(0);

  // Slider automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-125 overflow-hidden relative">
      {images.map((item, i) => (
        <div
          key={item.id}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"
            }`}
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div className="w-full h-full bg-black/70 absolute top-0 left-0 gb-gradient-to-b from-transparent to-black/90"></div>
        <div className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"
            }`}>
            <div className=" m-8 rounded-2xl absolute">
              {item.title && (

                <div className="mt-25 space-y-5">
                  <h1 className="text-white text-5xl font-bold capitalize ">
                    {item.title}
                  </h1>
                  <div className="space-y-4">
                    <p className="text-white text-2xl ">{item.desc1}</p>
                    <p className="text-white text-2xl ">{item.desc2}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Promoteur;