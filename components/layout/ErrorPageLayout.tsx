import Image from 'next/image'
import { useEffect } from 'react'

import PageContainer from '@/components/layout/PageContainer'
import Heading1 from '@/components/shared/Heading1'

import { ErrorProps } from '@/utils/interfaces/componentProps'

import imgError from '@/public/images/webp/error.webp'

type ErrorPageLayoutProps = {
  pageContainerId: string
  imgAlt: string
  textMain: string
  textSmall: string
} & ErrorProps

export const ErrorPageLayout = ({
  error,
  reset,
  pageContainerId,
  imgAlt,
  textMain,
  textSmall,
}: ErrorPageLayoutProps) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <PageContainer id={pageContainerId}>
      <div className="flex flex-col items-center text-center">
        <Image src={imgError} alt={imgAlt} width={400} height={417} loading="eager" className="bt-5 mb-10" />
        <Heading1 textSize="9xl" textSizeSM="9xl" textSizeLG="9xl">
          Error
        </Heading1>
        <p className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">{textMain}</p>
        <p className="mt-2 text-lg font-light text-neutral-600">{textSmall}</p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-8 rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300"
        >
          Try again
        </button>
      </div>
    </PageContainer>
  )
}
