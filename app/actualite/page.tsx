"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

import SliderAcutialite from "@/_Components/SliderActualite";
import PremierNationale from "@/_Components/PremierNationale";

const backgroundImage = "/apropos.jpg";

const sections = [
  {
    title: "Performances et distinctions",
    animation: "hidden-left",
    showButton: true,
    link: "/resultat-def",
    data: [
      "1er du CAP de Kalaban-Coro et 5è national au DEF 2019",
      "DEF 2020 : 100%",
      "DEF 2021 : plusieurs élèves classés parmi les meilleurs",
      "DEF 2022 : 95%",
      "DEF 2023 : 90%",
      "DEF 2024 : 97%",
      "DEF 2026 : 95,77%",
    ],
  },

  {
    title: "Baccalauréats",
    animation: "hidden-right",
    showButton: true,
    link: "/resultat",
    data: [
      "3è national au Bac 2022",
      "Bac 2023 : établissement distingué",
      "Bac 2024 : 1ère nationale",
      "Bac 2026 : 54%",
    ],
  },


];

const BT = [
  {
    title: "CFPBK-KCORO CAP ET BT 2026",
    animation: "hidden-right",
    showButton: true,
    link: "/resultat-BT",
    data: [
      "Les résultats CAP et BT"
    ],
  },
]


const concoursData = [
  "Olympiades de mathématiques 2024 : médaille de bronze",
  "Olympiades 2025 : 1ère et 2ème places académiques",
];


type SectionCardProps = {
  title: string;
  data: string[];
  animation: string;
  showButton?: boolean;
  link: string;
};


function SectionCard({
  title,
  data,
  animation,
  showButton = false,
  link,
}: SectionCardProps) {

  return (
    <div
      className={`${animation} flex h-full flex-col rounded-xl bg-gray-600 p-6 text-white shadow-2xl md:p-10`}
    >

      <h2 className="mb-6 text-2xl font-bold">
        {title}
      </h2>


      <div className="flex-1 space-y-5">

        {data.map((item) => (

          <div
            key={item}
            className="flex items-start gap-4"
          >

            <FaCheck className="mt-1 shrink-0 text-yellow-400" />

            <span>
              {item}
            </span>

          </div>

        ))}

      </div>



      {showButton && (

        <div className="mt-auto pt-8">

          <Link
            href={link}
            className="block rounded-lg bg-white px-4 py-3 text-center text-sm font-bold text-black transition duration-300 hover:bg-yellow-400"
          >
            Voir pour cette année
          </Link>

        </div>

      )}


    </div>
  );
}



export default function ActualitePage() {

  const containerRef = useRef<HTMLDivElement>(null);



  useEffect(() => {

    if (!containerRef.current) return;


    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

          }

        });

      },

      {
        threshold: 0.2,
      }
    );
    const elements = containerRef.current.querySelectorAll(
      ".hidden-left, .hidden-right"
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <SliderAcutialite />
      <div className="mx-auto my-20 max-w-7xl px-4">
        <div
          ref={containerRef}
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
          className="overflow-hidden rounded-2xl bg-cover bg-center"
        >
          <div className="bg-white/90 p-5 md:p-10">
            {/* DEF + BAC */}
            <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
              {sections.map((section) => (
                <SectionCard
                  key={section.title}

                  title={section.title}

                  data={section.data}

                  animation={section.animation}

                  showButton={section.showButton}

                  link={section.link}
                />
              ))}
            </div>

            {/* Concours */}
            <div className="mt-10">
                <div className="space-y-5">
                  {BT.map((section) => (
                    <SectionCard
                      key={section.title}

                      title={section.title}

                      data={section.data}

                      animation={section.animation}

                      showButton={section.showButton}

                      link={section.link}
                    />
                  ))}
                </div>
            </div>

            {/* Slider Premier Nationale */}
            <div className="">
              <PremierNationale />
            </div>
            {/* Concours */}
            <div className="mt-10">
              <div className="hidden-left rounded-xl bg-gray-600 p-6 text-white shadow-2xl md:p-10">
                <h2 className="mb-6 text-2xl font-bold">
                  Concours internationaux
                </h2>
                <div className="space-y-5">
                  {concoursData.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-4"
                    >
                      <FaCheck className="mt-1 shrink-0 text-yellow-400" />
                      <span>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}