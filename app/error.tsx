'use client' // Error components must be Client Components

import { FC } from 'react'

import ErrorPageLayout from '@/components/layout/errors/ErrorPageLayout'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { TEXT } from '@/localization/english'

import { Errors } from '@/lib/utils/interfaces/interfaces'

type ErrorProps = Errors

const Error: FC<ErrorProps> = ({ error }): JSX.Element => {
  return (
    <ErrorPageLayout
      error={error}
      pageContainerId={ID.error.errGeneral}
      imgAlt={TEXT.error}
      description={TEXT.errorDescription}
      note={TEXT.errorNote}
    />
  )
}

export default Error
