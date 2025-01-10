import { Metadata } from 'next'

import { COMMON_VALUES, META_HOME } from '@/localization/english'

import { getKeywordsString } from '@/lib/utils/helpers/getMetaKeywords'

export const metaDataHome: Metadata = {
  title: META_HOME.title,
  description: META_HOME.description,
  keywords: getKeywordsString(META_HOME.keywords),
  openGraph: {
    title: `${COMMON_VALUES.nameDanielKrsiak} - ${COMMON_VALUES.reactDeveloper}`,
    description: `I am ${COMMON_VALUES.reactDeveloper} based in ${COMMON_VALUES.czechRepublic}. I specialize in ${COMMON_VALUES.javaScript}, ${COMMON_VALUES.typeScript}, ${COMMON_VALUES.react}, and ${COMMON_VALUES.next}. With 6 years of experience creating modern web applications, I focus on delivering high-quality, scalable, and reliable code.`,
    images: [
      {
        url: '/public/images/png/open-graph/pages/home/home-og.png',
      },
    ],
    url: 'https://krsiak.cz',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMMON_VALUES.nameDanielKrsiak} - ${COMMON_VALUES.reactDeveloper}`,
    description: `I am ${COMMON_VALUES.reactDeveloper} based in ${COMMON_VALUES.czechRepublic}. I specialize in ${COMMON_VALUES.javaScript}, ${COMMON_VALUES.typeScript}, ${COMMON_VALUES.react}, and ${COMMON_VALUES.next}. With 6 years of experience creating modern web applications, I focus on delivering high-quality, scalable, and reliable code.`,
    images: [
      {
        url: '/public/images/png/open-graph/pages/home/home-twitter.png',
      },
    ],
    site: '@krsiak_daniel',
  },
}
