    import Adresse from './Adresse';
    const image = [
        {
            id:1,
            img:"/promoteur.jpg",
            title:"promoteur"
        }
    ]
    function Promoteur() {
        return (
            <div className='max-w-7xl m-auto p-10 mt-10'>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className='shadow-2xl rounded-xl'>
                        {
                            image.map((item) => (
                                <div key={item.id}
                                className=' h-140 w-full bg-cover bg-center rounded-xl'
                                style={{backgroundImage:`url(${item.img})`}}
                                >
                                </div>
                            ))
                        }
                    </div>
                
                    <div className='border border-white shadow-2xl p-10 rounded-xl'>
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
        )
    }

    export default Promoteur;