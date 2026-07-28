"use client";

import { useEffect } from "react";
import SlideResultat from "@/_Components/SlideResultat";

const bgImage = [
  {
    id: 1,
    image: "/apropos.jpg",
  },
];

const mentionsBac2026 = [
  {
    classe: "TLL",
    assezBien: 0,
    bien: 0,
    tresBien: 0,
  },
  {
    classe: "TSE",
    assezBien: 3,
    bien: 1,
    tresBien: 0,
  },
  {
    classe: "TSECO",
    assezBien: 10,
    bien: 1,
    tresBien: 0,
  },
  {
    classe: "TSEXP",
    assezBien: 5,
    bien: 2,
    tresBien: 1,
  },
  {
    classe: "TSS",
    assezBien: 1,
    bien: 0,
    tresBien: 0,
  },
  {
    classe: "TOTAL",
    assezBien: 19,
    bien: 4,
    tresBien: 1,
  },
];

const resultatBac2026 = [
  {
    categorie: "Inscrits",
    garcon: 98,
    fille: 115,
    total: 213,
  },
  {
    categorie: "Présents",
    garcon: 98,
    fille: 115,
    total: 213,
  },
  {
    categorie: "Admis",
    garcon: 44,
    fille: 70,
    total: 114,
  },
  {
    categorie: "Taux d'admission",
    garcon: "44,90%",
    fille: "60,87%",
    total: "54%",
  },
];

const resultatParClasse = [
  {
    classe: "TELL",
    presentG: 9,
    presentF: 21,
    admisG: 5,
    admisF: 11,
    tauxG: "55,56%",
    tauxF: "52,38%",
    tauxT: "53,33%",
  },
  {
    classe: "TSE",
    presentG: 11,
    presentF: 18,
    admisG: 2,
    admisF: 9,
    tauxG: "18,18%",
    tauxF: "50,00%",
    tauxT: "37,93%",
  },
  {
    classe: "TSECO",
    presentG: 41,
    presentF: 40,
    admisG: 20,
    admisF: 30,
    tauxG: "48,78%",
    tauxF: "75,00%",
    tauxT: "61,73%",
  },
  {
    classe: "TSEXP",
    presentG: 8,
    presentF: 16,
    admisG: 5,
    admisF: 14,
    tauxG: "62,50%",
    tauxF: "87,50%",
    tauxT: "79,17%",
  },
  {
    classe: "TSS",
    presentG: 29,
    presentF: 20,
    admisG: 12,
    admisF: 6,
    tauxG: "41,38%",
    tauxF: "30,00%",
    tauxT: "36,73%",
  },
  {
    classe: "TOTAUX",
    presentG: 98,
    presentF: 115,
    admisG: 44,
    admisF: 70,
    tauxG: "44,90%",
    tauxF: "60,87%",
    tauxT: "54%",
  },
];

