import React from "react";
import {
  TbBusinessplan,
  TbChartArea,
  TbDatabaseSearch,
  TbDeviceLaptop,
  TbMoneybag,
  TbPresentation,
} from "react-icons/tb";

const businessSkills = [
  {
    name: "Sales",
    icon: TbChartArea,
    value: 70,
  },
  {
    name: "Marketing",
    icon: TbPresentation,
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
    value: 80,
  },
  {
    name: "Project Management",
    icon: TbBusinessplan,
    value: 65,
  },
];

export default function page() {
  return (
    <div className='page'>
      <div className='place-self-center'>
        <div className='grid grid-cols-3 gap-10'>
          <div className='bg-black/70 p-16 rounded-xl'>
            <h2 className='font-head text-xl font-bold'>Business</h2>

            {businessSkills.map((skill) => {
                const icon = React.createElement(skill.icon)
              return (
                <div className='mt-4 flex items-center gap-2' key={skill.name}>
                    {icon}
                  <div>
                      <h3 className="font-body font-bold">{skill.name}</h3>
                      <div style={{ width: `${skill.value*1.8}px` }} className={ `bg-gray-100 h-1 rounded-xl` }></div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='bg-black/70 p-16 rounded-xl'></div>
          <div className='bg-black/70 p-16 rounded-xl'></div>
        </div>
      </div>
    </div>
  );
}
