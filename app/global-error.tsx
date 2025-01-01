'use client' // Error components must be Client Components

import { FC } from 'react'

import ErrorPageContainer from '@/components/pages/errors/ErrorPageContainer'

import { TEXT } from '@/localization/english'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { Errors } from '@/lib/utils/interfaces/interfaces'

type ErrorProps = Errors

const GlobalError: FC<ErrorProps> = ({ error }): JSX.Element => {
  return (
    <ErrorPageContainer
      error={error}
      pageContainerId={ID.error.errGlobal}
      imgAlt={TEXT.errorGlobalAlt}
      description={TEXT.errorGlobalDescription}
      note={TEXT.errorGlobalNote}
    />
  )
}

export default GlobalError
