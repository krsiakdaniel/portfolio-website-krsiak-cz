import { Metadata } from 'next'

import { META_TESTIMONIALS } from '@/localization/english'

import { getKeywordsString } from '@/lib/utils/helpers/getMetaKeywords'

export const metaDataTestimonials: Metadata = {
  title: META_TESTIMONIALS.title,
  description: META_TESTIMONIALS.description,
  keywords: getKeywordsString(META_TESTIMONIALS.keywords),
}
