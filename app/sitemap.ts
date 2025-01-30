import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { MetadataRoute } from 'next'

// change frequency
export const CHANGE_FREQUENCY_MONTHLY = 'monthly'

const BASE_URL = PAGES_URL.websiteProduction

const sitemapEntries = [
  { url: BASE_URL + PAGES_URL.home, priority: 1 },
  { url: BASE_URL + PAGES_URL.resume, priority: 0.8 },
  { url: BASE_URL + PAGES_URL.work.mainUrl, priority: 0.8 },
  { url: BASE_URL + PAGES_URL.work.smartsupp.dashboard, priority: 0.8 },
  { url: BASE_URL + PAGES_URL.work.kooperativa, priority: 0.8 },
  { url: BASE_URL + PAGES_URL.work.komercniBanka, priority: 0.8 },
  { url: BASE_URL + PAGES_URL.work.smartsupp.web, priority: 0.8 },
  { url: BASE_URL + PAGES_URL.work.smartsupp.help, priority: 0.8 },
  { url: BASE_URL + PAGES_URL.work.groupon, priority: 0.8 },
  { url: BASE_URL + PAGES_URL.work.moravia, priority: 0.8 },
  { url: BASE_URL + PAGES_URL.personal.mainUrl, priority: 0.8 },
  { url: BASE_URL + PAGES_URL.personal.krsiak, priority: 0.8 },
  { url: BASE_URL + PAGES_URL.personal.cryptoMania, priority: 0.8 },
  { url: BASE_URL + PAGES_URL.testimonials, priority: 0.4 },
  { url: BASE_URL + PAGES_URL.status, priority: 0.2 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapEntries.map((entry) => ({
    url: entry.url,
    lastModified: new Date(),
    changeFrequency: CHANGE_FREQUENCY_MONTHLY,
    priority: entry.priority,
  }))
}
