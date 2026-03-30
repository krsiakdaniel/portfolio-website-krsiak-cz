import { iconsSkillsProjectsPersonalKrsiak } from '@/lib/data/pages/projects/personal/projects-overview/skillsProjectsPersonal'

import { getSkillsIcons } from '@/lib/utils/helpers/skills/getSkillsIcons'

import { SkillIconEnum } from '@/lib/types/enums'

describe('iconsSkillsProjectsPersonal', () => {
  it('should return the correct icons for Krsiak project', () => {
    const expectedIcons = getSkillsIcons([
      SkillIconEnum.TypeScript,
      SkillIconEnum.React,
      SkillIconEnum.Next,
      SkillIconEnum.Tailwind,
      SkillIconEnum.Jest,
      SkillIconEnum.Playwright,
      SkillIconEnum.GithubActions,
      SkillIconEnum.Netlify,
    ])
    expect(iconsSkillsProjectsPersonalKrsiak).toEqual(expectedIcons)
  })
})
