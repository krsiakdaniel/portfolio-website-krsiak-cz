import { getGoBackLinkID } from '@/utils/getGoBackLink'
import { HeaderSectionProps } from '@/utils/types'
import Link from 'next/link'

const HeaderSection = ({ title, role, years, goBackLink }: HeaderSectionProps) => {
  return (
    <div>
      <h1 className="md:text-display-lg text-display-md font-bold">{title}</h1>
      <h2 className="text-display-xs font-semibold text-primary-500">
        {role}
        {years && <small className="text-neutral-600 text-body-md">{` · ${years}`}</small>}
      </h2>
      <Link href={getGoBackLinkID(goBackLink)} className="text-neutral-500 mb-8">
        ← Go back
      </Link>
    </div>
  )
}

export default HeaderSection
