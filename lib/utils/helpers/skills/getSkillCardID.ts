/**
 * Generates a skill card ID by prefixing the given ID with 'skill-card-' and converting it to lowercase.
 *
 * @param {string} id - The ID to be prefixed and converted.
 * @returns {string} The generated skill card ID.
 */
export const getSkillCardID = (id: string): string => {
  return `skill-card-${id}`.toLowerCase()
}
