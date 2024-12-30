'use client' // Error components must be Client Components

import { FC } from 'react'

import ErrorPageLayout from '@/components/layout/errors/ErrorPageLayout'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { TEXT } from '@/localization/english'

import { Errors } from '@/lib/utils/interfaces/interfaces'

type ErrorProps = Errors

const GlobalError: FC<ErrorProps> = ({ error }): JSX.Element => {
  return (
    <ErrorPageLayout
      error={error}
      pageContainerId={ID.error.errGlobal}
      imgAlt={TEXT.errorGlobalAlt}
      description={TEXT.errorGlobalDescription}
      note={TEXT.errorGlobalNote}
    />
  )
}

export default GlobalError
