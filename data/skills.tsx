import { IconType } from "react-icons/lib";
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
  
  export const businessSkills = [
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
  
  export const techSkills = [
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
  
  export const creativeSkills = [
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
  
  export interface Skill {
    name: string;
    icon: IconType;
    value: number;
  }