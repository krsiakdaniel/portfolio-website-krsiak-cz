import { TEXT } from '@/localization/texts_en'
import { PAGES_URL } from '@/utils/constants'
import { MenuLink } from '@/utils/interfaces'

export const menuDesktopLinks: MenuLink[] = [
  { href: PAGES_URL.aboutMe, text: TEXT.aboutMe, testId: 'desktop-about-me-link', id: 'about-me' },
  { href: PAGES_URL.resume, text: TEXT.resume, testId: 'desktop-resume-link', id: 'resume' },
  {
    href: PAGES_URL.work.mainUrl,
    text: TEXT.workExperience,
    testId: 'desktop-work-experience-link',
    id: 'work-experience',
  },
  {
    href: PAGES_URL.personal.mainUrl,
    text: TEXT.personalProjects,
    testId: 'desktop-personal-projects-link',
    id: 'personal-projects',
  },
]
