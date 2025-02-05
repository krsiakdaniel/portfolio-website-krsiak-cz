import { PAGE_TOP_LEVEL_URLS } from '@/lib/utils/constants/urls/pageTopLevelUrls'

/**
 * Generates the URL for a specific work experience.
 *
 * @param {string} company - The company name.
 * @returns {string} - The generated URL for the work experience.
 */

export const getUrlWorkExperience = (company: string): string => {
  return `${PAGE_TOP_LEVEL_URLS.workExperience}/${company}`
}

/**
 * Generates the URL for a specific personal project.
 *
 * @param {string} project - The project name.
 * @returns {string} - The generated URL for the personal project.
 */

export const getUrlPersonalProject = (project: string): string => {
  return `${PAGE_TOP_LEVEL_URLS.personalProjects}/${project}`
}
