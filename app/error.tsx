'use client' // Error components must be Client Components

import { ErrorPageLayout } from '@/components/layout/ErrorPageLayout'
import { ID } from '@/utils/constants/ids/ids'
import { ErrorProps } from '@/utils/shared/componentProps'

export default function Error({ error, reset }: ErrorProps) {
  return (
    <ErrorPageLayout
      error={error}
      reset={reset}
      pageContainerId={ID.error.errGeneral}
      imgAlt="error"
      textMain="Sorry, something got tangled up."
      textSmall="Too many yarns, not enough time!"
    />
  )
}
