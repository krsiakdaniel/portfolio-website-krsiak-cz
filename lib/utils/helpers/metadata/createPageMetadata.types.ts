import { type MetaDataKeywords } from '@/lib/types/interfaces'

export type PageMeta = {
  title: string
  description: string
  keywords: MetaDataKeywords
}

export type StaticImage = {
  src: string
}

export type CreatePageMetadataParams = {
  meta: PageMeta
  pageUrl?: string
  ogImage?: StaticImage
  twitterImage?: StaticImage
}
