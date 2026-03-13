'use client' // Error components must be Client Components
import ErrorPageLayout from '@/components/layout/errors/ErrorPageLayout'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { ErrorProps } from '@/lib/utils/typeDefinitions/props/shared/error'

import { TEXT } from '@/localization'

const Error = ({ error, unstable_retry }: ErrorProps) => {
  return (
    <ErrorPageLayout
      error={error}
      unstable_retry={unstable_retry}
      pageContainerId={ID.error.errGeneral}
      imgAlt={TEXT.error}
      description={TEXT.errorDescription}
      note={TEXT.errorNote}
    />
  )
}

export default Error
