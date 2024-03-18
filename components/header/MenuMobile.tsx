import { TEXT } from '@/localization/texts_en'
import { ID, PAGES_URL } from '@/utils/constants'

import Link from 'next/link'

const MenuMobile = () => {
  return (
    <ul className="mb-5 mt-2 flex flex-col lg:hidden" id={ID.menu.mobile} data-testid={ID.menu.mobile}>
      <li>
        <Link
          href={PAGES_URL.aboutMe}
          className="block border-b border-neutral-100 py-2 pl-3 pr-4 font-bold text-neutral-700 hover:bg-neutral-50 hover:text-violet-700"
          data-testid="mobile-about-me-link"
        >
          {TEXT.aboutMe}
        </Link>
      </li>
      <li>
        <Link
          href={PAGES_URL.work.main}
          className="block border-b border-neutral-100 py-2 pl-3 pr-4 font-bold text-neutral-700 hover:bg-neutral-50 hover:text-violet-700"
          data-testid="mobile-work-experience-link"
        >
          {TEXT.workExperience}
        </Link>
      </li>
      <li>
        <Link
          href={PAGES_URL.personal.main}
          className="block py-2 pl-3 pr-4 font-bold text-neutral-700 hover:bg-neutral-50 hover:text-violet-700"
          data-testid="mobile-personal-projects-link"
        >
          {TEXT.personalProjects}
        </Link>
      </li>
    </ul>
  )
}

export default MenuMobile
