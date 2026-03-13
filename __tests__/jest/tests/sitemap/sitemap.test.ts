import { MetadataRoute } from 'next'

import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import sitemap, { CHANGE_FREQUENCY_MONTHLY } from '@/app/sitemap'

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

    const flatURLs = [
      PAGES_URL.home,
      PAGES_URL.whoIAm,
      PAGES_URL.resume,
      PAGES_URL.workExperience,
      PAGES_URL.workKooperativa,
      PAGES_URL.workSmartsuppDashboard,
      PAGES_URL.workSmartsuppWeb,
      PAGES_URL.workSmartsuppHelp,
      PAGES_URL.workKomercniBanka,
      PAGES_URL.workGroupon,
      PAGES_URL.workMoravia,
      PAGES_URL.personalProjects,
      PAGES_URL.personalKrsiak,
      PAGES_URL.personalCryptoMania,
      PAGES_URL.testimonials,
      PAGES_URL.status,
    ]
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
