"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import {
  TbAward,
  TbBrandLinkedin,
  TbChartBar,
  TbMail,
  TbMenu2,
  TbPhone,
  TbUser,
  TbX,
} from "react-icons/tb";
import { motion } from "framer-motion";

const navLinks = [
  {
    name: "About",
    icon: TbUser,
    path: "/",
  },
  {
    name: "Skills",
    icon: TbChartBar,
    path: "/skills",
  },
  {
    name: "Experience",
    icon: TbAward,
    path: "/experience",
  },
];

const contactLinks = [
  {
    name: "Email",
    icon: TbMail,
    path: "mailto:michaeloreilly101@yahoo.ie",
  },
  {
    name: "Phone",
    icon: TbPhone,
    path: "tel:00353896083228",
  },
  {
    name: "LinkedIn",
    icon: TbBrandLinkedin,
    path: "https://www.linkedin.com/in/michael-o-reilly-536a85bb/",
  },
];

export default function Sidebar(): JSX.Element {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = (): void => setIsOpen(!isOpen);

  //animation variants
  const textElements = {
    open: { opacity: 1, width: "auto" },
    closed: { opacity: 0, width: "0px" },
  };

  return (
    <div className=' text-xl fixed left-0 top-0 h-[calc(100%-1rem)] p-[1rem] m-2 bg-neutral-800 rounded-2xl'>
      <div className="">
        <button className={`bg-transparent  rounded-xl p-3 mx-auto ${isOpen ? 'bg-red-500/50 hover:bg-red-500/75' : 'hover:bg-green-500/50'}`} onClick={toggleSidebar}>
          {isOpen ? <TbX /> : <TbMenu2 />}
        </button>
      </div>
      <ul className='mt-10 flex flex-col gap-4'>
        <motion.header
          animate={isOpen ? "open" : "closed"}
          variants={textElements}
          initial='closed'
          className='text-sm uppercase'
        >
          Navigate
        </motion.header>
        {navLinks.map((link): JSX.Element => {
          const icon = React.createElement(link.icon);
          const isActive = pathname === link.path;
          return (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`flex items-center rounded-xl p-1 ${isActive ? 'bg-white/20' : 'bg-transparent hover:bg-white/10'}`}
              >
                <span className='p-2'>{icon}</span>
                <motion.span
                  animate={isOpen ? "open" : "closed"}
                  variants={textElements}
                  initial='closed'
                  className=''
                >
                  {link.name}
                </motion.span>
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className='mt-10 flex flex-col gap-4'>
        <motion.header
          animate={isOpen ? "open" : "closed"}
          variants={textElements}
          initial='closed'
          className='text-sm uppercase'
        >
          Contact
        </motion.header>
        {contactLinks.map((link): JSX.Element => {
          const icon = React.createElement(link.icon);
          return (
            <li key={link.name}>
              <Link
                href={link.path}
                target={link.name === "LinkedIn" ? "_blank" : ""}
                className='flex items-center bg-transparent hover:bg-white/10 rounded-xl p-1'
              >
                <span className='p-2'>{icon}</span>
                <motion.span
                  animate={isOpen ? "open" : "closed"}
                  variants={textElements}
                  initial='closed'
                  className=''
                >
                  {link.name}
                </motion.span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
