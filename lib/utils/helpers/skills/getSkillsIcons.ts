import { skillIcons } from '@/data/shared/skill-icons/skillIcons'

import { type SkillIconEnum } from '@/lib/types/enums'
import { type Icon } from '@/lib/types/interfaces'

/**
 * Get relevant icons for the given skills.
 *
 * @param {SkillIconEnum[]} skills - The array of skill keys.
 * @returns {Icon[]} - The array of icons corresponding to the skill keys.
 */

export const getSkillsIcons = (skills: SkillIconEnum[] = []): Icon[] => {
  return skills.map((skill) => ({
    name: skill,
    path: skillIcons[skill],
  }))
}
