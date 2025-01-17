import Link from 'next/link'
import { FC } from 'react'

import IconArrow from '@/components/icons/IconArrow'
import Heading1 from '@/components/shared/Heading1'
import Heading2 from '@/components/shared/Heading2'

import { TEXT } from '@/localization/english'

import { getGoBackLinkID } from '@/lib/utils/helpers/page-navigation/getGoBackLink'
import { NavigationDirectionEnum } from '@/lib/utils/typeDefinitions/enums'

import { HeaderSectionProps } from '@/lib/utils/typeDefinitions/props/layout/projects/project-page'

const HeaderSection: FC<HeaderSectionProps> = ({ title, role, years, company, goBackLink, sectionID }): JSX.Element => {
  return (
    <div className="mt-10">
      <Heading1 textColor="text-neutral-900">{title}</Heading1>
      <div className="mt-2">
        <Heading2>
          {role}
          {years && <small className="text-md text-neutral-500">{` · ${years} · ${company}`}</small>}
        </Heading2>
      </div>
      <div className="mt-4">
        <Link
          href={getGoBackLinkID(goBackLink, sectionID)}
          className="inline-flex items-center text-neutral-500 hover:text-neutral-700"
        >
          <IconArrow direction={NavigationDirectionEnum.Left} /> {TEXT.goBack}
        </Link>
      </div>
    </div>
  )
}

export default HeaderSection
