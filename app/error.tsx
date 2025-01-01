'use client' // Error components must be Client Components

import { FC } from 'react'

import ErrorPageContainer from '@/components/pages/errors/ErrorPageContainer'

import { TEXT } from '@/localization/english'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { Errors } from '@/lib/utils/interfaces/interfaces'

type ErrorProps = Errors

const Error: FC<ErrorProps> = ({ error }): JSX.Element => {
  return (
    <ErrorPageContainer
      error={error}
      pageContainerId={ID.error.errGeneral}
      imgAlt={TEXT.error}
      description={TEXT.errorDescription}
      note={TEXT.errorNote}
    />
  )
}

export default Error
