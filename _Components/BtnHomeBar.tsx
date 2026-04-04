import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { FcLineChart } from 'react-icons/fc';

function BtnHomeBar() {
  return (
    <div className='grid grid-cols-2 gap-5'>
        <button className='bg-yellow-500 p-2 rounded-xl flex items-center gap-5 text-center text-white text-sm font-bold px-5'>Inscription 2025-2026 <FaArrowRight /></button>
        <button className='bg-yellow-500 p-2 rounded-xl text-sm font-bold px-5'>Découvrir notre école</button>
    </div>
  )
}

export default BtnHomeBar;