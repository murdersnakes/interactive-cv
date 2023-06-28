'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React, { useState } from 'react'
import { TbAward, TbBrandLinkedin, TbChartBar, TbHome, TbMail, TbMenu2, TbPhone, TbUser } from 'react-icons/tb'

export default function Sidebar(): JSX.Element {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(true)
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
      <nav className={`fixed left-0 top-0 h-[calc(100%-1rem)] flex flex-col bg-white/10 backdrop-blur-sm text-white text-lg font-body w-fit p-[1rem] m-2 rounded-2xl shadow-xl gap-4 ${isOpen ? '' : 'closed-sidebar'}`}>
        <button onClick={toggleSidebar} className='text-2xl flex justify-end'><TbMenu2 /></button>
        <div>
          <div className={isOpen ? '' : 'opacity-0'}>
            <p className='text-sm font-head font-bold uppercase'>Navigate</p>
            <div className='h-0.5 w-full bg-gray-500'></div>
          </div>
          <ul className='py-5'>
            <li>
              <Link className={'flex gap-1 items-center px-3 py-2 rounded-xl hover:bg-gray-100 hover:text-black my-2' + (pathname === '/' ? ' bg-gray-100 text-black' : '')} href="/"><TbHome /><span className="link-text">Home</span></Link>
            </li>
            <li>
              <Link className={'flex gap-1 items-center px-3 py-2 rounded-xl hover:bg-gray-100 hover:text-black my-2' + (pathname === '/about' ? ' bg-gray-100 text-black' : '')} href="/about"><TbUser /><span className="link-text">About</span></Link>
            </li>
            <li>
              <Link className={'flex gap-1 items-center px-3 py-2 rounded-xl hover:bg-gray-100 hover:text-black my-2' + (pathname === '/skills' ? ' bg-gray-100 text-black' : '')} href="/skills"><TbChartBar /><span className="link-text">Skills</span></Link>
            </li>
            <li>
              <Link className={'flex gap-1 items-center px-3 py-2 rounded-xl hover:bg-gray-100 hover:text-black my-2' + (pathname === '/experience' ? ' bg-gray-100 text-black' : '')} href="/experience"><TbAward /><span className="link-text">Experience</span></Link>
            </li>
          </ul>
        </div>
        <div>
          <div className={isOpen ? '' : 'opacity-0'}>
            <p className='text-sm font-head font-bold uppercase'>Contact</p>
            <div className='h-0.5 w-full bg-gray-500'></div>
          </div>
          <ul className='py-5'>
            <li>
              <Link className='flex gap-1 items-center px-3 py-2 rounded-xl hover:bg-lime-500 hover:text-black' href="tel:00353896083228"><TbPhone /><span className="link-text">Call</span></Link>
            </li>
            <li>
              <Link className='flex gap-1 items-center px-3 py-2 rounded-xl hover:bg-amber-500 hover:text-black' href="mailto:michaeloreilly101@yahoo.ie"><TbMail /><span className="link-text">Email</span></Link>
            </li>
            <li>
              <Link className='flex gap-1 items-center px-3 py-2 rounded-xl hover:bg-[#0072b1] hover:text-white' href="https://www.linkedin.com/in/michael-o-reilly-536a85bb/" target="_blank"><TbBrandLinkedin /><span className="link-text">LinkedIn</span></Link>
            </li>
          </ul>
        </div>
      </nav>


  )
}