export default function ActualitePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(
      ".hidden-left, .hidden-right"
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <SlideResultat />

      <div className="max-w-7xl m-auto mt-20 mb-20">
        <div className="m-3">

          {bgImage.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
              className="w-full bg-cover bg-center rounded-2xl overflow-hidden"
            >

              <div className="bg-white/90 p-5 md:p-10">

                {/* TABLEAU BAC 2026 */}
                <div className="hidden-left bg-gray-600 text-white shadow-2xl p-6 md:p-10 rounded-xl">

                  <h1 className="text-2xl md:text-3xl font-bold mb-3">
                    Résultat du BAC Session Juin 2026
                  </h1>

                  <p className="mb-8 text-yellow-400 font-bold">
                    Taux national : 34,23%
                  </p>


                  <div className="overflow-x-auto">

                    <table className="w-full border-collapse bg-white text-black rounded-xl overflow-hidden">

                      <thead className="bg-yellow-500">
                        <tr>
                          <th className="p-4 text-left">
                            Catégorie
                          </th>

                          <th className="p-4">
                            Garçon
                          </th>

                          <th className="p-4">
                            Fille
                          </th>

                          <th className="p-4">
                            Total
                          </th>
                        </tr>
                      </thead>


                      <tbody>

                        {resultatBac2026.map((item) => (
                          <tr
                            key={item.categorie}
                            className="border-b hover:bg-gray-100"
                          >

                            <td className="p-4 font-bold">
                              {item.categorie}
                            </td>

                            <td className="p-4 text-center">
                              {item.garcon}
                            </td>

                            <td className="p-4 text-center">
                              {item.fille}
                            </td>

                            <td className="p-4 text-center font-bold text-green-600">
                              {item.total}
                            </td>

                          </tr>
                        ))}

                      </tbody>

                    </table>

                  </div>


                  {/* Résumé */}
                  <div className="mt-8 rounded-lg bg-white p-5 text-black">

                    <h2 className="text-xl font-bold mb-3">
                      Résumé
                    </h2>

                    <p>
                      Sur <strong>213 candidats inscrits</strong>,
                      nous avons enregistré
                      <strong> 114 admis</strong>, soit un taux de réussite de
                      <strong className="text-green-600"> 54%</strong>.
                    </p>

                  </div>


                </div>

                {/* RESULTATS PAR CLASSE */}

                <div className="mt-10 hidden-right bg-gray-600 text-white shadow-2xl p-6 md:p-10 rounded-xl">

                  <h2 className="text-2xl md:text-3xl font-bold mb-8">
                    LPDJICOUL BAC 2026 - Résultats par classe
                  </h2>


                  <div className="overflow-x-auto">

                    <table className="w-full border-collapse bg-white text-black rounded-xl overflow-hidden">

                      <thead className="bg-green-600 text-white">

                        <tr>
                          <th className="p-3">
                            Classe
                          </th>

                          <th className="p-3" colSpan={2}>
                            Présentés
                          </th>

                          <th className="p-3" colSpan={2}>
                            Admis
                          </th>

                          <th className="p-3" colSpan={3}>
                            % Admission
                          </th>
                        </tr>


                        <tr className="bg-yellow-500 text-black">

                          <th></th>

                          <th className="p-3">
                            G
                          </th>

                          <th className="p-3">
                            F
                          </th>

                          <th className="p-3">
                            G
                          </th>

                          <th className="p-3">
                            F
                          </th>

                          <th className="p-3">
                            G
                          </th>

                          <th className="p-3">
                            F
                          </th>

                          <th className="p-3">
                            T
                          </th>

                        </tr>

                      </thead>


                      <tbody>

                        {resultatParClasse.map((item) => (

                          <tr
                            key={item.classe}
                            className={`border-b hover:bg-gray-100 ${item.classe === "TOTAUX"
                              ? "font-bold bg-gray-200"
                              : ""
                              }`}
                          >

                            <td className="p-3 font-bold">
                              {item.classe}
                            </td>


                            <td className="p-3 text-center">
                              {item.presentG}
                            </td>


                            <td className="p-3 text-center">
                              {item.presentF}
                            </td>


                            <td className="p-3 text-center">
                              {item.admisG}
                            </td>


                            <td className="p-3 text-center">
                              {item.admisF}
                            </td>


                            <td className="p-3 text-center text-green-600 font-bold">
                              {item.tauxG}
                            </td>


                            <td className="p-3 text-center text-green-600 font-bold">
                              {item.tauxF}
                            </td>


                            <td className="p-3 text-center text-red-600 font-bold">
                              {item.tauxT}
                            </td>


                          </tr>

                        ))}

                      </tbody>


                    </table>

                  </div>

                </div>

                {/* TABLEAU DES MENTIONS */}

                <div className="mt-10 hidden-left bg-gray-600 text-white shadow-2xl p-6 md:p-10 rounded-xl">

                  <h2 className="text-2xl md:text-3xl font-bold mb-8">
                    LPDJICOUL BAC 2026 - Les mentions obtenues
                  </h2>


                  <div className="overflow-x-auto">

                    <table className="w-full border-collapse bg-white text-black rounded-xl overflow-hidden">

                      <thead>

                        <tr className="bg-red-600 text-white">

                          <th className="p-4 text-left">
                            Classes
                          </th>

                          <th className="p-4">
                            Assez-Bien
                          </th>

                          <th className="p-4">
                            Bien
                          </th>

                          <th className="p-4">
                            Très-Bien
                          </th>

                        </tr>

                      </thead>


                      <tbody>

                        {mentionsBac2026.map((item) => (

                          <tr
                            key={item.classe}
                            className={`border-b hover:bg-gray-100 ${item.classe === "TOTAL"
                                ? "bg-gray-200 font-bold"
                                : ""
                              }`}
                          >

                            <td className="p-4 font-bold">
                              {item.classe}
                            </td>


                            <td className="p-4 text-center">
                              {item.assezBien || "/"}
                            </td>


                            <td className="p-4 text-center">
                              {item.bien || "/"}
                            </td>


                            <td className="p-4 text-center">
                              {item.tresBien || "/"}
                            </td>


                          </tr>

                        ))}

                      </tbody>

                    </table>

                  </div>


                  {/* Total général */}
                  <div className="mt-6 rounded-lg bg-white p-4 text-center text-black">

                    <p className="text-xl font-bold">
                      Total des mentions :
                      <span className="ml-2 text-red-600">
                        24
                      </span>
                    </p>

                  </div>


                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}