import { TEXT } from '@/localization/english'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'
import { MenuLink } from '@/utils/interfaces/interfaces'

export const menuDesktopLinks: MenuLink[] = [
  { href: PAGES_URL.aboutMe, text: TEXT.aboutMe, testId: DATA_TEST_IDS.menu.desktop.links.aboutMe, id: 'about-me' },
  { href: PAGES_URL.resume, text: TEXT.resume, testId: DATA_TEST_IDS.menu.desktop.links.resume, id: 'resume' },
  {
    href: PAGES_URL.work.mainUrl,
    text: TEXT.workExperience,
    testId: DATA_TEST_IDS.menu.desktop.links.workExperience,
    id: 'work-experience',
  },
  {
    href: PAGES_URL.personal.mainUrl,
    text: TEXT.personalProjects,
    testId: DATA_TEST_IDS.menu.desktop.links.personalProjects,
    id: 'personal-projects',
  },
]
