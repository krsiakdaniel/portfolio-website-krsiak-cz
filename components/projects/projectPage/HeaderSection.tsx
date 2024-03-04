import { getGoBackLinkID } from '@/utils/getGoBackLink'
import { HeaderSectionProps } from '@/utils/types'
import Link from 'next/link'

const HeaderSection = ({ title, role, years, goBackLink, sectionID }: HeaderSectionProps) => {
  return (
    <div>
      <h1 className="text-5xl font-bold leading-none tracking-tight text-neutral-900 dark:text-white">{title}</h1>
      <h2 className="mt-4 text-4xl font-bold text-violet-600 dark:text-violet-600">
        {role}
        {years && <small className="text-md text-neutral-500">{` · ${years}`}</small>}
      </h2>
      <p className="mb-3 mt-4 text-neutral-600 dark:text-neutral-600">
        <Link href={getGoBackLinkID(goBackLink, sectionID)} className="text-neutral-500">
          ← Go back
        </Link>
      </p>
    </div>
  )
}

export default HeaderSection
