import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer id="contact" className="">
      <div className="container mx-auto">
        <div className="flex py-4 border-t border-dashed border-neutral-300">
          <p>
            Copyright © 2024 |{' '}
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
