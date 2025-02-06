import { FC } from 'react'

import GoBackLink from '@/components/layout/projects/project-page/GoBackLink'
import Heading1 from '@/components/shared/Heading1'
import Heading2 from '@/components/shared/Heading2'

import { MIDDLE_DOT } from '@/lib/utils/constants/specialCharacters'

import { HeaderSectionProps } from '@/lib/utils/typeDefinitions/props/layout/projects/project-page'

const HeaderSection: FC<HeaderSectionProps> = ({
  icon,
  title,
  role,
  years,
  company,
  goBackLink,
  sectionID,
}): JSX.Element => {
  return (
    <div className="mt-10">
      <Heading1 textColor="text-neutral-900">
        <span className="select-none">{icon}</span> <span className="ml-0">{title}</span>
      </Heading1>

      <Heading2 customCss="mt-2">
        <span>{role}</span>
        {years && (
          <span className="ml-0 block text-lg font-normal text-neutral-600 md:ml-2 md:inline">
            <span className="ml-0">{`${MIDDLE_DOT} ${years}`}</span>
            <span className="ml-1">{`${MIDDLE_DOT} ${company}`}</span>
          </span>
        )}
      </Heading2>

      <GoBackLink goBackLink={goBackLink} sectionID={sectionID} />
    </div>
  )
}

export default HeaderSection
