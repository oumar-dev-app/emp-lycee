import React from 'react'

function Poucentage() {
  return (
    <div className='flex justify-between items-center mb-5'>
        <div>
            <h1 className='text-4xl font-extrabold text-yellow-500 text-center'>100%</h1>
            <p className='text-sm text-white'>Taux DEF 2025</p>
        </div>
        <div>
            <h1 className='text-4xl font-extrabold text-yellow-500 text-center'>72%</h1>
            <p className='text-sm text-white'>Taux Bac 2025</p>
        </div>
        <div>
            <h1 className='text-4xl font-extrabold text-yellow-500 text-center'>730+</h1>
            <p className='text-sm text-white'>Eleves</p>
        </div>
        <div>
            <h1 className='text-4xl font-extrabold text-yellow-500 text-center'>25+</h1>
            <p className='text-sm text-white'>Années d'Excellence</p>
        </div>
    </div>
  )
}

export default Poucentage;