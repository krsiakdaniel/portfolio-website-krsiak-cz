import { generateIconsSkills, skillIcons } from '@/utils/generateIconsSkills'

describe('generateIconsSkills', () => {
  const expectedKeys = [
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
    const skills = ['chakra', 'css', 'cypress']
    const result = generateIconsSkills(skills)

    result.forEach((icon, index) => {
      expect(icon.name).toBe(skills[index])
      expect(icon.path).toBe(skillIcons[skills[index]])
    })
  })
})
