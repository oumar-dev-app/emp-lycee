'use client';

import { FC } from 'react';
import { DataLinks } from './DataLinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaTimes } from "react-icons/fa";
import MobileLogo from './MobileLogo';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  return (
    <>
      {/* 🔥 Overlay (fond sombre + blur) */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 bg-black/50 backdrop-blur-sm z-40
          transition-opacity duration-100
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* 🚀 Slider */}
     <div
  className={`
    fixed inset-y-0 left-0 z-50 w-full shadow-xl
    transform transition-all

    ${isOpen 
      ? "translate-x-0 scale-100 duration-100 ease-out" 
      : "-translate-x-full scale-90 duration-400 ease-in"}
  `}
>
        <div className='min-w-72 max-w-96 bg-black h-screen p-10 border-r-2 border-green-800 flex flex-col gap-6'>

          {/*  Bouton fermer */}
          <div className='flex justify-end'>
            <button
              onClick={onClose}
              className='text-white hover:text-red-500 transition'
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* 🔗 Navigation */}
          <div className='flex flex-col text-white space-y-4 font-semibold text-sm tracking-wide'>
            {DataLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`
                  transition
                  hover:text-red-600
                  ${pathname === link.href && "text-red-500"}
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* 🖼 Logo avec animation */}
          <div className='mt-10'>
            <MobileLogo />
          </div>

        </div>
      </div>
    </>
  );
};

export default SideMenu;