import {
  iconsSkillsProjectsPersonalCryptomania,
  iconsSkillsProjectsPersonalKrsiak,
} from '@/lib/data/pages/projects/personal/projects-overview/skillsProjectsPersonal'

import { getSkillsIcons } from '@/lib/utils/helpers/skills/getSkillsIcons'

describe('iconsSkillsProjectsPersonal', () => {
  it('should return the correct icons for Krsiak project', () => {
    const expectedIcons = getSkillsIcons([
      'javascript',
      'typescript',
      'react',
      'next',
      'tailwind',
      'jest',
      'playwright',
      'githubActions',
      'netlify',
    ])
    expect(iconsSkillsProjectsPersonalKrsiak).toEqual(expectedIcons)
  })

  it('should return the correct icons for Cryptomania project', () => {
    const expectedIcons = getSkillsIcons(['javascript', 'typescript', 'react', 'chakra', 'netlify'])
    expect(iconsSkillsProjectsPersonalCryptomania).toEqual(expectedIcons)
  })
})
