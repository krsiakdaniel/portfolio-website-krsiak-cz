import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { MenuLink } from '@/lib/utils/interfaces/interfaces'
import { TEXT } from '@/localization/english'

export const menuMobileLinks: MenuLink[] = [
  { href: PAGES_URL.aboutMe, text: TEXT.aboutMe, testId: DATA_TEST_IDS.menu.mobile.links.aboutMe, id: 'about-me' },
  { href: PAGES_URL.resume, text: TEXT.resume, testId: DATA_TEST_IDS.menu.mobile.links.resume, id: 'resume' },
  {
    href: PAGES_URL.work.mainUrl,
    text: TEXT.workExperience,
    testId: DATA_TEST_IDS.menu.mobile.links.workExperience,
    id: 'work-experience',
  },
  {
    href: PAGES_URL.personal.mainUrl,
    text: TEXT.personalProjects,
    testId: DATA_TEST_IDS.menu.mobile.links.personalProjects,
    id: 'personal-projects',
  },
]
