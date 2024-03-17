import { MENU_MOBILE_ID, TEXTS, URLS } from '@/utils/constants'
import Link from 'next/link'

const MenuMobile = () => {
  return (
    <ul className="mb-5 mt-2 flex flex-col lg:hidden" id={MENU_MOBILE_ID} data-testid={MENU_MOBILE_ID}>
      <li>
        <Link
          href={URLS.aboutMe}
          className="block border-b border-neutral-100 py-2 pl-3 pr-4 font-bold text-neutral-700 hover:bg-neutral-50 hover:text-violet-700"
          data-testid="mobile-about-me-link"
        >
          {TEXTS.aboutMe}
        </Link>
      </li>
      <li>
        <Link
          href={URLS.workExperience}
          className="block border-b border-neutral-100 py-2 pl-3 pr-4 font-bold text-neutral-700 hover:bg-neutral-50 hover:text-violet-700"
          data-testid="mobile-work-experience-link"
        >
          {TEXTS.workExperience}
        </Link>
      </li>
      <li>
        <Link
          href={URLS.personalProjects}
          className="block py-2 pl-3 pr-4 font-bold text-neutral-700 hover:bg-neutral-50 hover:text-violet-700"
          data-testid="mobile-personal-projects-link"
        >
          {TEXTS.personalProjects}
        </Link>
      </li>
    </ul>
  )
}

export default MenuMobile
