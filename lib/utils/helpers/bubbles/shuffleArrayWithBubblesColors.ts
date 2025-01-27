/**
 * Swaps two elements in an array.
 *
 * @param {string[]} array - The array containing the elements to swap.
 * @param {number} index1 - The index of the first element.
 * @param {number} index2 - The index of the second element.
 */
const swapElements = (array: string[], index1: number, index2: number) => {
  ;[array[index1], array[index2]] = [array[index2], array[index1]]
}

/**
 * Generates a random index between 0 and the specified maximum value.
 *
 * @param {number} max - The maximum value for the random index.
 * @returns {number} A random index between 0 and max.
 */
const getRandomIndex = (max: number): number => Math.floor(Math.random() * (max + 1))

/**
 * Shuffles an array of strings in place.
 *
 * @param {string[]} arrayColors - The array of strings to shuffle.
 * @returns {string[]} The shuffled array.
 */
export const shuffleArrayWithBubblesColors = (arrayColors: string[]): string[] => {
  for (let i = arrayColors.length - 1; i > 0; i--) {
    const randomIndex = getRandomIndex(i)
    swapElements(arrayColors, i, randomIndex)
  }

  return arrayColors
}
