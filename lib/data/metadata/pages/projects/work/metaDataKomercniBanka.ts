import { Metadata } from 'next'

import { META_KOMERCNI_BANKA, TEXT } from '@/localization/english'

import { ENV_URLS, PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { formatKeywordsString } from '@/lib/utils/helpers/metadata/formatKeywordsString'

import komercniBankaOG from '@/public/images/png/open-graph/pages/work-experience/komercni-banka/komercni-banka-og.png'
import komercniBankaTwitter from '@/public/images/png/open-graph/pages/work-experience/komercni-banka/komercni-banka-twitter.png'

export const metaDataKomercniBanka: Metadata = {
  title: META_KOMERCNI_BANKA.title,
  description: META_KOMERCNI_BANKA.description,
  keywords: formatKeywordsString(META_KOMERCNI_BANKA.keywords),
  openGraph: {
    title: META_KOMERCNI_BANKA.title,
    description: META_KOMERCNI_BANKA.description,
    images: [
      {
        url: komercniBankaOG.src,
      },
    ],
    url: ENV_URLS.production + PAGES_URL.work.komercniBanka,
  },
  twitter: {
    card: 'summary_large_image',
    title: META_KOMERCNI_BANKA.title,
    description: META_KOMERCNI_BANKA.description,
    images: [
      {
        url: komercniBankaTwitter.src,
      },
    ],
    site: TEXT.twitter,
  },
}
