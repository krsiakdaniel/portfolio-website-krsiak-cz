import { generateIconsSkills, skillIcons, SkillKeys } from '@/utils/helpers/generateIconsSkills'

describe('generateIconsSkills', () => {
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

  it('generateIconsSkills should return an array of icons with the correct name and path', () => {
    const skills: SkillKeys[] = ['chakra', 'css', 'cypress']
    const results = generateIconsSkills(skills)

    results.forEach((resultIcon, index) => {
      expect(resultIcon.name).toBe(skills[index])
      expect(resultIcon.path).toBe(skillIcons[skills[index]])
    })
  })
})
