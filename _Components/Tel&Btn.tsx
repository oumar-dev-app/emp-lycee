import React from 'react'
import Tel from './Tel';
import BtnHomeBar from './BtnHomeBar';

function TelBtn() {
  return (
    <div className='grid grid-cols-2 gap-10 mt-5'>
        <BtnHomeBar/>
        <Tel/>
    </div>
  )
}

export default TelBtn;