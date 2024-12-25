import { MetadataRoute } from 'next'

import sitemap, { CHANGE_FREQUENCY_MONTHLY, URLS } from '@/app/sitemap'

describe('sitemap', () => {
  let results: MetadataRoute.Sitemap

  beforeAll(() => {
    results = sitemap()
  })

  it('should return an array', () => {
    expect(Array.isArray(results)).toBe(true)
  })

  it('should return an array of objects with correct properties', () => {
    results.forEach((result) => {
      expect(result).toHaveProperty('url')
      expect(result).toHaveProperty('lastModified')
      expect(result).toHaveProperty('changeFrequency')
      expect(result).toHaveProperty('priority')
    })
  })

  it('should return correct URLs', () => {
    const urls = results.map((resultUrl) => resultUrl.url)
    const flatURLs = Object.values(URLS).flatMap((value) => (typeof value === 'object' ? Object.values(value) : value))
    expect(urls).toEqual(expect.arrayContaining(flatURLs))
  })

  it('should return correct changeFrequency', () => {
    const frequencies = results.map((resultFrequency) => resultFrequency.changeFrequency)
    expect(frequencies).toEqual(Array(results.length).fill(CHANGE_FREQUENCY_MONTHLY))
  })

  it('should return correct priority values', () => {
    const priorities = results.map((resultPriority) => resultPriority.priority)
    expect(priorities).toEqual(expect.arrayContaining([1, 0.8, 0.5]))
  })
})
