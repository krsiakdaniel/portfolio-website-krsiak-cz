import { IconArrow } from '@/components/icons'
import Heading2 from '@/components/shared/Heading2'
import { getGoBackLinkID } from '@/utils/getGoBackLink'
import { HeaderSectionProps } from '@/utils/types'
import Link from 'next/link'

const HeaderSection = ({ title, role, years, company, goBackLink, sectionID }: HeaderSectionProps) => {
  return (
    <div className="mb-16">
      <h1 className="mb-2 text-5xl font-bold leading-none tracking-tight text-neutral-900 sm:text-7xl">{title}</h1>
      <Heading2 textColor="text-violet-600">
        {role}
        {years && <small className="text-md text-neutral-500">{` · ${years} · ${company}`}</small>}
      </Heading2>
      <p className="mb-3 mt-4">
        <Link
          href={getGoBackLinkID(goBackLink, sectionID)}
          className="inline-flex items-center text-neutral-500 hover:text-neutral-700"
        >
          <IconArrow type="left" /> Go back
        </Link>
      </p>
    </div>
  )
}

export default HeaderSection
