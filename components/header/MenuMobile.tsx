import { TEXT } from '@/localization/texts_en'
import { ID, PAGES_URL } from '@/utils/constants'
import Link from 'next/link'

const links = [
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

const MenuMobile = () => {
  return (
    <ul className="mb-5 mt-2 flex flex-col lg:hidden" id={ID.menu.mobile} data-testid={ID.menu.mobile}>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="block border-b border-neutral-100 py-2 pl-3 pr-4 font-bold text-neutral-700 hover:bg-neutral-50 hover:text-violet-700"
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

export default MenuMobile
