'use client' // Error components must be Client Components

import { ErrorPageLayout } from '@/components/layout/ErrorPageLayout'

import { ID } from '@/utils/constants/ids/elementIds'

import { ErrorProps } from '@/utils/interfaces/componentProps'

export default function GlobalError({ error, reset }: ErrorProps) {
  return (
    <ErrorPageLayout
      error={error}
      reset={reset}
      pageContainerId={ID.error.errGlobal}
      imgAlt="error-global"
      textMain="The page you requested could not be found."
      textSmall="It looks like we are fresh out of yarn!"
    />
  )
}
