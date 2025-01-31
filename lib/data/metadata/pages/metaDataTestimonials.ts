import { Metadata } from 'next'

import { META_TESTIMONIALS, TEXT } from '@/localization/english'

import { ENV_URLS, PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { formatKeywordsString } from '@/lib/utils/helpers/metadata/formatKeywordsString'

import testimonialsOG from '@/public/images/png/open-graph/pages/testimonials/testimonials-og.png'
import testimonialsTwitter from '@/public/images/png/open-graph/pages/testimonials/testimonials-twitter.png'

export const metaDataTestimonials: Metadata = {
  title: META_TESTIMONIALS.title,
  description: META_TESTIMONIALS.description,
  keywords: formatKeywordsString(META_TESTIMONIALS.keywords),
  openGraph: {
    title: META_TESTIMONIALS.title,
    description: META_TESTIMONIALS.description,
    images: [
      {
        url: testimonialsOG.src,
      },
    ],
    url: ENV_URLS.production + PAGES_URL.testimonials,
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
