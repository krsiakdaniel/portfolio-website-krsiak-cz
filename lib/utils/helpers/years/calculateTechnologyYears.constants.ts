import { type TechnologyKey } from './calculateTechnologyYears.types'

// Technology start dates for automatic years calculation
export const TECHNOLOGY_START_DATES = {
  javaScript: 2018,
  typeScript: 2019,
  react: 2019,
  playwright: 2022,
  next: 2023,
  tailwind: 2023,
} as const satisfies Record<TechnologyKey, number>
