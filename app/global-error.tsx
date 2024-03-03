'use client'

import PageContainer from '@/components/layout/PageContainer'
import imgError from '@/public/images/illustrations/error.png'
import { ID_ERROR_GLOBAL } from '@/utils/constants'
import Image from 'next/image'
import { useEffect } from 'react'

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <PageContainer id={ID_ERROR_GLOBAL}>
      <div className="flex flex-col items-center text-center">
        <Image src={imgError} alt="404" width={400} height={417} className="bt-5 mb-10" />
        <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-violet-600 dark:text-violet-600 lg:text-9xl">
          Error
        </h1>
        <p className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
          The page you requested could not be found.
        </p>
        <p className="mb-4 text-lg font-light text-neutral-600 dark:text-neutral-600">
          It looks like we are fresh out of yarn!
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="mb-2 rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Try again
        </button>
      </div>
    </PageContainer>
  )
}
