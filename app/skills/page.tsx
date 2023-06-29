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
          <div className='p-6 rounded-xl'>
            <h2 className='font-head text-xl font-bold mb-2'>Business</h2>
            <ul>
              {businessSkills.map((skill: Skill): JSX.Element => {
                const icon = React.createElement(skill.icon);
                return (
                  <li className='flex items-center gap-3 border-t border-white/10 py-4' key={skill.name}>
                    {icon}
                    <div>
                      <h3 className='font-body font-bold'>{skill.name}</h3>
                      <div
                        style={{ width: `${skill.value * 1.8}px` }}
                        className={`bg-amber-300 h-1 rounded-xl`}
                      ></div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='rounded-xl p-6 '>
            <h2 className='font-head text-xl font-bold mb-2'>Coding</h2>
            <ul>
              {techSkills.map((skill: Skill): JSX.Element => {
                const icon = React.createElement(skill.icon);
                return (
                  <li className='flex items-center gap-3 border-t border-white/10 py-4' key={skill.name}>
                    {icon}
                    <div>
                      <h3 className='font-body font-bold'>{skill.name}</h3>
                      <div
                        style={{ width: `${skill.value * 1.9}px` }}
                        className={` bg-amber-300 h-1 rounded-xl`}
                      ></div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='p-6 rounded-xl '>
            <h2 className='font-head text-xl font-bold mb-2'>Creativity</h2>
            <ul>
              {creativeSkills.map((skill: Skill): JSX.Element => {
                const icon = React.createElement(skill.icon);
                return (
                  <li className='flex items-center gap-3 border-t border-white/10 py-4' key={skill.name}>
                    {icon}
                    <div>
                      <h3 className='font-body font-bold'>{skill.name}</h3>
                      <div
                        style={{ width: `${skill.value * 1.8}px` }}
                        className={`bg-amber-300 h-1 rounded-xl`}
                      ></div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
