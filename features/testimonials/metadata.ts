import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { createPageMetadata } from '@/lib/utils/helpers/metadata/createPageMetadata'

import testimonialsOG from '@/public/images/png/open-graph/pages/testimonials/testimonials-og.png'
import testimonialsTwitter from '@/public/images/png/open-graph/pages/testimonials/testimonials-twitter.png'

import { META_TESTIMONIALS } from './localization'

export const metaDataTestimonials = createPageMetadata({
  meta: META_TESTIMONIALS,
  pageUrl: PAGES_URL.testimonials,
  ogImage: testimonialsOG,
  twitterImage: testimonialsTwitter,
})
