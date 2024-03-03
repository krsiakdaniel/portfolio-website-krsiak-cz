'use client' // Error components must be Client Components

import PageContainer from '@/components/layout/PageContainer'
import imgError from '@/public/images/illustrations/error.png'
import { ID_ERROR } from '@/utils/constants'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <PageContainer id={ID_ERROR}>
      <div className="mb-20">
        <div className="flex flex-col items-center text-center">
          <Image src={imgError} alt="404" width={400} height={417} className="mb-10 bt-5" />
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-purple-600 dark:text-purple-500 uppercase">
            Error
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-neutral-900 md:text-4xl dark:text-white">
            Sorry, something got tangled up.
          </p>
          <p className="mb-4 text-lg font-light text-neutral-600 dark:text-neutral-600">
            Too many yarns, not enough time!
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Try again
          </button>
        </div>
      </div>
    </PageContainer>
  )
}
