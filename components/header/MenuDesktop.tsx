import { TEXT } from '@/localization/texts_en'
import { ID, PAGES_URL } from '@/utils/constants'
import Link from 'next/link'

const links = [
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

const MenuDesktop = () => {
  return (
    <ul className="hidden gap-8 lg:flex" id={ID.menu.desktop} data-testid={ID.menu.desktop}>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-body-md cursor-pointer font-bold text-neutral-700 hover:text-violet-600"
            data-testid={link.testId}
            id={link.id}
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default MenuDesktop
