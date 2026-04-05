'use client';
import { FC } from 'react'
import { DataLinks } from './DataLinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FaTimes } from "react-icons/fa";
import Logo from './Logo';



interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}


const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
    const pathname = usePathname();
    return (
        <div
            className={`fixed inset-y-0 left-0 z-50 w-full shadow-xl 
    ${isOpen ? "translate-x-0" : "-translate-x-full"} hoverEffect`}
        >
            <div className='min-w-72 max-w-96 bg-black h-screen p-10 border-r border-blue-800 flex flex-col gap-6'>
                <div className='flex justify-end'>
                    <button onClick={onClose}
                        className='hover:text-red-500 hoverEffect text-white'
                    >
                        {/*  Close button icon */}
                        {<FaTimes />}
                    </button>
                </div>

                <div className='flex  justify-between gap-5'>
                    <div className='flex flex-col text-white space-y-3 font-semibold text-sm tracking-wide'>

                        {/* Navigation link */}
                        {DataLinks.map((link) => {
                            return (
                                <Link key={link.href} href={link.href} onClick={onClose}
                                    className={`hover:text-red-600 hoverEffect 
                            ${pathname === link.href && "text-red-500"}`}
                                >
                                    {link.name}
                                </Link>
                            )
                        })}
                    </div>



                </div>
                <div className='mt-7'>
                    <Logo />
                </div>

            </div>
        </div>
    )
}

export default SideMenu;