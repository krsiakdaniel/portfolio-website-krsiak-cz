'use client'

import imgError from '@/public/images/error.png'
import Image from 'next/image'
import { useEffect } from 'react'

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center flex flex-col items-center">
            <Image src={imgError} alt="404" width={400} height={417} className="mb-10 bt-5" />
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-purple-600 dark:text-purple-500">
              Error
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              The page you requested could not be found.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              It looks like we are fresh out of yarn!
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
      </div>
    </>
  )
}
