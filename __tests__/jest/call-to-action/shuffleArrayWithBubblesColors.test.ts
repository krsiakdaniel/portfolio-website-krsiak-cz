import { shuffleArrayWithBubblesColors } from '@/lib/utils/helpers/bubbles/shuffleArrayWithBubblesColors'

describe('shuffleArrayWithBubblesColors', () => {
  it('should return an array of the same length', () => {
    const array = ['red', 'blue', 'green', 'yellow']
    const result = shuffleArrayWithBubblesColors(array)
    expect(result.length).toBe(array.length)
  })

  it('should return an array with the same elements', () => {
    const array = ['red', 'blue', 'green', 'yellow']
    const result = shuffleArrayWithBubblesColors(array)
    expect(result.sort()).toEqual(array.sort())
  })

  it('should handle an empty array', () => {
    const array: string[] = []
    const result = shuffleArrayWithBubblesColors(array)
    expect(result).toEqual([])
  })

  it('should handle an array with one element', () => {
    const array = ['red']
    const result = shuffleArrayWithBubblesColors(array)
    expect(result).toEqual(['red'])
  })
})
