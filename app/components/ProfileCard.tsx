"use client";

import React, { useState } from "react";
import me from "../../public/mick2.webp";
import Image from "next/image";
import Link from "next/link";
import { TbBrandLinkedin, TbMail, TbPhone } from "react-icons/tb";
import { motion } from "framer-motion";

export default function ProfileCard(): JSX.Element {
  return (
    <div className='flex gap-10'>
      <div className='rounded-[5rem] shadow-lg h-[600px] w-[400px] overflow-hidden border-4 border-white/30' >
        <div className='h-1/2 w-full bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-emerald-200 to-emerald-700 relative grid place-items-center '>
          <Image
            src={me}
            alt='profile photo'
            className='rounded-full object-fill w-1/2 aspect-square shadow-2xl'
          />
        </div>
        <div className= "w-full h-1 bg-gradient-to-r from-white/30 via-white/90 to-white/30"></div>
        <div className='h-1/2 bg-gradient-to-t from-white/20 to-white/10 flex flex-col items-center justify-between p-[10%]'>
          <div className='text-center'>
            <h1 className='font-bold text-2xl text-white'>Michael O&apos; Reilly</h1>
            <p className='uppercase text-xs text-emerald-300'>eCommerce Manager</p>
          </div>
          <div className='flex w-full justify-between'>
            <blockquote className='italic text-center'>
              Highly skilled eCommerce manager with a strong background in
              social media strategy and marketing.
            </blockquote>
          </div>
          <ul className='flex justify-around gap-6'>
            <li className=''>
              <Link
                className='flex p-2 rounded-full bg-white text-black hover:bg-emerald-500 trans'
                href='mailto:michaeloreilly101@yahoo.ie'
              >
                <TbMail size={25} />
              </Link>
            </li>
            <li className=''>
              <Link
                className='flex p-2 rounded-full bg-white text-black hover:bg-emerald-500 trans'
                href='tel:00353896083228'
              >
                <TbPhone size={25} />
              </Link>
            </li>
            <li>
              <Link
                className='flex p-2 rounded-full bg-white text-black hover:bg-emerald-500 trans'
                target='_blank'
                href='https://www.linkedin.com/in/michael-o-reilly-536a85bb/'
              >
                <TbBrandLinkedin size={25} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
