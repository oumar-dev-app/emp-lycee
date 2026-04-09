import React from 'react'
import { FaCheck } from 'react-icons/fa';

const bgImage = [
  {
    id: 1,
    image: "/apropos.jpg"
  }
]

function Space_secondaire() {
  return (
    <div className='max-w-7xl m-auto p-4 md:p-10 mt-10 '>
      {
        bgImage.map((item) => (
          <div
            style={{ backgroundImage: `url(${item.image})` }}
            key={item.id}
            className='w-full h-full bg-cover bg-center rounded-2xl'
          >
            <div className="bg-white/90 w-full h-full">
              <div className='space-y-5'>

                <div className='border border-white shadow-2xl p-6 md:p-10 rounded-xl space-y-5'>
                  <p className='font-bold text-center'>
                    Le lycée LPDJICOUL offre toutes les séries avec un enseignement de qualité et une préparation rigoureuse aux examens.
                  </p>
                </div>

                {/* GRID RESPONSIVE */}
                <div className='grid grid-cols-1 md:grid-cols-2  gap-5'>

                  <div className=' border border-white/25 shadow-2xl p-6 md:p-10 rounded-xl space-y-5'>
                    <h1 className='text-2xl font-bold'>Résultats et performances :</h1>
                    <ul className='space-y-5'>
                      <li className='flex items-center gap-4'>
                        <FaCheck className="text-yellow-500 shrink-0" /> 3è national au Bac 2022
                      </li>
                      <li className='flex items-center gap-4'>
                        <FaCheck className="text-yellow-500 shrink-0" /> Bac 2023 : établissement parmi les meilleurs (Tchiwara)
                      </li>
                      <li className='flex items-center gap-4'>
                        <FaCheck className="text-yellow-500 shrink-0" /> 1ère nationale au Bac 2024 (17,50 en TSE)
                      </li>
                      <li className='flex items-center gap-4'>
                        <FaCheck className="text-yellow-500 shrink-0" /> Plusieurs distinctions académiques
                      </li>
                    </ul>
                  </div>

                  <div className='border border-white/25 shadow-2xl p-6 md:p-10 rounded-xl space-y-5'>
                    <h1 className='text-2xl font-bold'>Excellence :</h1>
                    <p className='flex items-center gap-4'>
                      <FaCheck className="text-yellow-500 shrink-0" />Olympiades internationales de mathématiques
                    </p>
                    <p className='flex items-center gap-4'>
                      <FaCheck className="text-yellow-500 shrink-0" />Médaille de bronze à Johannesburg
                    </p>
                    <p className='flex items-center gap-4'>
                      <FaCheck className="text-yellow-500 shrink-0" />Double classement national et académique
                    </p>
                  </div>

                </div>

              </div>
            </div>


          </div>
        ))
      }


    </div>
  )
}

export default Space_secondaire;