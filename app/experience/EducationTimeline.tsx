"use client";

import React from "react";
import { education } from "../../data/education";

export default function EducationTimeline(): JSX.Element {
  return (
    <div className='mt-10'>
      {education.map((job, index): JSX.Element => {
        const isLastItem = index === education.length - 1;
        return (
          <div key={job.id} className='flex items-stretch px-6'>
            <div className='flex flex-col items-center'>
              <div className='w-6 aspect-square rounded-full bg-sky-500'></div>
              {isLastItem ? null : (
                <div className='flex-grow w-1 bg-sky-500'></div>
              )}
            </div>
            <div className='flex flex-col items-start text-left px-3 pb-3 ml-3 mb-3 rounded-2xl'>
              <p>{job.date}</p>
              <h2 className='font-bold font-head text-white mb-2'>
                {job.title}
              </h2>
              <p className='prose prose-invert'>{job.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
