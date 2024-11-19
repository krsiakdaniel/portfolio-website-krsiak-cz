import chakra from '@/public/icons/svg/skills/chakra.svg'
import css from '@/public/icons/svg/skills/css.svg'
import cypress from '@/public/icons/svg/skills/cypress.svg'
import figma from '@/public/icons/svg/skills/figma.svg'
import githubActions from '@/public/icons/svg/skills/github-actions.svg'
import graphql from '@/public/icons/svg/skills/graphql.svg'
import html from '@/public/icons/svg/skills/html.svg'
import jest from '@/public/icons/svg/skills/jest.svg'
import js from '@/public/icons/svg/skills/js.svg'
import netlify from '@/public/icons/svg/skills/netlify.svg'
import next from '@/public/icons/svg/skills/next.svg'
import nuxt from '@/public/icons/svg/skills/nuxt.svg'
import php from '@/public/icons/svg/skills/php.svg'
import playwright from '@/public/icons/svg/skills/playwright.svg'
import react from '@/public/icons/svg/skills/react.svg'
import redux from '@/public/icons/svg/skills/redux.svg'
import scss from '@/public/icons/svg/skills/scss.svg'
import storybook from '@/public/icons/svg/skills/storybook.svg'
import tailwind from '@/public/icons/svg/skills/tailwind.svg'
import ts from '@/public/icons/svg/skills/ts.svg'
import wordpress from '@/public/icons/svg/skills/wordpress.svg'
import xd from '@/public/icons/svg/skills/xd.svg'

import { Icon } from '@/utils/types'

type SkillKeys =
  | 'chakra'
  | 'css'
  | 'cypress'
  | 'figma'
  | 'githubActions'
  | 'graphql'
  | 'html'
  | 'jest'
  | 'js'
  | 'netlify'
  | 'next'
  | 'nuxt'
  | 'php'
  | 'playwright'
  | 'react'
  | 'redux'
  | 'scss'
  | 'storybook'
  | 'tailwind'
  | 'ts'
  | 'wordpress'
  | 'xd'

export const skillIcons: Record<SkillKeys, string> = {
  chakra,
  css,
  cypress,
  figma,
  githubActions,
  graphql,
  html,
  jest,
  js,
  netlify,
  next,
  nuxt,
  php,
  playwright,
  react,
  redux,
  scss,
  storybook,
  tailwind,
  ts,
  wordpress,
  xd,
}

export function generateIconsSkills(skills: SkillKeys[]): Icon[] {
  return skills.map((skill) => ({
    name: skill,
    path: skillIcons[skill],
  }))
}
