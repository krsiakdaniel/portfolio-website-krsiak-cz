'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <main className="container mx-auto">
      <div className="flex flex-col items-center text-center lg:py-28 md:py-20 py-10">
        <h2 className="lg:text-display-xl md:text-display-xl text-display-md font-semibold md:pb-4 pb-2">
          Something went wrong!
        </h2>
        <p className="md:text-body-lg text-body-md pb-10 text-neutral-700">
          The page you requested could not be found.
        </p>
        <button
          className="button flex items-center justify-center rounded-full text-neutral-100 font-semibold hover:opacity-90 px-6 py-4 text-body-sm bg-[#1F5D84]"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </main>
  )
}
