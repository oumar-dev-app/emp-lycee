import React from 'react'

function Adresse() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 m-3'>
            <div className='border border-white rounded-xl space-y-3 p-3 shadow-2xl'>
                <h1 className=' font-bold'>Adresse</h1>
                <p>
                    Nous nous trouvons à <strong>Kalaban coro Sangha </strong>
                    derriere le Radio Donko non loin de la mosque <strong>Karata Misiri</strong>
                </p>
            </div>

            <div className='border border-white rounded-xl space-y-3 p-3 shadow-2xl'>
                <h1 className='font-bold'>Contacts</h1>
                <div className='space-y-3'>
                    <p>(+223) 76 49 67 10</p>
                    <p>(+223) 66 20 95 56</p>
                </div>
            </div>

        </div>
    )
}

export default Adresse;