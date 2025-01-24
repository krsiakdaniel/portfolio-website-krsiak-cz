import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { TEXT } from '@/localization/english'

import { PageLinkItem } from '@/lib/utils/typeDefinitions/interfaces'

export const pagesLinks: PageLinkItem[] = [
  {
    id: ID.websiteLink.workExperience,
    href: PAGES_URL.work.mainUrl,
    text: TEXT.workExperience,
    dataTestId: DATA_TEST_IDS.pagesLinks.workExperience,
  },
  { id: ID.websiteLink.resume, href: PAGES_URL.resume, text: TEXT.resume, dataTestId: DATA_TEST_IDS.pagesLinks.resume },
  {
    id: ID.websiteLink.personalProjects,
    href: PAGES_URL.personal.mainUrl,
    text: TEXT.personalProjects,
    dataTestId: DATA_TEST_IDS.pagesLinks.personalProjects,
  },
  {
    id: ID.websiteLink.testimonials,
    href: PAGES_URL.testimonials,
    text: TEXT.testimonials,
    dataTestId: DATA_TEST_IDS.pagesLinks.testimonials,
  },
]
