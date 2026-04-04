import React from 'react'
import { FaCheck } from 'react-icons/fa';
import Adresse from './Adresse';

const imgInfra = [
    {
        id: 1,
        image: "/presentation_img.jpg"
    }
]
function Infratructure() {
    return (
        <div className='max-w-7xl m-auto p-10 mt-10'>
            <div className='grid grid-cols-2 gap-5'>
                <div className='shadow-2xl rounded-xl'>
                    {
                        imgInfra.map((item) => (
                            <div
                                style={{ backgroundImage: `url(${item.image})` }}
                                key={item.id}
                                className=' h-140 w-full bg-cover bg-center rounded-xl'

                            >

                            </div>
                        ))
                    }
                </div>
                <div className='border border-white shadow-2xl p-10 rounded-xl space-y-5'>
                    <h1 className='text-2xl font-bold'>Infrastructures :</h1>
                    <p className='flex items-center gap-4'> <FaCheck  className="text-yellow-500"/> Caméras de surveillance (18 au secondaire, 24 au fondamental) </p>
                    <p className='flex items-center gap-4'> <FaCheck  className="text-yellow-500"/> Bibliothèque équipée </p>
                    <p className='flex items-center gap-4'> <FaCheck  className="text-yellow-500"/> Salle informatique moderne </p>
                </div>
             
            </div>
               <Adresse/>
        </div>

    )
}

export default Infratructure;