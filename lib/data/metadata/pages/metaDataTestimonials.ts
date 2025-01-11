import { Metadata } from 'next'

import { META_TESTIMONIALS, TEXT } from '@/localization/english'

import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { getKeywordsString } from '@/lib/utils/helpers/getMetaKeywords'

import testimonialsOG from '@/public/images/png/open-graph/pages/testimonials/testimonials-og.png'
import testimonialsTwitter from '@/public/images/png/open-graph/pages/testimonials/testimonials-twitter.png'

export const metaDataTestimonials: Metadata = {
  title: META_TESTIMONIALS.title,
  description: META_TESTIMONIALS.description,
  keywords: getKeywordsString(META_TESTIMONIALS.keywords),
  openGraph: {
    title: META_TESTIMONIALS.title,
    description: META_TESTIMONIALS.description,
    images: [
      {
        url: testimonialsOG.src,
      },
    ],
    url: PAGES_URL.websiteProduction + PAGES_URL.testimonials,
  },
  twitter: {
    card: 'summary_large_image',
    title: META_TESTIMONIALS.title,
    description: META_TESTIMONIALS.description,
    images: [
      {
        url: testimonialsTwitter.src,
      },
    ],
    site: TEXT.twitter,
  },
}
