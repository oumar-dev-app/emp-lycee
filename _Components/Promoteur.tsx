import Adresse from './Adresse';
const image = [
    {
        id: 1,
        img: "/promoteur.jpg",
        title: "promoteur"
    }
]

const bgImage = [
    {
        id: 1,
        image: "/apropos.jpg"
    }
]

function Promoteur() {
    return (
        <div className='max-w-7xl m-auto p-10 mt-10'>
            {
                bgImage.map((item) => (
                    <div
                        style={{ backgroundImage: `url(${item.image})` }}
                        key={item.id}
                        className='w-full h-full bg-cover bg-center rounded-2xl'
                    >
                        <div className="bg-white/90 w-full h-full">
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                                <div className='shadow-2xl rounded-xl'>
                                    {
                                        image.map((item) => (
                                            <div key={item.id}
                                                className=' h-140 w-full bg-cover bg-center rounded-xl'
                                                style={{ backgroundImage: `url(${item.img})` }}
                                            >
                                            </div>
                                        ))
                                    }
                                </div>

                                <div className='border border-white/25 shadow-2xl p-10 rounded-xl'>
                                    <h1 className='text-2xl font-bold'>Mot de Promoteur</h1>
                                    <p>
                                        Nous invitons les parents d'élèves à venir inscrire leurs enfants afin de leur garantir une formation de
                                        qualité avec des methodes et techniques d'approches innovantes et captivantes. Alors chers parents ne ratez
                                        pas cette obène.
                                    </p>
                                </div>
                            </div>
                             <Adresse />
                        </div>


                    </div>
                ))
            }

           
        </div>
    )
}

export default Promoteur;