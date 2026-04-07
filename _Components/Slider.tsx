"use client";

import { useEffect, useState } from "react";

const images = [
  {
    id: 1,
    img: "/Slider2.jpg",
    title: "Discipline–Effort–Succès : le succès au bout de l’effort dans la discipline."
  },
  {
    id: 2,
    img: "/Slider1.jpg",
    title: "On n’est pas premier par hasard !"
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
          <div className="m-8 rounded-2xl flex items-cente">
            {item.title && (
              <p className="text-white text-3xl bg-black/80 p-5 rounded-2xl  h-50 w-150 capitalize md:text-3xl max-w-100 mt-30 text-right">
                {item.title}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Slider;