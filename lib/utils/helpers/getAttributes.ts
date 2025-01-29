/**
 * Returns an object containing the provided attributes.
 *
 * @param {Object} attributes - The attributes to include in the returned object.
 * @param {string} [attributes.id] - The id attribute.
 * @param {string} [attributes.dataTestId] - The data-testid attribute.
 * @returns {Object} The object containing the provided attributes.
 */
export const getAttributes = (attributes: { id?: string; dataTestId?: string }): object => {
  return {
    ...(attributes.id && { id: attributes.id }),
    ...(attributes.dataTestId && { 'data-testid': attributes.dataTestId }),
  }
}
