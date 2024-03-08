import { getYearsExperience } from '@/utils/getYearsExperience'

describe('getYearsExperience', () => {
  it('should return the correct number of years', () => {
    const startYear = 2010
    const currentYear = new Date().getFullYear()
    const expectedYears = currentYear - startYear

    const result = getYearsExperience(startYear)

    expect(result).toEqual(expectedYears)
  })
})
