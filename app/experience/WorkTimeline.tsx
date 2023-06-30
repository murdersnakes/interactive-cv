"use client";

import React, { useState } from "react";
import { workExperience } from "../../data/workExperience";
import { motion } from "framer-motion";

export default function WorkTimeline(): JSX.Element {
  const [sectionOpen, setSectionOpen] = useState(null);

  const toggleButton = (id: number) => () => {
    if (sectionOpen === id) {
      setSectionOpen(null);
    } else {
      setSectionOpen(id);
    }
  };

  return (
    <div className='mt-10'>
      {workExperience.map((job, index): JSX.Element => {
        const isLastItem = index === workExperience.length - 1;
        return (
          <div key={job.id} className='flex items-stretch px-6'>
            <div className='flex flex-col items-center'>
              <div className='w-6 aspect-square rounded-full bg-emerald-500'></div>
              {isLastItem ? null : (
                <div className='flex-grow w-1 bg-emerald-500'></div>
              )}
            </div>
            <button
              onClick={toggleButton(job.id)}
              className={`flex flex-col items-start text-left px-3 pb-3 ml-3 mb-3 rounded-2xl hover:ring-1 ring-neutral-800 hover:bg-black`}
            >
              <p>{job.date}</p>
              <h2 className='font-bold font-head text-white mb-2'>
                {job.title}
              </h2>
              <p className='prose prose-invert'>{job.description}</p>
              <motion.div
                initial={{ maxHeight: 0 }}
                animate={{ maxHeight: sectionOpen === job.id ? "1000px" : 0 }} //adjust 1000px to meet your need
                transition={{ duration: 1 }}
                className={`overflow-hidden rounded-2xl ${
                  sectionOpen === job.id ? "bg-white/10 p-5" : "bg-transparent"
                }`}
              >
                {sectionOpen === job.id && (
                  <div
                    className='prose prose-invert'
                    dangerouslySetInnerHTML={{ __html: job.details }}
                  ></div>
                )}
              </motion.div>
            </button>
          </div>
        );
      })}
    </div>
  );
}
