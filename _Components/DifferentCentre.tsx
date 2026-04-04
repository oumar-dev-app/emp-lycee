import React from 'react'
import Presentation from './Presentation';
import DifferentEcole from './DifferentEcole';
import DerniereDifferent from './DerniereDifferent';
import { FaCheck } from "react-icons/fa";
import Link from 'next/link';

function DifferentCentre() {
  return (

    <div className='bg-green-900 p-17'>
      <div className='grid grid-cols-4 lg:grid-cols-2 gap-8 max-w-7xl m-auto rounded-xl  text-white mt-5'>
        <div className='border border-white/25 shadow-xl p-5 rounded-xl space-y-5'>
          <h1 className='text-2xl font-bold'>Chiffres clés</h1>
          <p className='flex items-center gap-4'>  <FaCheck className="text-yellow-500" />Nombre d’élèves : (à renseigner)</p>
          <p className='flex items-center gap-4'>  <FaCheck className="text-yellow-500" />Années d’existence : depuis octobre 2013 </p>
        </div>
        <div className='border border-white/25 shadow-xl p-5 rounded-xl space-y-5'>
          <h1 className='text-2xl font-bold'>Nos valeurs</h1>
          <p className='flex items-center gap-4'>  <FaCheck className="text-yellow-500" />Former les élites de demain </p>
          <p className='flex items-center gap-4'>  <FaCheck className="text-yellow-500" />Réussir grâce aux nouvelles
            technologies de l’information et de la communication </p>
        </div>
        <div className='border border-white/25 shadow-xl p-5 rounded-xl space-y-5'>
          <h1 className='text-2xl font-bold'>Atouts</h1>
          <p className='flex items-center gap-4'> <FaCheck className="text-yellow-500" /> Meilleur cadre de travail </p>
          <p className='flex items-center gap-4'> <FaCheck className="text-yellow-500" /> Effectifs limités </p>
          <p className='flex items-center gap-4'> <FaCheck className="text-yellow-500" /> Personnel enseignant qualifié </p>
          <p className='flex items-center gap-4'> <FaCheck className="text-yellow-500" /> Cours d’informatique gratuits </p>
          <p className='flex items-center gap-4'> <FaCheck className="text-yellow-500" /> Bon taux de réussite </p>
          <div className='flex justify-end'>
            <button className='bg-amber-500 hover:bg-amber-400 cursor-pointer p-2 rounded-xl text-sm font-bold'>

              <Link href={"/apropos"}>
                En savoir plus
              </Link>
            </button>
          </div>
        </div>
        <div className="border border-white/25 shadow-xl p-5 rounded-xl space-y-5">
          <h1 className='text-2xl font-bold'>Actualités</h1>
          <p className='flex items-center gap-4'>  <FaCheck className='text-yellow-500' />DEF 2024 : 97% </p>
          <p className='flex items-center gap-4'>  <FaCheck className='text-yellow-500' />Bac 2024 : 1ère nationale (17,50 en TSE) </p>
          <p className='flex items-center gap-4'>  <FaCheck className='text-yellow-500' />Plusieurs élèves classés parmi les meilleurs au niveau national </p>
          <div className='flex justify-end mt-28'>
            <button className='bg-amber-500 p-2 hover:bg-amber-400 cursor-pointer rounded-xl text-sm font-bold'>
              <Link href={"/actualite"}>
                En savoir plus
              </Link>
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default DifferentCentre;





