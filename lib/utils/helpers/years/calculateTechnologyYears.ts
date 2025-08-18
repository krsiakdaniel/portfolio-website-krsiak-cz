import { TechnologyKey } from '../../typeDefinitions/types'
import { getCurrentYear } from './getCurrentYear'

// Technology start dates for automatic years calculation
export const TECHNOLOGY_START_DATES = {
  javaScript: 2018,
  typeScript: 2019,
  react: 2019,
  playwright: 2022,
  next: 2023,
  tailwind: 2023,
} as const

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
