"use client";

import { MenuIcon } from 'lucide-react';
import Image from 'next/image'; 
import Link from 'next/link';
import { useState } from 'react';

export default function Header(){
    const [visible, setVisible] = useState(false);

    const Menu =[
        {
            id:1,
            name:'Home',
            link:'/'
        },
        {
            id:2,
            name:'Speciallist',
            link:'/doctors'
        },
        {
            id:3,
            name:'Appointment',
            link:'/appointment'
        },
        {
            id:4,
            name:'About Us',
            link:'/about'
        }
    ] 
    return(
        <header className=' w-full z-10 p-4 flex items-center justify-between bg-white'>
            <Image src='/logo.png' width='50' height='50' alt=""/>
            <nav className='hidden md:flex justify-between gap-10 text-lg'>
                {
                    Menu.map(item=><Link href={item.link} key={item.id} className='hover:text-blue-600 font-semibold transition-all hover:scale-105'>{item.name}</Link>)
                }
            </nav>
            <MenuIcon className='md:hidden cursor-pointer' onClick={()=>setVisible(!visible)}/>
            {
                visible && <nav className='z-10 text-lg bg-sky-50 absolute top-20 right-4'>
                {
                    Menu.map(item=><Link href={item.link} key={item.id} className='px-6 py-2 block w-100 mt-2 hover:bg-blue-400 transition-all z-auto'>{item.name}</Link>)
                }
            </nav>
            }
            <button className='bg-sky-600 px-6 py-2 rounded-lg text-white cursor-pointer md:flex hidden'>Get Started</button>
        </header>
    )
}