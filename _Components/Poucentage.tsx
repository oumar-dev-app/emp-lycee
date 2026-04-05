"use client";

import React, { useEffect, useRef, useState } from "react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  const [visible, setVisible] = useState(false);
  const [isReady, setIsReady] = useState(false); // ✅ NEW

  // ✅ Empêche déclenchement immédiat au refresh
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsReady(true);
    }, 300); // petit délai

    return () => clearTimeout(timeout);
  }, []);

  // ✅ Observer visibilité
  useEffect(() => {
    if (!isReady) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [isReady]);

  // ✅ Animation
  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const duration = 10000;
    const increment = target / (duration / 20);

    const interval = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(interval);
  }, [visible, target]);

  return (
    <div ref={ref}>
      <h1 className="text-4xl font-extrabold text-yellow-500 text-center">
        {count}
        {suffix}
      </h1>
    </div>
  );
}

function Poucentage() {
  return (
    <div className="flex flex-wrap justify-between items-center gap-5 mb-5">
      
      <div>
        <Counter target={100} suffix="%" />
        <p className="text-sm text-white text-center">Taux DEF 2025</p>
      </div>

      <div>
        <Counter target={72} suffix="%" />
        <p className="text-sm text-white text-center">Taux Bac 2025</p>
      </div>

      <div>
        <Counter target={730} suffix="+" />
        <p className="text-sm text-white text-center">Élèves</p>
      </div>

      <div>
        <Counter target={25} suffix="+" />
        <p className="text-sm text-white text-center">Années d'Excellence</p>
      </div>

    </div>
  );
}

export default Poucentage;