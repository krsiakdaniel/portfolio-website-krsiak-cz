import { skillIcons } from '@/lib/data/skill-icons/skillIcons'

import { getSkillsIcons } from '@/lib/utils/helpers/skills/getSkillsIcons'
import { SkillIconEnum } from '@/lib/utils/typeDefinitions/enums'
import { SkillIconType } from '@/lib/utils/typeDefinitions/types'

describe('getSkillsIcons', () => {
  const expectedKeys: SkillIconType[] = [
    SkillIconEnum.Chakra,
    SkillIconEnum.CSS,
    SkillIconEnum.Cypress,
    SkillIconEnum.Figma,
    SkillIconEnum.GithubActions,
    SkillIconEnum.Graphql,
    SkillIconEnum.HTML,
    SkillIconEnum.Jest,
    SkillIconEnum.JavaScript,
    SkillIconEnum.Netlify,
    SkillIconEnum.Next,
    SkillIconEnum.PHP,
    SkillIconEnum.Playwright,
    SkillIconEnum.React,
    SkillIconEnum.Redux,
    SkillIconEnum.Scss,
    SkillIconEnum.Storybook,
    SkillIconEnum.Sketch,
    SkillIconEnum.Tailwind,
    SkillIconEnum.TypeScript,
    SkillIconEnum.WordPress,
    SkillIconEnum.XD,
  ]

  it('skillIcons should contain all the expected keys', () => {
    expectedKeys.forEach((key) => {
      expect(skillIcons).toHaveProperty(key)
    })
  })

  it('getSkillsIcons should return an array of icons with the correct name and path', () => {
    const skills: SkillIconType[] = [
      SkillIconEnum.JavaScript,
      SkillIconEnum.TypeScript,
      SkillIconEnum.React,
      SkillIconEnum.Next,
      SkillIconEnum.Redux,
      SkillIconEnum.Tailwind,
    ]
    const results = getSkillsIcons(skills)

    results.forEach((resultIcon, index) => {
      const skill = skills[index]

      expect(resultIcon.name).toBe(skill)
      expect(resultIcon.path).toBe(skillIcons[skill])
    })
  })
})
