import { skillIcons } from '@/lib/data/skill-icons/skillIcons'

import { Icon } from '@/lib/utils/typeDefinitions/interfaces'
import { SkillIconType } from '@/lib/utils/typeDefinitions/types'

/**
 * Get relevant icons for the given skills.
 *
 * @param {SkillIconType[]} skills - The array of skill keys.
 * @returns {Icon[]} - The array of icons corresponding to the skill keys.
 */

export const getSkillsIcons = (skills: SkillIconType[] = []): Icon[] => {
  return skills.map((skill) => ({
    name: skill,
    path: skillIcons[skill],
  }))
}
