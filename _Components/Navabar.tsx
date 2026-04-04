import React from 'react'
import Header from './Header'
import Logo from './Logo'

function Navabar() {
  return (
    <div className='max-w-7xl m-auto p-2'>
      <div className='flex justify-between items-center'>
        <Logo />
        <Header />
      </div>
    </div>

  )
}

export default Navabar;