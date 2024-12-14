import { TEXT } from '@/localization/texts_en'
import { PAGES_URL } from '@/utils/constants'
import { MenuLink } from '@/utils/interfaces'

export const menuMobileLinks: MenuLink[] = [
  { href: PAGES_URL.aboutMe, text: TEXT.aboutMe, testId: 'mobile-about-me-link', id: 'about-me' },
  { href: PAGES_URL.resume, text: TEXT.resume, testId: 'mobile-resume-link', id: 'resume' },
  {
    href: PAGES_URL.work.mainUrl,
    text: TEXT.workExperience,
    testId: 'mobile-work-experience-link',
    id: 'work-experience',
  },
  {
    href: PAGES_URL.personal.mainUrl,
    text: TEXT.personalProjects,
    testId: 'mobile-personal-projects-link',
    id: 'personal-projects',
  },
]
