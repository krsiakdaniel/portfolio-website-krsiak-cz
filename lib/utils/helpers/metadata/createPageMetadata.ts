import { Metadata } from 'next'

import { ENV_URLS } from '@/lib/utils/constants/urls/pageUrls'
import { formatKeywordsString } from '@/lib/utils/helpers/metadata/formatKeywordsString'

import { CreatePageMetadataParams } from './createPageMetadata.types'

export const createPageMetadata = ({
  meta,
  pageUrl,
  ogImage,
  twitterImage,
}: CreatePageMetadataParams): Metadata => ({
  title: meta.title,
  description: meta.description,
  keywords: formatKeywordsString(meta.keywords),
  openGraph: {
    title: meta.title,
    description: meta.description,
    ...(ogImage && { images: [{ url: ogImage.src }] }),
    url: ENV_URLS.production + (pageUrl ?? ''),
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description,
    ...(twitterImage && { images: [{ url: twitterImage.src }] }),
  },
})
