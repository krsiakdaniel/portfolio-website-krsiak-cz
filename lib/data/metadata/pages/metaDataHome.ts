import { Metadata } from 'next'

import { COMMON_VALUES, META_HOME, TEXT } from '@/localization/english'

import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { formatKeywordsString } from '@/lib/utils/helpers/metadata/formatKeywordsString'

import homeOG from '@/public/images/png/open-graph/pages/home/home-og.png'
import homeTwitter from '@/public/images/png/open-graph/pages/home/home-twitter.png'

export const metaDataHome: Metadata = {
  title: META_HOME.title,
  description: META_HOME.description,
  keywords: formatKeywordsString(META_HOME.keywords),
  openGraph: {
    title: `${COMMON_VALUES.nameDanielKrsiak} - ${COMMON_VALUES.reactDeveloper}`,
    description: `I am ${COMMON_VALUES.reactDeveloper} based in ${COMMON_VALUES.czechRepublic}. I specialize in ${COMMON_VALUES.javaScript}, ${COMMON_VALUES.typeScript}, ${COMMON_VALUES.react}, and ${COMMON_VALUES.next}. With 6 years of experience creating modern web applications, I focus on delivering high-quality, scalable, and reliable code.`,
    images: [
      {
        url: homeOG.src,
      },
    ],
    url: PAGES_URL.websiteProduction,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMMON_VALUES.nameDanielKrsiak} - ${COMMON_VALUES.reactDeveloper}`,
    description: `I am ${COMMON_VALUES.reactDeveloper} based in ${COMMON_VALUES.czechRepublic}. I specialize in ${COMMON_VALUES.javaScript}, ${COMMON_VALUES.typeScript}, ${COMMON_VALUES.react}, and ${COMMON_VALUES.next}. With 6 years of experience creating modern web applications, I focus on delivering high-quality, scalable, and reliable code.`,
    images: [
      {
        url: homeTwitter.src,
      },
    ],
    site: TEXT.twitter,
  },
}
