import { capitalizeFirstLetter } from '@/lib/utils/helpers/text/capitalizeFirstLetter'

describe('capitalizeFirstLetter', () => {
  it('should capitalize the first letter of a regular word', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello')
  })

  it('should handle empty strings', () => {
    expect(capitalizeFirstLetter('')).toBe('')
  })

  it('should convert technology names to special cases', () => {
    expect(capitalizeFirstLetter('css')).toBe('CSS')
    expect(capitalizeFirstLetter('javascript')).toBe('JavaScript')
    expect(capitalizeFirstLetter('typescript')).toBe('TypeScript')
    expect(capitalizeFirstLetter('next')).toBe('Next.js')
    expect(capitalizeFirstLetter('graphql')).toBe('GraphQL')
  })

  it('should handle case-insensitive matching for special cases', () => {
    expect(capitalizeFirstLetter('CSS')).toBe('CSS')
    expect(capitalizeFirstLetter('JavaScript')).toBe('JavaScript')
    expect(capitalizeFirstLetter('TYPESCRIPT')).toBe('TypeScript')
  })

  it('should default to normal capitalization for non-special cases', () => {
    expect(capitalizeFirstLetter('react')).toBe('React')
    expect(capitalizeFirstLetter('vue')).toBe('Vue')
  })
})
