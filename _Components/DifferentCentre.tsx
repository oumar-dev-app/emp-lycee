import { FaCheck } from "react-icons/fa";
import Link from 'next/link';

function DifferentCentre() {
  return (
    <div className='bg-green-900'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6  max-w-7xl m-auto rounded-xl  text-white'>
        <div className='border border-white/16 shadow-2xl  p-6 m-3 md:p-10 rounded-xl space-y-5'>
          <h1 className='text-2xl font-bold'>Chiffres clés</h1>
          <p className='flex items-center gap-4'> <FaCheck className="text-yellow-500 shrink-0" />Nombre d’élèves : (à renseigner)</p>
          <p className='flex items-center gap-4'> <FaCheck className="text-yellow-500 shrink-0" />Années d’existence : depuis octobre 2013 </p>
        </div>
        <div className='border border-white/16 shadow-2xl  p-6  m-3 md:p-10 rounded-xl space-y-5'>
          <h1 className='text-2xl font-bold'>Nos valeurs</h1>
          <p className='flex items-center gap-4'> <FaCheck className="text-yellow-500 shrink-0" />Former les élites de demain </p>
          <p className='flex items-center gap-4'> <FaCheck className="text-yellow-500 shrink-0" />Réussir grâce aux nouvelles
            technologies de l’information et de la communication </p>
        </div>
        <div className='border border-white/16 shadow-2xl  p-6  m-3 md:p-10 rounded-xl space-y-5' >
          <h1 className='text-2xl font-bold'>Atouts</h1>
          <p className='flex items-center gap-4'><FaCheck className="text-yellow-500 shrink-0" /> Meilleur cadre de travail </p>
          <p className='flex items-center gap-4'><FaCheck className="text-yellow-500 shrink-0" /> Effectifs limités </p>
          <p className='flex items-center gap-4'><FaCheck className="text-yellow-500 shrink-0" /> Personnel enseignant qualifié </p>
          <p className='flex items-center gap-4'><FaCheck className="text-yellow-500 shrink-0" /> Cours d’informatique gratuits </p>
          <p className='flex items-center gap-4'><FaCheck className="text-yellow-500 shrink-0" /> Bon taux de réussite </p>

          <div className='flex justify-end'>
            <button className='bg-amber-500 hover:bg-amber-400 cursor-pointer p-2 rounded-xl text-sm font-bold'>
              <Link href={"/apropos"}>
                En savoir plus
              </Link>
            </button>
          </div>

        </div>
        <div className='border border-white/16 shadow-2xl  p-6 m-3 md:p-10 rounded-xl space-y-5'>
          <h1 className='text-2xl font-bold'>Actualités</h1>
          <p className='flex items-center gap-4'>  <FaCheck className="text-yellow-500 shrink-0" /> DEF 2024 : 97% </p>
          <p className='flex items-center gap-4'>  <FaCheck className="text-yellow-500 shrink-0" /> Bac 2024 : 1ère nationale (17,50 en TSE) </p>
          <p className='flex items-center gap-4'>  <FaCheck className="text-yellow-500 shrink-0" /> Plusieurs élèves classés parmi les meilleurs au niveau national </p>
          <div className='flex justify-end mt-20'>
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





