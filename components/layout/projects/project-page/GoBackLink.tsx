import Link from 'next/link'

import { ArrowRight } from 'lucide-react'

import { getGoBackLinkID } from '@/lib/utils/helpers/getGoBackLink'

import { TEXT } from '@/localization'

import { GoBackLinkProps } from './GoBackLink.types'

const GoBackLink = ({ goBackLink, sectionID }: GoBackLinkProps) => {
  const goBackUrlWithID = getGoBackLinkID(goBackLink, sectionID)

  return (
    <div className="mt-4">
      <Link
        href={goBackUrlWithID}
        className="inline-flex items-center space-x-2 rounded-lg px-2 py-0.5 text-neutral-600 hover:bg-gray-100 hover:text-neutral-800"
      >
        <ArrowRight aria-hidden="true" className="block h-4 w-4 rotate-180" />{' '}
        <span>{TEXT.goBack}</span>
      </Link>
    </div>
  )
}

export default GoBackLink
