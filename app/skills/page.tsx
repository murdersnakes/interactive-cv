import React from "react";

import {
  TbBrandAdobe,
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandReact,
  TbBrandStripe,
  TbBrandSupabase,
  TbBrandTypescript,
  TbBusinessplan,
  TbCamera,
  TbChartArea,
  TbDatabaseSearch,
  TbDeviceLaptop,
  TbMoneybag,
  TbMovie,
  TbMusic,
  TbPresentation,
} from "react-icons/tb";

const businessSkills = [
  {
    name: "Sales",
    icon: TbChartArea,
    value: 85,
  },
  {
    name: "Marketing",
    icon: TbDeviceLaptop,
    value: 80,
  },
  {
    name: "Purchasing",
    icon: TbMoneybag,
    value: 60,
  },
  {
    name: "Data Analysis",
    icon: TbDatabaseSearch,
    value: 70,
  },
  {
    name: "Presentation",
    icon: TbPresentation,
    value: 90,
  },
  {
    name: "Project Management",
    icon: TbBusinessplan,
    value: 65,
  },
];

const techSkills = [
  {
    name: "HTML",
    icon: TbBrandHtml5,
    value: 75,
  },
  {
    name: "CSS, SCSS, Tailwind",
    icon: TbBrandCss3,
    value: 60,
  },
  {
    name: "JS, TS",
    icon: TbBrandTypescript,
    value: 65,
  },
  {
    name: "React, NextJs",
    icon: TbBrandReact,
    value: 80,
  },
  {
    name: "Supabase, Firebase",
    icon: TbBrandSupabase,
    value: 55,
  },
  {
    name: "WC, Shopify, BigCommerce",
    icon: TbBrandStripe,
    value: 60,
  },
];

const creativeSkills = [
  {
    name: "Adobe Suite",
    icon: TbBrandAdobe,
    value: 85,
  },
  {
    name: "UI/UX Design",
    icon: TbBrandAdobe,
    value: 65,
  },
  {
    name: "Music Production",
    icon: TbMusic,
    value: 95,
  },
  {
    name: "Photography",
    icon: TbCamera,
    value: 65,
  },
  {
    name: "Videography",
    icon: TbMovie,
    value: 55,
  },
  {
    name: "3D Modeling",
    icon: TbMovie,
    value: 45,
  },
];

interface Skill {
  name: string;
  icon: any;
  value: number;
}

export default function page():JSX.Element {
  return (
    <div className='page'>
      <div className='place-self-center mt-56 mb-24 lg:m-0'>
        <div className='grid lg:grid-cols-3 gap-10'>
          <div className='bg-gradient-to-l from-neutral-900 to-black mt-3 p-10 rounded-xl'>
            <h2 className='font-head text-xl font-bold'>Business</h2>

            {businessSkills.map((skill: Skill): JSX.Element => {
              const icon = React.createElement(skill.icon);
              return (
                <div className='mt-4 flex items-center gap-2' key={skill.name}>
                  {icon}
                  <div>
                    <h3 className='font-body font-bold'>{skill.name}</h3>
                    <div
                      style={{ width: `${skill.value * 1.8}px` }}
                      className={`bg-amber-300 h-2 mt-2 rounded-xl`}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='bg-gradient-to-l from-neutral-900 to-black mt-3 rounded-xl p-10 '>
            <h2 className='font-head text-xl font-bold'>Coding</h2>
            {techSkills.map((skill: Skill): JSX.Element => {
              const icon = React.createElement(skill.icon);
              return (
                <div className='mt-4 flex items-center gap-2' key={skill.name}>
                  {icon}
                  <div>
                    <h3 className='font-body font-bold'>{skill.name}</h3>
                    <div
                      style={{ width: `${skill.value * 1.8}px` }}
                      className={`bg-amber-300 h-2 mt-2 rounded-xl`}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='bg-gradient-to-l from-neutral-900 to-black mt-3 p-10 rounded-xl '>
            <h2 className='font-head text-xl font-bold'>Creativity</h2>
            {creativeSkills.map((skill: Skill): JSX.Element => {
              const icon = React.createElement(skill.icon);
              return (
                <div className='mt-4 flex items-center gap-2' key={skill.name}>
                  {icon}
                  <div>
                    <h3 className='font-body font-bold'>{skill.name}</h3>
                    <div
                      style={{ width: `${skill.value * 1.8}px` }}
                      className={`bg-amber-300 h-2 mt-2 rounded-xl`}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
