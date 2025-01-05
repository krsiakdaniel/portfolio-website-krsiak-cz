import {
  iconsSkillsProjectsWorkGroupon,
  iconsSkillsProjectsWorkKomercniBanka,
  iconsSkillsProjectsWorkKooperativa,
  iconsSkillsProjectsWorkMoravia,
  iconsSkillsProjectsWorkSmartsuppDashboard,
  iconsSkillsProjectsWorkSmartsuppHelp,
  iconsSkillsProjectsWorkSmartsuppWeb,
} from '@/lib/data/pages/projects/work/projects-overview/skillsProjectsWork'

import { getSkillsIcons } from '@/lib/utils/helpers/getSkillsIcons'

describe('iconsSkillsProjectsWork', () => {
  it('should return the correct icons for Smartsupp Dashboard project', () => {
    const expectedIcons = getSkillsIcons(['javascript', 'typescript', 'react', 'redux', 'chakra', 'cypress', 'xd'])
    expect(iconsSkillsProjectsWorkSmartsuppDashboard).toEqual(expectedIcons)
  })

  it('should return the correct icons for Kooperativa project', () => {
    const expectedIcons = getSkillsIcons([
      'javascript',
      'typescript',
      'react',
      'redux',
      'tailwind',
      'figma',
      'storybook',
    ])
    expect(iconsSkillsProjectsWorkKooperativa).toEqual(expectedIcons)
  })

  it('should return the correct icons for Komercni Banka project', () => {
    const expectedIcons = getSkillsIcons(['javascript', 'typescript', 'react', 'tailwind', 'figma'])
    expect(iconsSkillsProjectsWorkKomercniBanka).toEqual(expectedIcons)
  })

  it('should return the correct icons for Smartsupp Web project', () => {
    const expectedIcons = getSkillsIcons(['javascript', 'php', 'scss', 'cypress', 'xd'])
    expect(iconsSkillsProjectsWorkSmartsuppWeb).toEqual(expectedIcons)
  })

  it('should return the correct icons for Smartsupp Help project', () => {
    const expectedIcons = getSkillsIcons(['javascript', 'php', 'wordpress'])
    expect(iconsSkillsProjectsWorkSmartsuppHelp).toEqual(expectedIcons)
  })

  it('should return the correct icons for Groupon project', () => {
    const expectedIcons = getSkillsIcons([
      'javascript',
      'typescript',
      'react',
      'next',
      'playwright',
      'figma',
      'storybook',
    ])
    expect(iconsSkillsProjectsWorkGroupon).toEqual(expectedIcons)
  })

  it('should return the correct icons for Moravia project', () => {
    const expectedIcons = getSkillsIcons(['html', 'css', 'javascript'])
    expect(iconsSkillsProjectsWorkMoravia).toEqual(expectedIcons)
  })
})
