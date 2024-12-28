/**
 * Generates a selector string for a given data-testid attribute.
 *
 * @param {string} dataTestId - The value of the data-testid attribute.
 * @returns {string} - The selector string for the data-testid attribute.
 */

export const getDataTestId = (dataTestId: string): string => {
  return `[data-testid="${dataTestId}"]`
}
