import React, { useState } from "react";
import WorkTimeline from "./WorkTimeline";
import EducationTimeline from "./EducationTimeline";

export default function Timelines() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className='flex justify-around '>
        <button
          onClick={() => setActiveTab(0)}
          className={
            activeTab === 0
              ? "flex-1 bg-emerald-400 text-black rounded-r-full rounded-l-full text-xl font-bold font-head p-2 m-1 shadow-xl"
              : "flex-1 bg-transparent text-gray-300 rounded-r-full rounded-l-full ring-2 ring-inset ring-gray-300 rounded-xl text-xl font-bold font-head p-2 m-1 shadow-xl hover:bg-emerald-900"
          }
        >
          Work
        </button>
        <button
          onClick={() => setActiveTab(1)}
          className={
            activeTab === 1
              ? "flex-1 bg-sky-400 text-black rounded-r-full rounded-l-full text-xl font-bold font-head p-2 m-1 shadow-xl"
              : "flex-1 bg-transparent text-gray-300 rounded-r-full rounded-l-full ring-2 ring-inset ring-gray-300 rounded-xl text-xl font-bold font-head p-2 m-1 shadow-xl hover:bg-sky-900"
          }
        >
          Education
        </button>
      </div>
      {activeTab === 0 ? <WorkTimeline /> : <EducationTimeline />}
    </>
  );
}
