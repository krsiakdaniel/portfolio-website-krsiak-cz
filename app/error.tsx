'use client' // Error components must be Client Components

import { FC } from 'react'

import ErrorPageLayout from '@/components/layout/errors/ErrorPageLayout'

import { TEXT } from '@/localization/english'

import { ID } from '@/lib/utils/constants/ids/elementIds'

import { Errors } from '@/lib/utils/typeDefinitions/interfaces'

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
