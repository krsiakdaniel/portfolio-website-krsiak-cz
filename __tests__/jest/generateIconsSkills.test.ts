import { getSkillsIcons, skillIcons, SkillKeys } from '@/utils/helpers/getSkillsIcons'

describe('getSkillsIcons', () => {
  const expectedKeys: string[] = [
    'chakra',
    'css',
    'cypress',
    'figma',
    'githubActions',
    'html',
    'jest',
    'js',
    'netlify',
    'next',
    'nuxt',
    'php',
    'playwright',
    'react',
    'redux',
    'scss',
    'storybook',
    'tailwind',
    'ts',
    'wordpress',
    'xd',
  ]

  it('skillIcons should contain all the expected keys', () => {
    expectedKeys.forEach((key) => {
      expect(skillIcons).toHaveProperty(key)
    })
  })

  it('getSkillsIcons should return an array of icons with the correct name and path', () => {
    const skills: SkillKeys[] = ['chakra', 'css', 'cypress']
    const results = getSkillsIcons(skills)

    results.forEach((resultIcon, index) => {
      expect(resultIcon.name).toBe(skills[index])
      expect(resultIcon.path).toBe(skillIcons[skills[index]])
    })
  })
})
