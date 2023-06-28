"use client";

import React, { useState } from "react";
import { TbArrowDown, TbArrowUp } from "react-icons/tb";

export default function WorkTimeline(): JSX.Element {
  const [sectionVisibility, setSectionVisibility] = useState({});

  const handleToggle = (sectionId): void => {
    setSectionVisibility((prevState) => ({
      ...prevState,
      [sectionId]: !prevState[sectionId],
    }));
  };

  return (
    <div className='p-8 rounded-b-xl flex flex-col'>
      <div className='flex gap-4'>
        <div className='flex flex-col items-center'>
          <div className='rounded-full w-6 h-6 bg-emerald-300'></div>
          <div className='h-full w-1 bg-emerald-300'></div>
        </div>
        <div className='prose prose-invert pb-14'>
          <p className='text-sm font-body text-emerald-300 m-0'>
            2021 - present
          </p>

          <button
            onClick={(): void => handleToggle("section1")}
            className='flex flex-col text-left bg-gradient-to-l from-neutral-900 to-black p-5 mt-3 rounded-xl hover:ring-2 hover:ring-gray-500 '
          >
            <h4>IPL Group | eCommerce Manager</h4>
            <p>
              I am responsible for overseeing online sales, managing digital
              marketing campaigns, optimising website performance, and enhancing
              the overall customer experience.
            </p>
            {sectionVisibility["section1"] && (
              <ul className='p-5'>
                <li>
                  In my current role, I am the driving force behind our
                  eCommerce strategy, leading the way in developing and
                  implementing captivating social media and digital marketing
                  campaigns. These efforts have translated into a remarkable 20%
                  increase in revenue, proving the power of effective online
                  strategies.
                </li>
                <li>
                  I take great pride in my ability to create compelling content
                  that resonates with our target audience. Whether it&apos;s
                  crafting engaging website copy, captivating email newsletters,
                  or thought-provoking social media posts, my efforts have
                  contributed to a significant 30% surge in website traffic.
                  It&apos;s incredibly rewarding to witness the impact of
                  persuasive storytelling on audience engagement and brand
                  visibility.
                </li>
                <li>
                  One aspect I particularly enjoy is designing eye-catching
                  graphics and visual assets that breathe life into our product
                  listings, email campaigns, and social media presence. By
                  meticulously curating the brand&apos;s aesthetic, I have
                  successfully cultivated a sense of authenticity and charm,
                  resulting in increased engagement and a growing community of
                  loyal followers.
                </li>
                <li>
                  Collaboration lies at the heart of my approach. Working
                  closely with cross-functional teams, including IT, customer
                  service, and marketing, I ensure that every customer
                  interaction is seamless and memorable. By aligning our
                  efforts, we create a cohesive brand experience that fosters
                  trust and leaves a lasting impression.
                </li>
                <li>
                  To optimise our website&apos;s user experience and drive
                  conversions, I utilise various CMS platforms and apply my
                  proficiency in coding languages such as HTML, CSS, and
                  JavaScript. By delving into the technical aspects, I ensure
                  that our online presence remains user-friendly, visually
                  appealing, and ultimately, results-driven.
                </li>
              </ul>
            )}
            <span className='underline gap-2 flex items-center justify-self-end'>
              {sectionVisibility["section1"] ? "close" : "expand"}
              {sectionVisibility["section1"] ? <TbArrowUp /> : <TbArrowDown />}
            </span>
          </button>
        </div>
      </div>

      <div className='flex gap-4'>
        <div className='flex flex-col items-center'>
          <div className='rounded-full w-6 h-6 bg-emerald-300'></div>
          <div className='h-full w-1 bg-emerald-300'></div>
        </div>
        <div className='prose prose-invert pb-14'>
          <p className='text-sm font-body text-emerald-300 m-0'>2019 - 2021</p>
          <button
            onClick={(): void => handleToggle("section2")}
            className='flex flex-col text-left bg-gradient-to-l from-neutral-900 to-black p-5 mt-3 rounded-xl hover:ring-2 hover:ring-gray-500 '
          >
            <h4>Toolfast | Brand Manager</h4>
            <p>
              As a Brand Manager, I successfully launched new products through
              extensive research, implemented effective marketing strategies,
              managed online sales and customer engagement, led a sales team,
              analysed market trends, and collaborated with cross-functional
              teams for project success.
            </p>
            {sectionVisibility["section2"] && (
              <ul className='p-5'>
                <li>
                  Successfully brought a new product to market by conducting
                  extensive product and market research, leading procurement
                  efforts, and establishing a robust supply chain network to
                  ensure timely delivery of inventory.
                </li>
                <li>
                  Developed a comprehensive marketing strategy to raise brand
                  awareness and drive sales, including creating marketing
                  collateral, managing social media and email campaigns, and
                  optimising website content.
                </li>
                <li>
                  Utilised eCommerce platforms to manage online sales and track
                  customer engagement, resulting in a 25% increase in online
                  revenue.
                </li>
                <li>
                  Effectively managed a sales team to ensure product knowledge,
                  customer service, and sales targets were met.
                </li>
                <li>
                  Conducted regular market analysis to stay ahead of industry
                  trends and adjusted strategies as needed, resulting in
                  continued growth and profitability for the product line.
                </li>
                <li>
                  Collaborated with cross-functional teams, including R&D,
                  finance, and operations, to ensure alignment and successful
                  execution of project goals.
                </li>
              </ul>
            )}
            <span className='underline gap-2 flex items-center justify-self-end'>
              {sectionVisibility["section2"] ? "close" : "expand"}
              {sectionVisibility["section2"] ? <TbArrowUp /> : <TbArrowDown />}
            </span>
          </button>
        </div>
      </div>

      <div className='flex gap-4'>
        <div className='flex flex-col items-center'>
          <div className='rounded-full w-6 h-6 bg-emerald-300'></div>
          <div className='h-full w-1 bg-emerald-300'></div>
        </div>
        <div className='prose prose-invert pb-14'>
          <p className='text-sm font-body text-emerald-300 m-0'>2015 - 2019</p>
          <button
            onClick={(): void => handleToggle("section3")}
            className='flex flex-col text-left bg-gradient-to-l from-neutral-900 to-black p-5 mt-3 rounded-xl hover:ring-2 hover:ring-gray-500 '
          >
            <h4>Soudal | Technical Field Sales</h4>
            <p>
              Successfully sold adhesives, sealants, and PU foams, achieving
              sales targets and driving revenue growth. Developed customer
              relationships, provided technical support, and managed sales
              pipeline to ensure customer satisfaction and effective sales
              management.
            </p>
            {sectionVisibility["section3"] && (
              <ul className='p-5'>
                <li>
                  Consistently achieved sales targets and drove revenue growth
                  by selling adhesives, sealants, and PU foams in the assigned
                  territory.
                </li>
                <li>
                  Developed and maintained strong customer relationships, while
                  actively prospecting and securing new business opportunities.
                </li>
                <li>
                  Provided technical support, conducted product demonstrations,
                  and offered customised solutions to meet customer needs.
                </li>
                <li>
                  Managed sales pipeline, tracked sales activity, and reported
                  progress to management.
                </li>
              </ul>
            )}
            <span className='underline gap-2 flex items-center justify-self-end'>
              {sectionVisibility["section3"] ? "close" : "expand"}
              {sectionVisibility["section3"] ? <TbArrowUp /> : <TbArrowDown />}
            </span>
          </button>
        </div>
      </div>

      <div className='flex gap-4'>
        <div className='flex flex-col items-center'>
          <div className='rounded-full w-6 h-6 bg-emerald-300'></div>
          <div className='h-full w-1 bg-emerald-300'></div>
        </div>
        <div className='prose prose-invert pb-14'>
          <p className='text-sm font-body text-emerald-300 m-0'>2015 - 2015</p>
          <button
            onClick={(): void => handleToggle("section4")}
            className='flex flex-col text-left bg-gradient-to-l from-neutral-900 to-black p-5 mt-3 rounded-xl hover:ring-2 hover:ring-gray-500 '
          >
            <h4>Three | B2B Sales Rep</h4>
            <p>
              As a B2C Sales Representative at Three Ireland, I successfully
              engaged with customers, understood their needs, and offered
              tailored solutions. I consistently achieved sales targets by
              building strong relationships, providing exceptional customer
              service, and effectively communicating the value of our products
              and services.
            </p>
            {sectionVisibility["section4"] && (
              <ul className='p-5'>
                <li>
                  Engaged with businesses to identify their mobile phone and
                  telecommunication needs.
                </li>
                <li>
                  Provided customised solutions for mobile phone plans,
                  services, and devices to meet the specific requirements of
                  businesses.
                </li>
                <li>
                  Achieved sales targets by building strong relationships with
                  B2B clients, offering exceptional customer service, and
                  effectively communicating the value of our mobile phone and
                  telecoms solutions for businesses.
                </li>
              </ul>
            )}
            <span className='underline gap-2 flex items-center justify-self-end'>
              {sectionVisibility["section4"] ? "close" : "expand"}
              {sectionVisibility["section4"] ? <TbArrowUp /> : <TbArrowDown />}
            </span>
          </button>
        </div>
      </div>
      <div className='flex gap-4'>
        <div className='flex flex-col items-center'>
          <div className='rounded-full w-6 h-6 bg-emerald-300'></div>
        </div>
        <div className='prose prose-invert pb-14'>
          <p className='text-sm font-body text-emerald-300 m-0'>2013 - 2015</p>
          <button
            onClick={(): void => handleToggle("section5")}
            className='flex flex-col text-left bg-gradient-to-l from-neutral-900 to-black p-5 mt-3 rounded-xl hover:ring-2 hover:ring-gray-500 '
          >
            <h4>Eir | B2C Sales Rep</h4>
            <p>
              As a Telesales Representative at EIR, I excelled in cold-calling,
              profiling customer needs, and exceeding sales targets. I built
              rapport, handled objections, and maximized productivity through
              cross-selling, offering comprehensive solutions to customers.
            </p>
            {sectionVisibility["section5"] && (
              <ul className='p-5'>
                <li>
                  Honed cold-calling skills to engage potential customers,
                  understand their needs, and present tailored packages.
                </li>
                <li>
                  Developed rapport with clients, handled objections
                  effectively, and consistently exceeded sales targets.
                </li>
                <li>
                  Maximised productivity through cross-selling related products
                  and extras, demonstrating industry knowledge and commitment to
                  comprehensive customer solutions.
                </li>
              </ul>
            )}
            <span className='underline gap-2 flex items-center justify-self-end'>
              {sectionVisibility["section5"] ? "close" : "expand"}
              {sectionVisibility["section5"] ? <TbArrowUp /> : <TbArrowDown />}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
