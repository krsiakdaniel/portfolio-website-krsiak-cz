import {
  iconsSkillsProjectsWorkGroupon,
  iconsSkillsProjectsWorkKomercniBanka,
  iconsSkillsProjectsWorkKooperativa,
  iconsSkillsProjectsWorkMoravia,
  iconsSkillsProjectsWorkSmartsuppDashboard,
  iconsSkillsProjectsWorkSmartsuppHelp,
  iconsSkillsProjectsWorkSmartsuppWeb,
} from '@/lib/data/pages/projects/work/projects-overview/skillsProjectsWork'

import { getSkillsIcons } from '@/lib/utils/helpers/skills/getSkillsIcons'
import { SkillIconEnum } from '@/lib/utils/typeDefinitions/enums'

describe('iconsSkillsProjectsWork', () => {
  it('should return the correct icons for Smartsupp Dashboard project', () => {
    const expectedIcons = getSkillsIcons([
      SkillIconEnum.TypeScript,
      SkillIconEnum.React,
      SkillIconEnum.Redux,
      SkillIconEnum.Chakra,
      SkillIconEnum.Cypress,
      SkillIconEnum.XD,
    ])
    expect(iconsSkillsProjectsWorkSmartsuppDashboard).toEqual(expectedIcons)
  })

  it('should return the correct icons for Kooperativa project', () => {
    const expectedIcons = getSkillsIcons([
      SkillIconEnum.TypeScript,
      SkillIconEnum.React,
      SkillIconEnum.Redux,
      SkillIconEnum.Tailwind,
      SkillIconEnum.Figma,
      SkillIconEnum.Storybook,
    ])
    expect(iconsSkillsProjectsWorkKooperativa).toEqual(expectedIcons)
  })

  it('should return the correct icons for Komercni Banka project', () => {
    const expectedIcons = getSkillsIcons([
      SkillIconEnum.TypeScript,
      SkillIconEnum.React,
      SkillIconEnum.Tailwind,
      SkillIconEnum.Figma,
    ])
    expect(iconsSkillsProjectsWorkKomercniBanka).toEqual(expectedIcons)
  })

  it('should return the correct icons for Smartsupp Web project', () => {
    const expectedIcons = getSkillsIcons([
      SkillIconEnum.JavaScript,
      SkillIconEnum.PHP,
      SkillIconEnum.Scss,
      SkillIconEnum.Cypress,
      SkillIconEnum.XD,
    ])
    expect(iconsSkillsProjectsWorkSmartsuppWeb).toEqual(expectedIcons)
  })

  it('should return the correct icons for Smartsupp Help project', () => {
    const expectedIcons = getSkillsIcons([SkillIconEnum.JavaScript, SkillIconEnum.PHP, SkillIconEnum.WordPress])
    expect(iconsSkillsProjectsWorkSmartsuppHelp).toEqual(expectedIcons)
  })

  it('should return the correct icons for Groupon project', () => {
    const expectedIcons = getSkillsIcons([
      SkillIconEnum.TypeScript,
      SkillIconEnum.React,
      SkillIconEnum.Next,
      SkillIconEnum.Playwright,
      SkillIconEnum.Figma,
      SkillIconEnum.Storybook,
    ])
    expect(iconsSkillsProjectsWorkGroupon).toEqual(expectedIcons)
  })

  it('should return the correct icons for Moravia project', () => {
    const expectedIcons = getSkillsIcons([SkillIconEnum.HTML, SkillIconEnum.CSS, SkillIconEnum.JavaScript])
    expect(iconsSkillsProjectsWorkMoravia).toEqual(expectedIcons)
  })
})
