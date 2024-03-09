import PageContainer from '@/components/layout/PageContainer'
import imgError from '@/public/images/illustrations/error.webp'
import { ErrorProps } from '@/utils/types'
import Image from 'next/image'
import { useEffect } from 'react'

type Props = {
  pageContainerId: string
  imgAlt: string
  textMain: string
  textSmall: string
} & ErrorProps

export const ErrorPageLayout = ({ error, reset, pageContainerId, imgAlt, textMain, textSmall }: Props) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <PageContainer id={pageContainerId}>
      <div className="flex flex-col items-center text-center">
        <Image src={imgError} alt={imgAlt} width={400} height={417} className="bt-5 mb-10" />
        <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-violet-600 lg:text-9xl">Error</h1>
        <p className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">{textMain}</p>
        <p className="mb-4 text-lg font-light text-neutral-600">{textSmall}</p>
        <button
          type="button"
          onClick={() => reset()}
          className="mb-2 rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300"
        >
          Try again
        </button>
      </div>
    </PageContainer>
  )
}
