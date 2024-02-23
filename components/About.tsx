import React from 'react'
import Image from 'next/image'
import krsiak from '../public/images/krsiak.avif'

const About = () => {
  const experience = [
    { count: '10', label: 'FRONT END EXPERIENCE' },
    { count: '4', label: 'REACT DEVELOPER' },
    { count: '3', label: 'QA TEAM LEADER' },
  ]
  return (
    <div id="about">
      <div className="container mx-auto">
        <div className="pb-20">
          <div className="flex justify-center relative pb-1 pt-5">
            <span className="absolute block h-px bg-white bottom-1/2 left-0 right-0 bg-skills-line"></span>
            <div className="bg-white px-6 py-3 relative">
              <p className="text-body-sm font-semibold tracking-2 text-neutral-500 uppercase">About Me</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-12 items-start pt-5">
            <div className="lg:col-span-5 flex flex-row items-center gap-8">
              <div className="flex flex-col xl:pr-8">
                <h2 className="md:text-display-lg text-display-md font-semibold md:pb-6 pb-4 text-primary-600 uppercase">
                  About
                </h2>
                <h3 className="text-display-xs font-semibold">React Developer</h3>
                <p className="text-body-md font-normal text-neutral-700 pb-4">
                  I create user-friendly and responsive web applications. I have worked with JavaScript, TypeScript,
                  React, and Redux, as well as other technologies such as Figma, and Tailwind CSS. I have a strong
                  background in UI design, functional components, and code quality.
                </p>
                <h3 className="text-display-xs font-semibold">QA Team Leader</h3>
                <p className="text-body-md font-normal text-neutral-700 pb-4">
                  I have also led a QA automation team, setting up Playwright for E2E tests, writing test scripts in
                  JavaScript and TypeScript, and coordinating unit and integration tests.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7 lg:grid lg:grid-cols-7 flex sm:flex-row flex-col items-start md:gap-8 gap-12">
              <div className="lg:col-span-4 flex">
                <Image
                  src={krsiak}
                  className="rounded-lg border border-neutral-300"
                  alt="Daniel Kršiak"
                  placeholder="blur"
                  style={{
                    width: '385px',
                    height: 'auto',
                  }}
                />
              </div>
              <div className="lg:col-span-3 flex md:self-auto self-stretch grow flex-col gap-6 sm:gap-8 xl:gap-12 xl:pl-8">
                {experience.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col self-stretch gap-2 pb-4 border-b border-solid border-neutral-300 last:border-none last:pb-0"
                  >
                    <p className="md:text-display-lg text-display-md font-semibold">
                      <span className="text-primary-600">{item.count}</span> years
                    </p>
                    <p className="text-body-sm font-semibold tracking-2 text-neutral-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
