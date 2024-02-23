import React from 'react'

import Image from 'next/image'

import html from '../public/icons/svg/html.svg'
import css from '../public/icons/svg/css.svg'
import scss from '../public/icons/svg/scss.svg'
import tailwind from '../public/icons/svg/tailwind.svg'
import js from '../public/icons/svg/js.svg'
import ts from '../public/icons/svg/ts.svg'
import react from '../public/icons/svg/react.svg'
import next from '../public/icons/svg/next.svg'
import figma from '../public/icons/svg/figma.svg'
import redux from '../public/icons/svg/redux.svg'

interface Icon {
  name: string
  path: string
}

const iconsSection1: Icon[] = [
  {
    name: 'html',
    path: html,
  },
  {
    name: 'css',
    path: css,
  },
  {
    name: 'scss',
    path: scss,
  },
  {
    name: 'tailwind',
    path: tailwind,
  },
]

const iconsSection2: Icon[] = [
  {
    name: 'js',
    path: js,
  },
  {
    name: 'ts',
    path: ts,
  },
  {
    name: 'react',
    path: react,
  },
  {
    name: 'next',
    path: next,
  },
]

const Skills = () => {
  return (
    <div id="skills">
      <div className="container mx-auto">
        <div className="md:pb-10 pb-5">
          <div className="flex justify-center relative pb-1 pt-5">
            <span className="absolute block h-px bg-white bottom-1/2 left-0 right-0 bg-skills-line"></span>
            <div className="bg-white px-6 pb-3 pt-0 relative">
              <p className="text-body-sm font-semibold tracking-2 text-neutral-500 uppercase">My Skills</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center pt-5">
            <div className="flex justify-center mb-4 sm:mb-0">
              {iconsSection1.map((item) => {
                return <Image key={item.name} src={item.path} alt={item.name} className="mr-2" width={48} height={48} />
              })}
            </div>
            <div className="flex justify-center mb-4 sm:mb-0">
              {iconsSection2.map((item) => {
                return <Image key={item.name} src={item.path} alt={item.name} className="mr-2" width={48} height={48} />
              })}
            </div>
            <div className="flex justify-center">
              <Image src={redux} alt="redux" width={48} height={48} className="mr-2" />
              <Image src={figma} alt="figma" width={48} height={48} />
            </div>
          </div>
          <div>
            <p className="text-body-sm italic text-neutral-500 mt-4 text-center">
              HTML, CSS, Sass, Tailwind CSS, JavaScript, TypeScript, React, Next.js, Redux, Figma
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
