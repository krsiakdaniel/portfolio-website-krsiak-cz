import { IconArrow } from '@/components/icons'
import Heading1 from '@/components/shared/Heading1'
import Heading2 from '@/components/shared/Heading2'
import { getGoBackLinkID } from '@/utils/helpers/getGoBackLink'
import { HeaderSectionProps } from '@/utils/shared/componentProps'
import Link from 'next/link'

const HeaderSection = ({ title, role, years, company, goBackLink, sectionID }: HeaderSectionProps) => {
  return (
    <div className="mb-16">
      <Heading1 textColor="text-neutral-900">{title}</Heading1>
      <div className="mt-2">
        <Heading2>
          {role}
          {years && <small className="text-md text-neutral-500">{` · ${years} · ${company}`}</small>}
        </Heading2>
      </div>
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
