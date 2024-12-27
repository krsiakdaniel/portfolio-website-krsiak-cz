'use client' // Error components must be Client Components

import ErrorPageLayout from '@/components/layout/errors/ErrorPageLayout'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { TEXT } from '@/localization/english'

import { Errors } from '@/lib/utils/interfaces/interfaces'

type ErrorProps = Errors

const GlobalError = ({ error }: ErrorProps) => {
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
