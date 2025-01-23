import { FC } from 'react'

import Heading1 from '@/components/shared/Heading1'
import Heading2 from '@/components/shared/Heading2'

import { HeaderSectionProps } from '@/lib/utils/typeDefinitions/props/layout/projects/project-page'
import GoBackLink from './GoBackLink'

const HeaderSection: FC<HeaderSectionProps> = ({ title, role, years, company, goBackLink, sectionID }): JSX.Element => {
  return (
    <div className="mt-10">
      <Heading1 textColor="text-neutral-900">{title}</Heading1>

      <Heading2 customCss="mt-2">
        {role}
        {years && <small className="text-md text-neutral-500">{` · ${years} · ${company}`}</small>}
      </Heading2>

      <GoBackLink goBackLink={goBackLink} sectionID={sectionID} />
    </div>
  )
}

export default HeaderSection
