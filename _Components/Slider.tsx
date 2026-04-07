"use client";

import { useEffect, useState } from "react";

const images = [
  {
    id: 1,
    img: "/Slider2.jpg",
    title: "DISCIPLINE-EFFORT-SUCCÈS:",
    desc: "le succès au bout de l’effort dans la discipline."
  },
  {
    id: 2,
    img: "/Slider1.jpg",
    title: "ON N'EST PAS PREMIER PAR HASARD !"
  },
];

function Slider() {
  const [index, setIndex] = useState(0);

  // Slider automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // change toutes les 4s

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
          <div className=" m-8 rounded-2xl absolute">
            {item.title && (
              <div className="text-white text-3xl  rounded-2xl capitalize font-bold md:text-3xl max-w-140 mt-30 text-right">
                <h1>
                  {item.title}
                </h1>
                <p>{item.desc}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Slider;