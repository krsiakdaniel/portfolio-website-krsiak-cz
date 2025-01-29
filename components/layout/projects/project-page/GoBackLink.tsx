import Link from 'next/link'
import { FC } from 'react'

import IconArrow from '@/components/icons/IconArrow'

import { TEXT } from '@/localization/english'

import { getGoBackLinkID } from '@/lib/utils/helpers/page-navigation/getGoBackLink'
import { ArrowDirectionEnum } from '@/lib/utils/typeDefinitions/enums'

import { GoBackLinkProps } from '@/lib/utils/typeDefinitions/props/layout/projects/project-page'

const GoBackLink: FC<GoBackLinkProps> = ({ goBackLink, sectionID }): JSX.Element => {
  const goBackUrlWithID = getGoBackLinkID(goBackLink, sectionID)

  return (
    <div className="mt-4">
      <Link
        href={goBackUrlWithID}
        className="inline-flex items-center space-x-2 text-neutral-600 hover:text-violet-800"
      >
        <IconArrow arrowDirection={ArrowDirectionEnum.Left} /> <span>{TEXT.goBack}</span>
      </Link>
    </div>
  )
}

export default GoBackLink
