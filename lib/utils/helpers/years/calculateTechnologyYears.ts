import { TechnologyKey } from '../../typeDefinitions/types'
import { TECHNOLOGY_START_DATES } from './calculateTechnologyYears.constants'
import { getCurrentYear } from './getCurrentYear'

/**
 * Calculates years of experience for a specific technology based on start date
 *
 * @param {TechnologyKey} technology - The technology to calculate years for
 * @returns {number} - Years of experience (minimum 1 year)
 */
export const calculateTechnologyYears = (technology: TechnologyKey): number => {
  const currentYear = getCurrentYear()
  const startYear = TECHNOLOGY_START_DATES[technology]
  const yearsExperience = currentYear - startYear

  // Ensure minimum of 1 year
  return Math.max(yearsExperience, 1)
}

/**
 * Gets all calculated technology years
 *
 * @returns {Record<TechnologyKey, number>} - Object with all technology years
 */
export const getAllTechnologyYears = (): Record<TechnologyKey, number> => {
  const technologies = Object.keys(TECHNOLOGY_START_DATES) as TechnologyKey[]

  return technologies.reduce(
    (acc, tech) => {
      acc[tech] = calculateTechnologyYears(tech)
      return acc
    },
    {} as Record<TechnologyKey, number>,
  )
}
