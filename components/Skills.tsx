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
              <Image src={html} alt="html" className="mr-2" width={48} height={48} />
              <Image src={css} alt="css" className="mr-2" width={48} height={48} />
              <Image src={scss} alt="scss" className="mr-2" width={48} height={48} />
              <Image src={tailwind} alt="tailwind" className="sm:mr-2" width={48} height={48} />
            </div>
            <div className="flex justify-center mb-4 sm:mb-0">
              <Image src={js} alt="js" className="mr-2" width={48} height={48} />
              <Image src={ts} alt="ts" className="mr-2" width={48} height={48} />
              <Image src={react} alt="react" className="mr-2" width={48} height={48} />
              <Image src={next} alt="next" className="sm:mr-2" width={48} height={48} />
            </div>
            <div className="flex justify-center">
              <Image src={figma} alt="figma" width={48} height={48} />
            </div>
          </div>
          <div>
            <p className="italic text-neutral-500 mt-4 text-center">
              HTML, CSS, Sass, Tailwind CSS, JavaScript, TypeScript, React, Next.js, Figma
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
