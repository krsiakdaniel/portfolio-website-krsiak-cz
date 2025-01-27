// TODO: write unit test
/**
 * Shuffles an array in place.
 *
 * @param array - The array to shuffle.
 *
 * @returns The shuffled array.
 */
export const shuffleArrayWithBubblesColors = (array: string[]): string[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}
