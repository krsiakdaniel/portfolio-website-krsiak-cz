'use client' // Error components must be Client Components

import ErrorPageLayout from '@/components/layout/errors/ErrorPageLayout'

import { TEXT } from '@/localization'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { ErrorProps } from '@/lib/utils/typeDefinitions/props/shared/error'

const GlobalError = ({ error, unstable_retry }: ErrorProps) => {
  return (
    <ErrorPageLayout
      error={error}
      unstable_retry={unstable_retry}
      pageContainerId={ID.error.errGlobal}
      imgAlt={TEXT.errorGlobalAlt}
      description={TEXT.errorGlobalDescription}
      note={TEXT.errorGlobalNote}
    />
  )
}

export default GlobalError
