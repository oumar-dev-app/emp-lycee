import React from 'react'

function DifferentEcole() {
    return (
        <div className='grid grid-cols-3 gap-5'>
            <div className='border border-white/25 bg-gray-500/25 rounded-xl p-3'>
                <p>
                    D'un jardin d'enfants dénommé <strong>Jardin d'enfants LE ZENITH </strong>
                    comprenant la petite, la moyenne et la grande section;
                </p>

            </div>
            <div className='border border-white/25 bg-gray-500/25 rounded-xl p-3'>
                D'un Ecole Fondamentale: <strong>l'Ecole Privée Manténin Sidibé (EPMS) avec le Primaire et le collége;</strong>
            </div>
            <div className='border border-white/25 bg-gray-500/25 rounded-xl p-3'>
                <p>
                    D'un lycée appelé <strong>Lycée Privé Djinèssira Coulibaly LPDJICOUL </strong>
                    où nous avons toutes les séries;
                </p>
            </div>
        </div>
    )
}

export default DifferentEcole;