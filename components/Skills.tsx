import Image from 'next/image'

import DividerWithText from '@/components/shared/DividerWithText'
import css from '@/public/icons/svg/css.svg'
import figma from '@/public/icons/svg/figma.svg'
import html from '@/public/icons/svg/html.svg'
import js from '@/public/icons/svg/js.svg'
import next from '@/public/icons/svg/next.svg'
import react from '@/public/icons/svg/react.svg'
import redux from '@/public/icons/svg/redux.svg'
import scss from '@/public/icons/svg/scss.svg'
import tailwind from '@/public/icons/svg/tailwind.svg'
import ts from '@/public/icons/svg/ts.svg'

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

const iconsSection3: Icon[] = [
  {
    name: 'redux',
    path: redux,
  },
  {
    name: 'figma',
    path: figma,
  },
]

const Skills = () => {
  return (
    <div id="skills" className="mt-20">
      <div className="container mx-auto">
        <div>
          <DividerWithText text="Skills" />
        </div>
        <div className="flex flex-col sm:flex-row justify-center">
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
            {iconsSection3.map((item) => {
              return <Image key={item.name} src={item.path} alt={item.name} className="mr-2" width={48} height={48} />
            })}
          </div>
        </div>
        <div>
          <p className="text-body-sm italic text-neutral-500 mt-4 text-center">
            HTML, CSS, Sass, Tailwind CSS, JavaScript, TypeScript, React, Next.js, Redux, Figma
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills
