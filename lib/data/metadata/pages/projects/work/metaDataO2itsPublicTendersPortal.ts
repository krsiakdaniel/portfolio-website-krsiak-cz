import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { createPageMetadata } from '@/lib/utils/helpers/metadata/createPageMetadata'

import O2itsPublicTendersPortalOG from '@/public/images/png/open-graph/pages/work-experience/o2its-public-tenders-portal/o2its-public-tenders-portal-og.png'
import O2itsPublicTendersPortalTwitter from '@/public/images/png/open-graph/pages/work-experience/o2its-public-tenders-portal/o2its-public-tenders-portal-twitter.png'

import { META_O2ITS_PUBLIC_TENDERS_PORTAL } from '@/localization'

export const metaDataO2itsPublicTendersPortal = createPageMetadata({
  meta: META_O2ITS_PUBLIC_TENDERS_PORTAL,
  pageUrl: PAGES_URL.workO2itsPublicTendersPortal,

  ogImage: O2itsPublicTendersPortalOG,
  twitterImage: O2itsPublicTendersPortalTwitter,
})
