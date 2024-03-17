import { MENU_DESKTOP_ID, TEXTS, URLS } from '@/utils/constants'
import Link from 'next/link'

const MenuDesktop = () => {
  return (
    <ul className="hidden gap-8 lg:flex" id={MENU_DESKTOP_ID} data-testid={MENU_DESKTOP_ID}>
      <li>
        <Link
          href={URLS.aboutMe}
          className="text-body-md cursor-pointer font-bold text-neutral-700 hover:text-violet-600"
          data-testid="desktop-about-me-link"
        >
          {TEXTS.aboutMe}
        </Link>
      </li>
      <li>
        <Link
          href={URLS.workExperience}
          className="text-body-md cursor-pointer font-bold text-neutral-700 hover:text-violet-600"
          data-testid="desktop-work-experience-link"
        >
          {TEXTS.workExperience}
        </Link>
      </li>
      <li>
        <Link
          href={URLS.personalProjects}
          className="text-body-md cursor-pointer font-bold text-neutral-700 hover:text-violet-600"
          data-testid="desktop-personal-projects-link"
        >
          {TEXTS.personalProjects}
        </Link>
      </li>
    </ul>
  )
}

export default MenuDesktop
