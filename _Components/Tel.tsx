import React from 'react'
import { CgMail } from 'react-icons/cg';
import { PiPhone } from 'react-icons/pi';

function Tel() {
  return (
    <div className='flex items-center gap-10 text-white'>
        <div className='flex items-center gap-5 font-bold'><PiPhone size={28}/> +223 70 50 40 30</div>
        <div className='flex items-center gap-5 font-bold'><CgMail size={28}/> scolaire@gmail.com</div>
    </div>
  )
}

export default Tel;