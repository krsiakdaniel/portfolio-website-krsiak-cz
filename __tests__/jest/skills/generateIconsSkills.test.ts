import { getSkillsIcons, skillIcons, SkillKeys } from '@/lib/utils/helpers/skills/getSkillsIcons'

describe('getSkillsIcons', () => {
  const expectedKeys: SkillKeys[] = [
    'chakra',
    'css',
    'cypress',
    'figma',
    'githubActions',
    'graphql',
    'html',
    'jest',
    'javascript',
    'netlify',
    'next',
    'php',
    'playwright',
    'react',
    'redux',
    'scss',
    'storybook',
    'sketch',
    'tailwind',
    'typescript',
    'wordpress',
    'xd',
  ]

  it('skillIcons should contain all the expected keys', () => {
    expectedKeys.forEach((key) => {
      expect(skillIcons).toHaveProperty(key)
    })
  })

  it('getSkillsIcons should return an array of icons with the correct name and path', () => {
    const skills: SkillKeys[] = ['javascript', 'typescript', 'react', 'next', 'redux', 'tailwind']
    const results = getSkillsIcons(skills)

    results.forEach((resultIcon, index) => {
      const skill = skills[index]

      expect(resultIcon.name).toBe(skill)
      expect(resultIcon.path).toBe(skillIcons[skill])
    })
  })
})
