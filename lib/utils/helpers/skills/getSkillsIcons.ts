import { skillIcons } from '@/data/shared/skill-icons/skillIcons'
import { Icon } from '@/lib/types/interfaces'
import { SkillIconType } from '@/lib/types/types'

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
