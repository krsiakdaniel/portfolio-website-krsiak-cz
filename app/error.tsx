'use client' // Error components must be Client Components

import ErrorPageLayout from '@/components/layout/errors/ErrorPageLayout'

import { TEXT } from '@/localization/english'

import { ID } from '@/lib/utils/constants/ids/elementIds'

import { ErrorProps } from '@/lib/utils/typeDefinitions/props/shared/error'

const Error = ({ error }: ErrorProps) => {
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
