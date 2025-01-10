import { Metadata } from 'next'

import { META_RESUME } from '@/localization/english'

import { getKeywordsString } from '@/lib/utils/helpers/getMetaKeywords'

export const metaDataResume: Metadata = {
  title: META_RESUME.title,
  description: META_RESUME.description,
  keywords: getKeywordsString(META_RESUME.keywords),
  openGraph: {
    title: META_RESUME.title,
    description: META_RESUME.description,
    images: [
      {
        url: '/public/images/png/open-graph/pages/resume/resume-og.png',
      },
    ],
    url: 'https://krsiak.cz/resume',
  },
  twitter: {
    card: 'summary_large_image',
    title: META_RESUME.title,
    description: META_RESUME.description,
    images: [
      {
        url: '/public/images/png/open-graph/pages/resume/resume-twitter.png',
      },
    ],
    site: '@krsiak_daniel',
  },
}
