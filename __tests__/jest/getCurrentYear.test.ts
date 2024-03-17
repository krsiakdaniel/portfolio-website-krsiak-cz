import { getCurrentYear } from '@/utils/getCurrentYear'

describe('getCurrentYear', () => {
  it('should return the current year', () => {
    const currentYear = new Date().getFullYear()
    const result = getCurrentYear()
    expect(result).toEqual(currentYear)
  })

  it('should return a number', () => {
    const result = getCurrentYear()
    expect(typeof result).toBe('number')
  })
})
