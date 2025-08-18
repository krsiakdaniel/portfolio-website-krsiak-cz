import {
  calculateTechnologyYears,
  getAllTechnologyYears,
  TECHNOLOGY_START_DATES,
} from '@/lib/utils/helpers/years/calculateTechnologyYears'
import { getCurrentYear } from '@/lib/utils/helpers/years/getCurrentYear'

// Mock getCurrentYear to control the current year in tests
jest.mock('@/lib/utils/helpers/years/getCurrentYear')
const mockedGetCurrentYear = getCurrentYear as jest.MockedFunction<typeof getCurrentYear>

describe('calculateTechnologyYears', () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks()
  })

  describe('calculateTechnologyYears function', () => {
    it('should calculate correct years of experience for a technology', () => {
      // Mock current year as 2025
      mockedGetCurrentYear.mockReturnValue(2025)

      const yearsForJavaScript = calculateTechnologyYears('javaScript')
      const yearsForTypeScript = calculateTechnologyYears('typeScript')
      const yearsForReact = calculateTechnologyYears('react')

      // JavaScript started in 2018, so in 2025 it should be 7 years
      expect(yearsForJavaScript).toBe(7)
      // TypeScript started in 2019, so in 2025 it should be 6 years
      expect(yearsForTypeScript).toBe(6)
      // React started in 2019, so in 2025 it should be 6 years
      expect(yearsForReact).toBe(6)
    })

    it('should return minimum of 1 year even if technology is new', () => {
      // Mock current year as 2023 (same as when Next.js and Tailwind started)
      mockedGetCurrentYear.mockReturnValue(2023)

      const yearsForNext = calculateTechnologyYears('next')
      const yearsForTailwind = calculateTechnologyYears('tailwind')

      // Both should return 1 year minimum
      expect(yearsForNext).toBe(1)
      expect(yearsForTailwind).toBe(1)
    })

    it('should return minimum of 1 year for future start dates', () => {
      // Mock current year as 2022 (before Next.js and Tailwind started)
      mockedGetCurrentYear.mockReturnValue(2022)

      const yearsForNext = calculateTechnologyYears('next')
      const yearsForTailwind = calculateTechnologyYears('tailwind')

      // Both should return 1 year minimum even though they would be negative
      expect(yearsForNext).toBe(1)
      expect(yearsForTailwind).toBe(1)
    })

    it('should handle all technologies defined in TECHNOLOGY_START_DATES', () => {
      mockedGetCurrentYear.mockReturnValue(2025)

      const allTechnologies = Object.keys(TECHNOLOGY_START_DATES) as Array<
        keyof typeof TECHNOLOGY_START_DATES
      >

      allTechnologies.forEach((tech) => {
        const years = calculateTechnologyYears(tech)
        expect(typeof years).toBe('number')
        expect(years).toBeGreaterThanOrEqual(1)
      })
    })

    it('should return correct values for each specific technology in 2025', () => {
      mockedGetCurrentYear.mockReturnValue(2025)

      expect(calculateTechnologyYears('javaScript')).toBe(7) // 2025 - 2018
      expect(calculateTechnologyYears('typeScript')).toBe(6) // 2025 - 2019
      expect(calculateTechnologyYears('react')).toBe(6) // 2025 - 2019
      expect(calculateTechnologyYears('playwright')).toBe(3) // 2025 - 2022
      expect(calculateTechnologyYears('next')).toBe(2) // 2025 - 2023
      expect(calculateTechnologyYears('tailwind')).toBe(2) // 2025 - 2023
    })
  })

  describe('getAllTechnologyYears function', () => {
    it('should return an object with all technologies and their years', () => {
      mockedGetCurrentYear.mockReturnValue(2025)

      const allYears = getAllTechnologyYears()

      // Check that all technologies are included
      const expectedTechnologies = Object.keys(TECHNOLOGY_START_DATES)
      const actualTechnologies = Object.keys(allYears)

      expect(actualTechnologies).toEqual(expect.arrayContaining(expectedTechnologies))
      expect(actualTechnologies.length).toBe(expectedTechnologies.length)
    })

    it('should return correct years for all technologies', () => {
      mockedGetCurrentYear.mockReturnValue(2025)

      const allYears = getAllTechnologyYears()

      expect(allYears.javaScript).toBe(7)
      expect(allYears.typeScript).toBe(6)
      expect(allYears.react).toBe(6)
      expect(allYears.playwright).toBe(3)
      expect(allYears.next).toBe(2)
      expect(allYears.tailwind).toBe(2)
    })

    it('should return all values as numbers greater than or equal to 1', () => {
      mockedGetCurrentYear.mockReturnValue(2025)

      const allYears = getAllTechnologyYears()
      const yearValues = Object.values(allYears)

      yearValues.forEach((years) => {
        expect(typeof years).toBe('number')
        expect(years).toBeGreaterThanOrEqual(1)
      })
    })

    it('should maintain consistency with individual calculateTechnologyYears calls', () => {
      mockedGetCurrentYear.mockReturnValue(2025)

      const allYears = getAllTechnologyYears()
      const technologies = Object.keys(TECHNOLOGY_START_DATES) as Array<
        keyof typeof TECHNOLOGY_START_DATES
      >

      technologies.forEach((tech) => {
        const individualResult = calculateTechnologyYears(tech)
        expect(allYears[tech]).toBe(individualResult)
      })
    })
  })

  describe('TECHNOLOGY_START_DATES constant', () => {
    it('should contain all expected technologies', () => {
      const expectedTechnologies = [
        'javaScript',
        'typeScript',
        'react',
        'playwright',
        'next',
        'tailwind',
      ]

      const actualTechnologies = Object.keys(TECHNOLOGY_START_DATES)

      expect(actualTechnologies).toEqual(expect.arrayContaining(expectedTechnologies))
      expect(actualTechnologies.length).toBe(expectedTechnologies.length)
    })

    it('should have valid start dates (numbers)', () => {
      const startDates = Object.values(TECHNOLOGY_START_DATES)

      startDates.forEach((startDate) => {
        expect(typeof startDate).toBe('number')
        expect(startDate).toBeGreaterThan(2000) // Reasonable year check
        expect(startDate).toBeLessThanOrEqual(new Date().getFullYear() + 1) // Not too far in future
      })
    })

    it('should have correct specific start dates', () => {
      expect(TECHNOLOGY_START_DATES.javaScript).toBe(2018)
      expect(TECHNOLOGY_START_DATES.typeScript).toBe(2019)
      expect(TECHNOLOGY_START_DATES.react).toBe(2019)
      expect(TECHNOLOGY_START_DATES.playwright).toBe(2022)
      expect(TECHNOLOGY_START_DATES.next).toBe(2023)
      expect(TECHNOLOGY_START_DATES.tailwind).toBe(2023)
    })
  })
})
