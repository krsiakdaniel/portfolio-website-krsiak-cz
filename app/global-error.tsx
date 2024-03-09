'use client'

import { ErrorPageLayout } from '@/components/layout/ErrorPageLayout'
import { ID_ERROR_GLOBAL } from '@/utils/constants'
import { ErrorProps } from '@/utils/types'

export default function GlobalError({ error, reset }: ErrorProps) {
  return (
    <ErrorPageLayout
      error={error}
      reset={reset}
      pageContainerId={ID_ERROR_GLOBAL}
      imgAlt="error-global"
      textMain="The page you requested could not be found."
      textSmall="It looks like we are fresh out of yarn!"
    />
  )
}
