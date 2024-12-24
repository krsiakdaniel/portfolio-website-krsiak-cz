import { TEXT } from '@/localization/english'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'
import { WebsiteLinkItem } from '@/utils/interfaces/interfaces'

// TODO: refactor testId and id to utils/constants/ files
export const websiteLinks: WebsiteLinkItem[] = [
  { href: PAGES_URL.aboutMe, text: TEXT.aboutMe, testId: 'about-me-link', id: 'about-me' },
  { href: PAGES_URL.resume, text: TEXT.resume, testId: 'resume-link', id: 'resume' },
  {
    href: PAGES_URL.work.mainUrl,
    text: TEXT.workExperience,
    testId: 'work-experience-link',
    id: 'work-experience',
  },
  {
    href: PAGES_URL.personal.mainUrl,
    text: TEXT.personalProjects,
    testId: 'personal-projects-link',
    id: 'personal-projects',
  },
]
