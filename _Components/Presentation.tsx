import React from 'react'
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';
import Valeurs from './Valeurs';



function Presentation() {
  return (
    <div >
    
      <div className='max-w-7xl m-auto mb-10 mt-15'>
          <div className='border border-white border-b-4 border-b-green-600  shadow-2xl  p-6 md:p-10 rounded-xl m-3'>
            <p className='font-bold  text-center'>Créé en 2013 et ouvert en octobre 2013,
              le Groupe Scolaire Amadou Sidibé (GSAS)
              est un établissement scolaire moderne qui œuvre pour une formation de qualité.
            </p>
          </div>
      </div>
      <div>
        <Valeurs/>
      </div>
    </div>

  )
}

export default Presentation;