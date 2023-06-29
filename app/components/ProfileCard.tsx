"use client";

import React, { useState } from "react";
import me from "../../public/mick2.webp";
import Image from "next/image";
import Link from "next/link";
import { TbBrandLinkedin, TbMail, TbPhone } from "react-icons/tb";
import { motion } from "framer-motion";

export default function ProfileCard(): JSX.Element {
  const [readMoreOpen, setReadMoreOpen] = useState(false);

  const variants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: "0" },
  };

  return (
    <div className='rounded-2xl bg-white/10 flex flex-col overflow-hidden max-w-md group relative z-0'>
      <Image
        src={me}
        alt='profile picture'
        className='object-cover w-full group-hover:scale-110 transition-scale duration-700 ease-out -z-10'
        quality={75}
        loading='lazy'
      />
      <div className='p-6 w-full bg-black overflow-hidden'>
        <div className='w-full h-0.5 bg-white text-black rounded-l-full rounded-r-full mb-2'></div>
        <h1 className='text-2xl uppercase font-head tracking-wide font-bold text-white'>
          Michael O&apos; Reilly
        </h1>
        <p className='text-sm text-sky-500'>eCommerce Manager</p>
        <p className='py-2'>
          My day job sees me managing a busy eCommerce website. I have an
          extensive background in sales and marketing , this coupled years of
          self-thought creativity make me an effective leader of the team...
          <button
            onClick={(): void => setReadMoreOpen(!readMoreOpen)}
            className={
              readMoreOpen == false
                ? "cursor-pointer underline hover:text-sky-500"
                : "text-red-500 hover:underline"
            }
          >
            {readMoreOpen ? "show less" : "read more"}
          </button>
        </p>
        <motion.div
          initial="closed"
          animate={readMoreOpen ? "open" : "closed"}
          variants={variants}
        >
          <p className='py-2'>
            I am a trained sound engineer, self-thought multi-instrumentalist
            and lover of all things artistic, from illustration and
            photography, to building and architecture.
          </p>
          <p className='py-2'>
            When i&apos;m not enjoying a walk on Bettystown beach with my
            family, you will find me with my head stuck in the laptop, coding my
            next big app idea!
          </p>
        </motion.div>

        <ul className='py-5 flex justify-center gap-2'>
          <li>
            <Link
              className='block bg-white text-black text-2xl rounded-full p-2'
              href='tel:00353896083228'
            >
              <TbPhone size={25} />
            </Link>
          </li>
          <li>
            <Link
              className='block bg-white text-black text-2xl rounded-full p-2'
              href='mailto:michaeloreilly101@yahoo.ie'
            >
              <TbMail size={25} />
            </Link>
          </li>
          <li>
            <Link
              className='block bg-white text-black text-2xl rounded-full p-2'
              href='https://www.linkedin.com/in/michael-o-reilly-536a85bb/'
              target='_blank'
            >
              <TbBrandLinkedin size={25} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
