"use client";

import React from "react";
import {
  Skill,
  businessSkills,
  creativeSkills,
  techSkills,
} from "../../data/skills";
import { motion } from "framer-motion";

export default function Skills(): JSX.Element {
  return (
    <div className='grid lg:grid-cols-3 gap-10'>
      <div className='p-6 rounded-xl'>
        <h2 className='font-head text-xl font-bold mb-2'>Business</h2>
        <ul>
          {businessSkills.map((skill: Skill): JSX.Element => {
            const icon = React.createElement(skill.icon);
            return (
              <li
                className='flex items-center gap-3 border-t border-white/10 py-4'
                key={skill.name}
              >
                {icon}
                <div>
                  <h3 className='font-body font-bold mb-1'>{skill.name}</h3>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.value * 1.8}px` }}
                    transition={{ duration: 1, easings: "easeOut", delay: 0 }}
                    className={`bg-amber-300 h-1 rounded-xl`}
                  />
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
              <li
                className='flex items-center gap-3 border-t border-white/10 py-4'
                key={skill.name}
              >
                {icon}
                <div>
                  <h3 className='font-body font-bold mb-1'>{skill.name}</h3>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.value * 1.8}px` }}
                    transition={{ duration: 1, easings: "easeOut", delay: 0.3 }}
                    className={`bg-amber-300 h-1 rounded-xl`}
                  />
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
              <li
                className='flex items-center gap-3 border-t border-white/10 py-4'
                key={skill.name}
              >
                {icon}
                <div>
                  <h3 className='font-body font-bold mb-1'>{skill.name}</h3>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.value * 1.8}px` }}
                    transition={{ duration: 1, easings: "easeOut", delay: 0.6 }}
                    className={`bg-amber-300 h-1 rounded-xl`}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
