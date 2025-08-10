import Link from 'next/link'

import IconArrow from '@/components/icons/IconArrow'

import { TEXT } from '@/localization/english'

import { getGoBackLinkID } from '@/lib/utils/helpers/page-navigation/getGoBackLink'
import { ArrowDirectionEnum } from '@/lib/utils/typeDefinitions/enums'

import { GoBackLinkProps } from '@/lib/utils/typeDefinitions/props/layout/projects/project-page'

const GoBackLink = ({ goBackLink, sectionID }: GoBackLinkProps) => {
  const goBackUrlWithID = getGoBackLinkID(goBackLink, sectionID)

  return (
    <div className="mt-4">
      <Link
        href={goBackUrlWithID}
        className="inline-flex items-center space-x-2 rounded-lg px-2 py-0.5 text-neutral-600 hover:bg-gray-100 hover:text-neutral-800"
      >
        <IconArrow arrowDirection={ArrowDirectionEnum.Left} /> <span>{TEXT.goBack}</span>
      </Link>
    </div>
  )
}

export default GoBackLink
