import Link from "next/link";
import React from "react";
import { TbInfoCircleFilled } from "react-icons/tb";

export default function Home(): JSX.Element {
  return (
    <div className="min-h-screen grid">
      <div className="place-self-center">
        <h1 className='h1 text-center'>Michael O&apos; Reilly</h1>
        <div className="grid lg:grid-cols-3 gap-5 mt-5">
          <Link href="/about" className="flex items-center gap-2 rounded hover:bg-rose-500 hover:text-black p-3 trans hover:shadow-lg">
            <TbInfoCircleFilled size={36}/>
            <div>
              <span className="font-head font-bold">About</span>
              <p className="font-body text-xs">Who the heck is Michael!</p>
            </div>
          </Link>
          <Link href="/skills" className="flex items-center gap-2 rounded hover:bg-amber-500 hover:text-black p-3 trans hover:shadow-lg">
            <TbInfoCircleFilled size={36}/>
            <div>
              <span className="font-head font-bold">Skills</span>
              <p className="font-body text-xs">What can you do?</p>
            </div>
          </Link>
          <Link href="/" className="flex items-center gap-2 rounded hover:bg-emerald-500 hover:text-black p-3 trans hover:shadow-lg">
            <TbInfoCircleFilled size={36}/>
            <div>
              <span className="font-head font-bold">Experience</span>
              <p className="font-body text-xs">How did you get here?</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
