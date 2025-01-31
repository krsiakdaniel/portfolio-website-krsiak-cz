import { MetadataRoute } from 'next'

import sitemap, { CHANGE_FREQUENCY_MONTHLY } from '@/app/sitemap'
import { SITEMAP_URLS } from '@/lib/utils/constants/urls/pageUrls'

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
    const urls = results.map((resultUrl) => new URL(resultUrl.url).pathname)
    const flatURLs = Object.values(SITEMAP_URLS)
    expect(urls).toEqual(expect.arrayContaining(flatURLs))
  })

  it('should return correct changeFrequency', () => {
    const frequencies = results.map((resultFrequency) => resultFrequency.changeFrequency)
    expect(frequencies).toEqual(Array(results.length).fill(CHANGE_FREQUENCY_MONTHLY))
  })

  it('should return correct priority values', () => {
    const priorities = results.map((resultPriority) => resultPriority.priority)
    expect(priorities).toEqual(expect.arrayContaining([1, 0.8, 0.4, 0.2]))
  })
})
