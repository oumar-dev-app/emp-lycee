
'use client'
import { DataLinks } from './DataLinks';
import Link from 'next/link';
import { BiMap } from 'react-icons/bi';
import { BsTelephone, BsWhatsapp } from 'react-icons/bs';
import Logo from './Logo';
import { usePathname } from 'next/navigation';

function Footer() {
  const pathname = usePathname();
  return (
    <footer className='bg-black p-10 '>
      <div className='max-w-7xl  m-auto'>
        <div className='text-white grid grid-cols-1 md:grid-cols-3'>
          <div className='space-y-5 mt-5'>
            <h1 className=' font-bold'>Lien rapide</h1>
            {DataLinks.map((links) => {
              const isActive = pathname.startsWith(links.href)
              return (
                <ul>
                  <li key={links.href}>
                    <Link href={links.href}
                      className={`hover:text-red-600  group hoverEffect ${pathname === links.href ? "text-red-500" : ""}`}
                    >
                      {links.name}
                    </Link>
                  </li>
                </ul>
              )
            })}
          </div>
          <div className='space-y-5 mt-5'>
            <h1 className='font-bold'>
              Adresse
            </h1>

            <p className='flex items-center gap-5'>
              <BiMap size={25} className='text-yellow-500' />Kalaban coro Sangha
            </p>
          </div>
          <div className='space-y-5'>
            <h1 className='font-bold'>Contact</h1>
            <p className='flex items-center gap-5'>
              <BsTelephone size={20} className='text-yellow-500' /> +223 76 49 67 10
            </p>
            <p className='flex items-center gap-5'>
              <BsWhatsapp size={20} className='text-green-500' /> +223 66 20 95 56
            </p>
          </div>
        </div>
        <p className='text-center text-white text-sm font-bold'>
          <div className='flex justify-center'>
            <Logo />
          </div>
          Copy©Rigth 2026
        </p>
      </div>

    </footer>
  )
}

export default Footer;