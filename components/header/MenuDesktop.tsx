import { TEXT } from '@/localization/texts_en'
import { ID, PAGES_URL } from '@/utils/constants'
import Link from 'next/link'

const MenuDesktop = () => {
  return (
    <ul className="hidden gap-8 lg:flex" id={ID.menu.desktop} data-testid={ID.menu.desktop}>
      <li>
        <Link
          href={PAGES_URL.aboutMe}
          className="text-body-md cursor-pointer font-bold text-neutral-700 hover:text-violet-600"
          data-testid="desktop-about-me-link"
        >
          {TEXT.aboutMe}
        </Link>
      </li>
      <li>
        <Link
          href={PAGES_URL.work.main}
          className="text-body-md cursor-pointer font-bold text-neutral-700 hover:text-violet-600"
          data-testid="desktop-work-experience-link"
        >
          {TEXT.workExperience}
        </Link>
      </li>
      <li>
        <Link
          href={PAGES_URL.personal.main}
          className="text-body-md cursor-pointer font-bold text-neutral-700 hover:text-violet-600"
          data-testid="desktop-personal-projects-link"
        >
          {TEXT.personalProjects}
        </Link>
      </li>
    </ul>
  )
}

export default MenuDesktop
