import { TEXT } from '@/localization/texts_en'
import { ID } from '@/utils/constants/ids/ids'
import { PAGES_URL } from '@/utils/constants/pageUrls'
import Link from 'next/link'

const links = [
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

const cssMobile =
  'block border-b border-neutral-100 py-2 pl-3 pr-4 font-bold text-neutral-700 hover:bg-neutral-50 hover:text-violet-700'
const cssDesktop = 'text-body-md cursor-pointer font-bold text-neutral-700 hover:text-violet-600'

const Menu = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <ul
      className={isMobile ? 'mb-5 mt-2 flex flex-col lg:hidden' : 'hidden gap-8 lg:flex'}
      id={isMobile ? ID.menu.mobile : ID.menu.desktop}
      data-testid={isMobile ? ID.menu.mobile : ID.menu.desktop}
    >
      {links.map((link) => (
        <li key={link.id}>
          <Link
            href={link.href}
            className={isMobile ? cssMobile : cssDesktop}
            data-testid={isMobile ? `mobile-${link.testId}` : `desktop-${link.testId}`}
            id={link.id}
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Menu
