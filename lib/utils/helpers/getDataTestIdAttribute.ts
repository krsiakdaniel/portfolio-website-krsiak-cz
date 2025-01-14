/**
 * Generates an object containing a `data-testid` attribute.
 *
 * @param {string} dataTestId - The value to be used for the `data-testid` attribute.
 * @returns {object | undefined} An object with the `data-testid` attribute if `dataTestId` is provided, otherwise undefined.
 */
export const getDataTestIdAttribute = (dataTestId?: string): object | undefined => {
  return dataTestId ? { 'data-testid': dataTestId } : undefined
}
