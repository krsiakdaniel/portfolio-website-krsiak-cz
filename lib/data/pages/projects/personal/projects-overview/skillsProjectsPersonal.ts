import { getSkillsIcons } from '@/lib/utils/helpers/skills/getSkillsIcons'

import { SkillIconEnum } from '@/lib/types/enums'
import { Icon } from '@/lib/types/interfaces'

export const iconsSkillsProjectsPersonalKrsiak: Icon[] = getSkillsIcons([
  SkillIconEnum.TypeScript,
  SkillIconEnum.React,
  SkillIconEnum.Next,
  SkillIconEnum.Tailwind,
  SkillIconEnum.Jest,
  SkillIconEnum.Playwright,
  SkillIconEnum.GithubActions,
  SkillIconEnum.Netlify,
])

export const iconsSkillsProjectsPersonalKoreanEasy: Icon[] = getSkillsIcons([
  SkillIconEnum.TypeScript,
  SkillIconEnum.React,
  SkillIconEnum.Next,
  SkillIconEnum.Tailwind,
  SkillIconEnum.Zustand,
  SkillIconEnum.ShadcnUI,
  SkillIconEnum.Zod,
  SkillIconEnum.Playwright,
  SkillIconEnum.Vercel,
])
