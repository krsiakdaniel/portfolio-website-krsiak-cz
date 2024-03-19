import { IconArrow } from '@/components/icons'
import { getGoBackLinkID } from '@/utils/getGoBackLink'
import { HeaderSectionProps } from '@/utils/types'
import Link from 'next/link'

const HeaderSection = ({ title, role, years, goBackLink, sectionID }: HeaderSectionProps) => {
  return (
    <div className="mb-16">
      <h1 className="text-5xl font-bold leading-none tracking-tight text-neutral-900 sm:text-7xl">{title}</h1>
      <h2 className="mt-4 text-4xl font-bold text-violet-600">
        {role}
        {years && <small className="text-md text-neutral-500">{` · ${years}`}</small>}
      </h2>
      <p className="mb-3 mt-4">
        <Link
          href={getGoBackLinkID(goBackLink, sectionID)}
          className="flex items-center text-neutral-500 hover:text-neutral-700"
        >
          <IconArrow type="left" /> Go back
        </Link>
      </p>
    </div>
  )
}

export default HeaderSection
