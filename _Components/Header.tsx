import React from 'react'
import { DataLinks } from './DataLinks';
import Link from 'next/link';

function Header() {
  return (
    <div className='flex items-center gap-8'>
      {DataLinks.map((links) => {
        return(
          <div key={links.name} className='font-bold text-sm hover:text-yellow-600 hover:underline'>
            <Link href={links.href}>
            {links.name}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Header;