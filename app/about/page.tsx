import Image from "next/image";
import React from "react";
import me from "../../public/mick2.webp";
import Link from "next/link";


export default function page() {
  return (
    <div className='page'>
      <div className='place-self-center '>
        <div className='bg-black/70 p-16 rounded-xl'>
          <div className='flex flex-col items-center justify-center lg:flex-row gap-10'>
            <Image
              src={me}
              alt="image of Michael O'Reilly"
              quality={100}
              loading='lazy'
              className='rounded-2xl w-96 border-4 object-cover border-gray-200 shadow-xl'
            />
            <div className='max-w-xl prose prose-invert prose-h1:font-head prose-a:text-rose-500 font-body'>
              <h1>About me</h1>
              <p>Hello there! Thank you for taking the time to read my bio.</p>
              <p>
                My name is Michael O&apos; Reilly and when i&apos;m not enjoying
                a walk on Bettystown beach with my family, you will find me with
                my head stuck in the laptop, coding my next big app idea!
              </p>
              <p>
                My day job sees me managing a busy{" "}
                <Link href='/'>
                  <strong>eCommerce</strong>
                </Link>{" "}
                website. I have an extensive background in{" "}
                <Link href='/'>
                  <strong>sales and marketing</strong>
                </Link>
                , this coupled years of self-thought creativity make me an
                effective leader of the team.
              </p>
              <p>
                I am a trained sound engineer, self-thought
                multi-instrumentalist and lover of all things artistic - from
                illustration and photography, to building and architecture.
              </p>
            </div>
          </div>
        </div>
        <div className='flex justify-between'>
        <Link
              className='flex items-center underline hover:text-sky-500 group'
              href='/'
            >
              go home
            </Link>
          <div className='flex gap-4'>
            <Link
              className='flex items-center underline hover:text-amber-500 group'
              href='/skills'
            >
              view skills
            </Link>
            <Link
              className='flex items-center underline hover:text-emerald-500 group'
              href='/skills'
            >
              view experience
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
