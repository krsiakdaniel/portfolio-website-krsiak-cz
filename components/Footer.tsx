import React from 'react'
import Link from 'next/link'

const getCurrentYear = () => {
  return new Date().getFullYear()
}

const Footer = () => {
  return (
    <footer id="contact" className="">
      <div className="container mx-auto">
        <div className="flex py-4 border-t border-dashed border-neutral-500">
          <p className="text-neutral-500">
            Copyright © {getCurrentYear()} |{' '}
            <Link href="/" className="hover:text-primary-500 underline hover:no-underline">
              krsiak.cz
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
