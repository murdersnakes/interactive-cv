"use client";

import React from "react";

export default function EducationTimeline(): JSX.Element {
  return (
    <div className='p-8 rounded-b-xl flex flex-col'>
      <div className='flex gap-4'>
        <div className='flex flex-col items-center'>
          <div className='rounded-full w-6 h-6 bg-sky-300'></div>
          <div className='h-full w-1 bg-sky-300'></div>
        </div>
        <div className='prose prose-invert pb-14'>
          <p className='text-sm font-body text-sky-300 m-0'>2021</p>

          <div className='flex flex-col text-left p-5 mt-3 rounded-xl '>
            <h4>Social Media Strategy for Business | Pitman Training</h4>
            <p>
              I gained valuable insights into the benefits of social media,
              developing a strategic approach, identifying target audiences,
              exploring different channels, creating engaging content, managing
              resources effectively, measuring ROI, and developing an impactful
              social media strategy.
            </p>
          </div>
        </div>
      </div>

      <div className='flex gap-4'>
        <div className='flex flex-col items-center'>
          <div className='rounded-full w-6 h-6 bg-sky-300'></div>
          <div className='h-full w-1 bg-sky-300'></div>
        </div>
        <div className='prose prose-invert pb-14'>
          <p className='text-sm font-body text-sky-300 m-0'>2018</p>

          <div className='flex flex-col text-left p-5 mt-3 rounded-xl '>
            <h4>Excel Expert | Pitman Training</h4>
            <p>
              Completing the Excel Expert course enhanced my proficiency in
              Excel. I acquired advanced skills in data analysis, formulas,
              functions, pivot tables, macros, and data visualization. This
              expertise enables me to efficiently manipulate and interpret data,
              improving productivity and decision-making
            </p>
          </div>
        </div>
      </div>

      <div className='flex gap-4'>
        <div className='flex flex-col items-center'>
          <div className='rounded-full w-6 h-6 bg-sky-300'></div>
          <div className='h-full w-1 bg-sky-300'></div>
        </div>
        <div className='prose prose-invert pb-14'>
          <p className='text-sm font-body text-sky-300 m-0'>2010</p>

          <div className='flex flex-col text-left p-5 mt-3 rounded-xl '>
            <h4>FETAC Level 7 Sound Engineering | Pulse College</h4>
            <p>
              I attained FETAC Level 7 certification in Sound Engineering,
              equipping me with comprehensive knowledge and practical skills in
              audio recording, mixing, editing, and production techniques. This
              qualification enables me to deliver high-quality sound experiences
              across various media platforms.
            </p>
          </div>
        </div>
      </div>

      <div className='flex gap-4'>
        <div className='flex flex-col items-center'>
          <div className='rounded-full w-6 h-6 bg-sky-300'></div>
        </div>
        <div className='prose prose-invert pb-14'>
          <p className='text-sm font-body text-sky-300 m-0'>2008</p>

          <div className='flex flex-col text-left p-5 mt-3 rounded-xl '>
            <h4>Leaving Certificate | Beneavin College</h4>
            <p>
              This qualification demonstrates a broad range of academic
              knowledge and skills acquired in various subjects, preparing me
              for higher education or professional endeavors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
