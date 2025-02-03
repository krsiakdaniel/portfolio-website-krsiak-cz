import { TEXT } from '@/localization/english'

/**
 * Returns the appropriate text for the given number of years.
 *
 * @param {number} years - The number of years.
 * @returns {string} - The text 'year' if the number of years is 1, otherwise 'years'.
 */
export const getYearsText = (years: number): string => {
  return `${years === 1 ? TEXT.year : TEXT.years}`
}
