import Link from 'next/link'
import React from 'react'
import { TbHome } from 'react-icons/tb'

export default function Navbar() : JSX.Element {
  return (
    <div className='fixed top-0  p-5 z-50 w-full flex justify-between'>
        <div className='font-semibold font-body flex gap-4'>
            <Link href="/" className='underline hover:text-sky-500'>info@michaeloreilly.ie</Link>
            <span className='cursor-default'>||</span>
            <Link href="/" className='underline hover:text-sky-500'>+353 (0) 89 608 3228</Link>
        </div>
        <Link className='bg-sky-500 hover:bg-sky-600 rounded-full p-2 text-black' href="/"><TbHome size={36}/></Link>
    </div>
  )
}
