import { MetadataRoute } from 'next'

import { ENV_URLS, PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { ChangeFrequencyEnum } from '@/lib/utils/typeDefinitions/enums'
import { SitemapItem } from '@/lib/utils/typeDefinitions/interfaces'

export const CHANGE_FREQUENCY_MONTHLY = ChangeFrequencyEnum.MONTHLY

const BASE_URL = ENV_URLS.production

const createSitemapEntry = (path: string, priority: number): SitemapItem => ({
  url: `${BASE_URL}${path}`,
  priority,
})

const sitemapEntries: SitemapItem[] = [
  // Priority 1.0
  createSitemapEntry(PAGES_URL.home, 1),

  // Priority 0.8
  createSitemapEntry(PAGES_URL.whoIAm, 0.8),
  createSitemapEntry(PAGES_URL.resume, 0.8),
  createSitemapEntry(PAGES_URL.workExperience, 0.8),
  createSitemapEntry(PAGES_URL.workSmartsuppDashboard, 0.8),
  createSitemapEntry(PAGES_URL.workKooperativa, 0.8),
  createSitemapEntry(PAGES_URL.workKomercniBanka, 0.8),
  createSitemapEntry(PAGES_URL.workSmartsuppWeb, 0.8),
  createSitemapEntry(PAGES_URL.workSmartsuppHelp, 0.8),
  createSitemapEntry(PAGES_URL.workGroupon, 0.8),
  createSitemapEntry(PAGES_URL.workMoravia, 0.8),
  createSitemapEntry(PAGES_URL.personalProjects, 0.8),
  createSitemapEntry(PAGES_URL.personalKrsiak, 0.8),
  createSitemapEntry(PAGES_URL.personalCryptoMania, 0.8),

  // Priority 0.4
  createSitemapEntry(PAGES_URL.testimonials, 0.4),

  // Priority 0.2
  createSitemapEntry(PAGES_URL.status, 0.2),
]

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapEntries.map((entry) => ({
    url: entry.url,
    lastModified: new Date(),
    changeFrequency: CHANGE_FREQUENCY_MONTHLY,
    priority: entry.priority,
  }))
}
