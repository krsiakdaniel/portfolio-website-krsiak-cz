import { MetaDataKeywords } from '../../typeDefinitions/interfaces'

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
