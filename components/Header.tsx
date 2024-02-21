import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="sticky top-0 bg-white z-10 border-b border-neutral-400">
      <div className="container mx-auto">
        <div className="flex py-4 justify-between items-center">
          <div className="flex flex-row gap-8 items-center">
            <Link href="/">
              <p className="text-body-md font-bold text-neutral-700 hover:text-primary-600 px-4 cursor-pointer">
                krsiak.cz
              </p>
            </Link>
          </div>
          <div className="md:flex md:flex-row md:gap-6">
            <div className="md:flex flex-row gap-6 items-center">
              <Link
                href="https://www.linkedin.com/in/krsiakdaniel/"
                className="text-body-md font-bold uppercase text-neutral-700 hover:text-primary-600 px-4 cursor-pointer"
              >
                LinkedIn →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
