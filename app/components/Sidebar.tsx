"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import {
  TbAward,
  TbBrandLinkedin,
  TbChartBar,
  TbHome,
  TbMail,
  TbMenu2,
  TbPhone,
  TbUser,
  TbX,
} from "react-icons/tb";
import { motion } from "framer-motion";

export default function Sidebar(): JSX.Element {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = (): void => setIsOpen(!isOpen);

  const menuWidth = {
    open: { width: "250px" },
    closed: { width: "100px" },
  };

  const fadeText = {
    open: { opacity: 1, width: "100%" },
    closed: { opacity: 0, width: "0%" },
  };

  return (
    <div>
      <motion.div
        initial='closed'
        animate={isOpen == true ? "open" : "closed"}
        variants={menuWidth}
        className='fixed left-0 top-0 h-[calc(100%-1rem)] flex flex-col bg-white/10 backdrop-blur-sm text-white text-lg font-body p-[1rem] m-2 shadow-xl gap-4 rounded-2xl opacity-50 hover:opacity-100'
        style={{ originX: 0 }}
      >
        <button
          onClick={toggleSidebar}
          className={
            isOpen == true
              ? "flex justify-center items-center rounded-full w-12 h-12 bg-red-700 hover:ring ring-white"
              : "flex justify-center items-center rounded-full w-12 h-12 bg-sky-500 ring ring-white hover:bg-sky-400"
          }
        >
          {isOpen == true ? <TbX /> : <TbMenu2 />}
        </button>
        <div>
          <motion.div
            initial='closed'
            animate={isOpen == true ? "open" : "closed"}
            variants={fadeText}
            style={{ originX: 0 }}
          >
            <p className='text-sm font-head font-bold uppercase'>Navigate</p>
            <div className='h-0.5 w-full bg-gray-500'></div>
          </motion.div>
          <ul className='py-5'>
            <li>
              <Link
                className={
                  "flex hover:bg-gray-100 hover:text-black h-12 my-2 rounded-r-full rounded-l-full"
                }
                href='/'
              >
                <TbHome />
                {isOpen && <span>Home</span>}
              </Link>
            </li>
            <li>
              <Link
                className='flex hover:bg-amber-500 hover:text-black h-12 my-2 rounded-r-full rounded-l-full'
                href='/skills'
              >
                <TbChartBar />
                {isOpen && <span>Home</span>}
              </Link>
            </li>
            <li>
              <Link
                className='flex hover:bg-emerald-500 hover:text-black h-12 my-2 rounded-r-full rounded-l-full'
                href='/experience'
              >
                <TbAward />
                {isOpen && <span>Home</span>}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <motion.div
            initial='closed'
            animate={isOpen == true ? "open" : "closed"}
            variants={fadeText}
          >
            <p className='text-sm font-head font-bold uppercase'>Contact</p>
            <div className='h-0.5 w-full bg-gray-500'></div>
          </motion.div>
          <ul className='py-5'>
            <li>
              <Link
                className='flex hover:bg-lime-500 hover:text-black h-12 my-2 rounded-r-full rounded-l-full'
                href='tel:00353896083228'
              >
                <TbPhone />
                {isOpen && <span>Home</span>}
              </Link>
            </li>
            <li>
              <Link
                className='flex hover:bg-amber-500 hover:text-black h-12 my-2 rounded-r-full rounded-l-full'
                href='mailto:michaeloreilly101@yahoo.ie'
              >
                <TbMail />
                {isOpen && <span>Home</span>}
              </Link>
            </li>
            <li>
              <Link
                className='flex hover:bg-[#0072b1] h-12 my-2 rounded-r-full rounded-l-full'
                href='https://www.linkedin.com/in/michael-o-reilly-536a85bb/'
                target='_blank'
              >
                <TbBrandLinkedin />
                {isOpen && <span>Home</span>}
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
