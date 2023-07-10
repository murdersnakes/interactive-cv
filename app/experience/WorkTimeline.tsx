"use client";

import React, { useState } from "react";
import { workExperience } from "../../data/workExperience";
import { motion } from "framer-motion";

export default function WorkTimeline(): JSX.Element {
  const [sectionOpen, setSectionOpen] = useState(null);

  const toggleButton =
    (id: number): (() => void) =>
    (): void => {
      if (sectionOpen === id) {
        setSectionOpen(null);
      } else {
        setSectionOpen(id);
      }
    };

    const variants = {
      open: { opacity: 1, height: "auto" },
      closed: { opacity: 0, height: "0" },
    };

  return (
    <div className='mt-10'>
      {workExperience.map((job, index): JSX.Element => {
        const isLastItem = index === workExperience.length - 1;
        return (
          <div key={job.id} className='flex items-stretch gap-5'>
            <div className='flex flex-col items-center flex-grow'>
              <div className='w-6 aspect-square rounded-full bg-emerald-500'></div>
              { isLastItem ? null : <div className='w-1 flex-grow bg-emerald-500'></div>}
            </div>
            <div className='flex flex-col pl-3'>
              <p className='text-emerald-500 ml-3 mb-1'>{job.date}</p>
              <button onClick={toggleButton(job.id)} className="p-3 bg-white/5 hover:bg-white/10 rounded-xl mb-6 flex flex-col text-left prose prose-invert">
                <h2 className="font-head font-bold text-lg mb-1">{job.title}</h2>
                <p>{job.description}</p>
                {sectionOpen === job.id && (
                  <motion.div
                  initial='closed'
                  animate={sectionOpen === job.id ? "open" : "closed"}
                  variants={variants}
                    >
                      <div dangerouslySetInnerHTML={{__html:job.details}}/>
                    </motion.div>
                )}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
