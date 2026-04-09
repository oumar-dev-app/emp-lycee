import React from 'react'
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';



function Presentation() {
  return (
    <div >
    
      <div className='max-w-7xl m-auto p-10'>
        <div className='l space-y-5'>
          <div className='border border-white/25 shadow-2xl p-6 md:p-10 rounded-xl space-y-5'>
            <p className='font-bold  text-center'>Créé en 2013 et ouvert en octobre 2013,
              le Groupe Scolaire Amadou Sidibé (GSAS)
              est un établissement scolaire moderne qui œuvre pour une formation de qualité.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='border border-white/25 shadow-2xl p-6 md:p-10 rounded-xl space-y-5'>
              <ul className='space-y-5'>
                <li className='flex items-center gap-4'> <FaCheck className="text-yellow-500 shrink-0" /> Jardin d’enfants “LE ZENITH” (petite, moyenne, grande section) </li>
                <li className='flex items-center gap-4'> <FaCheck className="text-yellow-500 shrink-0" /> École fondamentale EPMS (Mantènin Sidibé)</li>
                <li className='flex items-center gap-4'> <FaCheck className="text-yellow-500 shrink-0" /> Lycée LPDJICOUL (toutes les séries) </li>
                <li className='flex items-center gap-4'> <FaCheck className="text-yellow-500 shrink-0" /> Centre de formation professionnelle CFPBK-KCORO </li>
              </ul>
            </div>

            <div className='border border-white/25 shadow-2xl p-6 md:p-10 rounded-xl space-y-5'>
              <h1 className='text-2xl font-bold'>Nos valeurs détaillées :</h1>
              <p className='flex items-center gap-4'> <FaCheck className="text-yellow-500 shrink-0" />Former les élites de demain </p>
              <p className='flex items-center gap-4'> <FaCheck className="text-yellow-500 shrink-0" />Réussir avec les TIC </p>
            </div>
          </div>

        </div>

      </div>
    </div>

  )
}

export default Presentation;