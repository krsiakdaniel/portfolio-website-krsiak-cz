import { getCurrentYear } from '@/lib/utils/helpers/years/getCurrentYear'

describe('getCurrentYear', () => {
  it('should return the current year', () => {
    const currentYear = new Date().getFullYear()
    const results = getCurrentYear()
    expect(results).toEqual(currentYear)
  })

  it('should return a number', () => {
    const results = getCurrentYear()
    expect(typeof results).toBe('number')
  })
})
