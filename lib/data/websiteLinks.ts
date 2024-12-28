import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { WebsiteLinkItem } from '@/lib/utils/interfaces/interfaces'

export const websiteLinks: WebsiteLinkItem[] = [
  {
    href: PAGES_URL.aboutMe,
    text: TEXT.aboutMe,
    testId: DATA_TEST_IDS.websiteLinks.aboutMe,
    id: ID.websiteLink.aboutMe,
  },
  { href: PAGES_URL.resume, text: TEXT.resume, testId: DATA_TEST_IDS.websiteLinks.resume, id: ID.websiteLink.resume },
  {
    href: PAGES_URL.work.mainUrl,
    text: TEXT.workExperience,
    testId: DATA_TEST_IDS.websiteLinks.workExperience,
    id: ID.websiteLink.workExperience,
  },
  {
    href: PAGES_URL.personal.mainUrl,
    text: TEXT.personalProjects,
    testId: DATA_TEST_IDS.websiteLinks.personalProjects,
    id: ID.websiteLink.personalProjects,
  },
]
