import { Metadata } from 'next'

import { META_RESUME, TEXT } from '@/localization/english'

import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { formatKeywordsString } from '@/lib/utils/helpers/metadata/formatKeywordsString'

import resumeOG from '@/public/images/png/open-graph/pages/resume/resume-og.png'
import resumeTwitter from '@/public/images/png/open-graph/pages/resume/resume-twitter.png'

export const metaDataResume: Metadata = {
  title: META_RESUME.title,
  description: META_RESUME.description,
  keywords: formatKeywordsString(META_RESUME.keywords),
  openGraph: {
    title: META_RESUME.title,
    description: META_RESUME.description,
    images: [
      {
        url: resumeOG.src,
      },
    ],
    url: PAGES_URL.websiteProduction + PAGES_URL.resume,
  },
  twitter: {
    card: 'summary_large_image',
    title: META_RESUME.title,
    description: META_RESUME.description,
    images: [
      {
        url: resumeTwitter.src,
      },
    ],
    site: TEXT.twitter,
  },
}
