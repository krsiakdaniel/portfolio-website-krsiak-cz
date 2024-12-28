import { URL_PERSONAL_PROJECTS, URL_WORK_EXPERIENCE } from '@/lib/utils/constants/urls/pageUrls'

/**
 * Generates the URL for a specific work experience.
 *
 * @param {string} company - The company name.
 * @returns {string} - The generated URL for the work experience.
 */

export const getUrlWorkExperience = (company: string): string => {
  return `${URL_WORK_EXPERIENCE}/${company}`
}

/**
 * Generates the URL for a specific personal project.
 *
 * @param {string} project - The project name.
 * @returns {string} - The generated URL for the personal project.
 */

export const getUrlPersonalProject = (project: string): string => {
  return `${URL_PERSONAL_PROJECTS}/${project}`
}
