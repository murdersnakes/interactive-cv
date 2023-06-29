import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbAward, TbChevronRight, TbInfoCircleFilled } from "react-icons/tb";
import me from "../public/mick2.webp";
import ProfileCard from "./components/ProfileCard";

export default function Home(): JSX.Element {
  return (
    <div className='page'>
      <div className='place-self-center mt-56 mb-24 lg:m-0'>
        <ProfileCard />
      </div>
    </div>
  );
}
