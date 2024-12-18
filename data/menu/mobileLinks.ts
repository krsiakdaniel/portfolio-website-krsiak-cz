import { TEXT } from '@/localization/texts_en'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'
import { MenuLink } from '@/utils/interfaces/interfaces'

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
