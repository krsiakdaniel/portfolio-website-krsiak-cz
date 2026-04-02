/**
 * Capitalizes the first letter of a string while keeping the rest unchanged
 * Handles special cases for technology names and abbreviations
 * @param text - The string to capitalize
 * @returns The string with proper capitalization or special formatting
 */
export const capitalizeFirstLetter = (text: string): string => {
  if (!text) return text

  // Special cases for technology names and abbreviations
  const specialCases: Record<string, string> = {
    css: 'CSS',
    graphql: 'GraphQL',
    html: 'HTML',
    javascript: 'JavaScript',
    jest: 'JEST',
    next: 'Next.js',
    typescript: 'TypeScript',
    xd: 'XD',
  }

  const lowerText = text.toLowerCase()

  // Check if the text matches any special case
  if (specialCases[lowerText]) {
    return specialCases[lowerText]
  }

  // Default behavior: capitalize first letter
  return text.charAt(0).toUpperCase() + text.slice(1)
}
