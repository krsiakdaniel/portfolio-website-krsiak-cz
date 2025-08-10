import GoBackLink from '@/components/layout/projects/project-page/GoBackLink'
import Heading from '@/components/shared/Heading'

import { MIDDLE_DOT } from '@/lib/utils/constants/specialCharacters'

import { HeaderSectionProps } from '@/lib/utils/typeDefinitions/props/layout/projects/project-page'

const HeaderSection = ({
  icon,
  ariaLabel,
  title,
  role,
  years,
  company,
  goBackLink,
  sectionID,
}: HeaderSectionProps) => {
  return (
    <div className="mt-10">
      <Heading as="h1" textColor="text-neutral-900">
        <span role="img" aria-label={ariaLabel} className="select-none">
          {icon}
        </span>{' '}
        <span className="ml-0">{title}</span>
      </Heading>

      <Heading as="h2" customCss="mt-2">
        <span>{role}</span>
        {years && (
          <span className="ml-0 block text-lg font-normal text-neutral-600 md:ml-2 md:inline">
            <span className="ml-0">{`${MIDDLE_DOT} ${years}`}</span>
            <span className="ml-1">{`${MIDDLE_DOT} ${company}`}</span>
          </span>
        )}
      </Heading>

      <GoBackLink goBackLink={goBackLink} sectionID={sectionID} />
    </div>
  )
}

export default HeaderSection
