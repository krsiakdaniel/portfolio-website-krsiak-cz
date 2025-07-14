import { MetadataRoute } from 'next'

import { ENV_URLS, SITEMAP_URLS } from '@/lib/utils/constants/urls/pageUrls'
import { ChangeFrequencyEnum } from '@/lib/utils/typeDefinitions/enums'
import { SitemapItem } from '@/lib/utils/typeDefinitions/interfaces'

export const CHANGE_FREQUENCY_MONTHLY = ChangeFrequencyEnum.MONTHLY

const BASE_URL = ENV_URLS.production

const sitemapEntries: SitemapItem[] = [
  { url: BASE_URL + SITEMAP_URLS.home, priority: 1 },
  { url: BASE_URL + SITEMAP_URLS.whoIAm, priority: 0.8 },
  { url: BASE_URL + SITEMAP_URLS.resume, priority: 0.8 },
  { url: BASE_URL + SITEMAP_URLS.workExperience, priority: 0.8 },
  { url: BASE_URL + SITEMAP_URLS.workSmartsuppDashboard, priority: 0.8 },
  { url: BASE_URL + SITEMAP_URLS.workKooperativa, priority: 0.8 },
  { url: BASE_URL + SITEMAP_URLS.workKomercniBanka, priority: 0.8 },
  { url: BASE_URL + SITEMAP_URLS.workSmartsuppWeb, priority: 0.8 },
  { url: BASE_URL + SITEMAP_URLS.workSmartsuppHelp, priority: 0.8 },
  { url: BASE_URL + SITEMAP_URLS.workGroupon, priority: 0.8 },
  { url: BASE_URL + SITEMAP_URLS.workMoravia, priority: 0.8 },
  { url: BASE_URL + SITEMAP_URLS.personalProjects, priority: 0.8 },
  { url: BASE_URL + SITEMAP_URLS.personalKrsiak, priority: 0.8 },
  { url: BASE_URL + SITEMAP_URLS.personalCryptoMania, priority: 0.8 },
  { url: BASE_URL + SITEMAP_URLS.testimonials, priority: 0.4 },
  { url: BASE_URL + SITEMAP_URLS.blog, priority: 0.4 },
  { url: BASE_URL + SITEMAP_URLS.status, priority: 0.2 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapEntries.map((entry) => ({
    url: entry.url,
    lastModified: new Date(),
    changeFrequency: CHANGE_FREQUENCY_MONTHLY,
    priority: entry.priority,
  }))
}
