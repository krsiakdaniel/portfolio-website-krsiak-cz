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

export const iconsSection1: Icon[] = [
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

export const iconsSection2: Icon[] = [
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

export const iconsSection3: Icon[] = [
  {
    name: 'redux',
    path: redux,
  },
  {
    name: 'figma',
    path: figma,
  },
]
