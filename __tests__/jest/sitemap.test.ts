// FILEPATH: /Users/krsiak/github/personal/portfolio-website-krsiak-cz/__tests__/jest/sitemap.test.ts

import sitemap, { CHANGE_FREQUENCY_MONTHLY, URLS } from '@/app/sitemap'
import { MetadataRoute } from 'next'

describe('sitemap', () => {
  let result: MetadataRoute.Sitemap

  beforeAll(() => {
    result = sitemap()
  })

  it('should return an array', () => {
    expect(Array.isArray(result)).toBe(true)
  })

  it('should return an array of objects with correct properties', () => {
    result.forEach((item) => {
      expect(item).toHaveProperty('url')
      expect(item).toHaveProperty('lastModified')
      expect(item).toHaveProperty('changeFrequency')
      expect(item).toHaveProperty('priority')
    })
  })

  it('should return correct URLs', () => {
    const urls = result.map((item) => item.url)
    const flatURLs = Object.values(URLS).flatMap((value) => (typeof value === 'object' ? Object.values(value) : value))
    expect(urls).toEqual(expect.arrayContaining(flatURLs))
  })

  it('should return correct changeFrequency', () => {
    const frequencies = result.map((item) => item.changeFrequency)
    expect(frequencies).toEqual(Array(result.length).fill(CHANGE_FREQUENCY_MONTHLY))
  })

  it('should return correct priority values', () => {
    const priorities = result.map((item) => item.priority)
    expect(priorities).toEqual(expect.arrayContaining([1, 0.8, 0.5]))
  })
})
