/**
 * Generates the URL for a specific work experience.
 *
 * @param {string} company - The company name.
 * @returns {string} - The generated URL for the work experience.
 */

export const getUrlWorkExperience = (company: string): string => {
  return `/work-experience/${company}`
}

/**
 * Generates the URL for a specific personal project.
 *
 * @param {string} project - The project name.
 * @returns {string} - The generated URL for the personal project.
 */

export const getUrlPersonalProject = (project: string): string => {
  return `/personal-projects/${project}`
}
