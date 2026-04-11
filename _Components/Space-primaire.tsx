import { FaCheck } from 'react-icons/fa';

const bgImage = [
  {
    id: 1,
    image: "/apropos.jpg"
  }
]

function Space_primaire() {
  return (
    <div className='max-w-7xl m-auto mt-20 mb-20'>
      <div className='m-3'>
        {
          bgImage.map((item) => (
            <div
              style={{ backgroundImage: `url(${item.image})` }}
              key={item.id}
              className='w-full h-full bg-cover bg-center rounded-2xl'
            >
              <div className="bg-white/93 w-full h-full">
                <div className='space-y-15'>
                  <div className='border border-white border-b-4 border-b-green-600 shadow-2xl p-10 rounded-xl space-y-5' >
                    <p className='font-bold  text-center'>L’école fondamentale EPMS assure une formation solide du primaire jusqu’au collège avec un encadrement de qualité.</p>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='text-white bg-gray-500 shadow-2xl p-6 md:p-10 rounded-xl space-y-5'>
                      <h1 className='text-2xl font-bold'>Résultats:</h1>
                      <ul className='space-y-5'>
                        <li className='flex items-start gap-4'><FaCheck className="text-yellow-500 shrink-0" /> DEF 2020 : 100% </li>
                        <li className='flex items-start gap-4'><FaCheck className="text-yellow-500 shrink-0" /> DEF 2021 : 3 élèves parmi les 10 meilleurs </li>
                        <li className='flex items-start gap-4'><FaCheck className="text-yellow-500 shrink-0" /> DEF 2022 : 95%  </li>
                        <li className='flex items-start gap-4'><FaCheck className="text-yellow-500 shrink-0" /> DEF 2023 : 90% </li>
                        <li className='flex items-start gap-4'><FaCheck className="text-yellow-500 shrink-0" /> DEF 2024 : 97% </li>
                      </ul>
                    </div>

                    <div className=' bg-gray-500 text-white shadow-2xl p-6 md:p-10 rounded-xl space-y-5'>
                      <h1 className='text-2xl font-bold'>Atouts spécifiques :</h1>
                      <p className='flex items-center gap-4'> <FaCheck className="text-yellow-500 shrink-0" />Cours d’informatique gratuits</p>
                      <p className='flex items-center gap-4'> <FaCheck className="text-yellow-500 shrink-0" />Encadrement personnalisé </p>
                      <p className='flex items-center gap-4'> <FaCheck className="text-yellow-500 shrink-0" />Bon taux de réussite  </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>




    </div>
  )
}

export default Space_primaire;