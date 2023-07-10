"use client";

import WorkTimeline from "./WorkTimeline";

export default function page(): JSX.Element {
  return (
    <div className='page'>
      <div className='place-self-center max-w-2xl mt-56 mb-24 relative z-0'>
        <WorkTimeline />
      </div>
    </div>
  );
}
