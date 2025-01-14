import { Job } from '@/lib/utils/interfaces/interfaces'

type GetYearsMonthsType = Pick<Job, 'duration' | 'unit'>

/**
 * Formats the duration and unit of a job experience into a string.
 *
 * @param {GetYearsMonthsType} param - An object containing the duration and unit of the job experience.
 * @param {number} param.duration - The duration of the job experience.
 * @param {'year' | 'month'} param.unit - The unit of the duration, either 'year' or 'month'.
 * @returns {string} A formatted string representing the job experience duration.
 */
export const getYearsMonths = ({ duration, unit }: GetYearsMonthsType): string => {
  if (duration === 1) {
    return unit === 'year' ? 'year' : 'month'
  }
  return unit === 'year' ? 'years' : 'months'
}
