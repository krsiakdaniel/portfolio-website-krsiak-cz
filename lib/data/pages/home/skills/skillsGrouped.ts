import { getSkillsIcons } from '@/lib/utils/helpers/skills/getSkillsIcons'
import { SkillIconEnum } from '@/lib/utils/typeDefinitions/enums'
import { Icon } from '@/lib/utils/typeDefinitions/interfaces'

export const iconsWebDesign: Icon[] = getSkillsIcons([
  SkillIconEnum.HTML,
  SkillIconEnum.CSS,
  SkillIconEnum.Scss,
  SkillIconEnum.Tailwind,
])

export const iconsWebDevelopment: Icon[] = getSkillsIcons([
  SkillIconEnum.JavaScript,
  SkillIconEnum.TypeScript,
  SkillIconEnum.React,
  SkillIconEnum.Next,
])

export const iconsWebDevelopmentWithQA: Icon[] = getSkillsIcons([
  SkillIconEnum.Redux,
  SkillIconEnum.Graphql,
  SkillIconEnum.Jest,
  SkillIconEnum.Playwright,
])

export const iconsDesignTools: Icon[] = getSkillsIcons([
  SkillIconEnum.Sketch,
  SkillIconEnum.XD,
  SkillIconEnum.Figma,
  SkillIconEnum.Storybook,
])
