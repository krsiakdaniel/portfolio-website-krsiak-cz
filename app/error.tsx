'use client' // Error components must be Client Components

import ErrorPageLayout from '@/components/layout/errors/ErrorPageLayout'

import { TEXT } from '@/localization/english'

import { ID } from '@/lib/utils/constants/ids/elementIds'

import { ErrorProps } from '@/lib/utils/typeDefinitions/props/shared/error'

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
