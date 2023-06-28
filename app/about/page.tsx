import Image from "next/image";
import React from "react";
import me from "../../public/mick2.webp";

export default function page(): JSX.Element {
  return (
    <div className='page'>
      <div className='place-self-center mt-44 mb-24 lg:m-0'>
        <div className='bg-gradient-to-l from-neutral-900 to-black mt-3 p-10 rounded-xl'>
          <div className='flex flex-col items-center justify-center lg:flex-row gap-10'>
            <Image
              src={me}
              alt="image of Michael O'Reilly"
              quality={75}
              loading='lazy'
              className='rounded-2xl w-96 border-4 object-cover border-rose-500 shadow-xl'
            />
            <div className='max-w-xl prose prose-invert prose-h1:font-head font-body'>
              <h1>About me</h1>
              <p>Hello there! Thank you for taking the time to read my bio.</p>
              <p>
                My name is Michael O&apos; Reilly and when i&apos;m not enjoying
                a walk on Bettystown beach with my family, you will find me with
                my head stuck in the laptop, coding my next big app idea!
              </p>
              <p>
                My day job sees me managing a busyeCommerce website. I have an
                extensive background in sales and marketing , this coupled years
                of self-thought creativity make me an effective leader of the
                team.
              </p>
              <p>
                I am a trained sound engineer, self-thought
                multi-instrumentalist and lover of all things artistic - from
                illustration and photography, to building and architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
