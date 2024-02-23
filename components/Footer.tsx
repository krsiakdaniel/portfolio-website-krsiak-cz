import React from 'react'
import Link from 'next/link'

const Footer = () => {
  interface Contact {
    emoji: string
    text: string
    href: string
  }

  const contacts: Contact[] = [
    { emoji: '📱', text: '(+420) 734 496 308', href: 'tel:+420734496308' },
    { emoji: '📧', text: 'krsiak.daniel@gmail.com', href: 'mailto:krsiak.daniel@gmail.com' },
    {
      emoji: '💬',
      text: 'LinkedIn →',
      href: 'https://www.linkedin.com/in/krsiakdaniel/',
    },
  ]
  return (
    <footer id="contact" className="bg-neutral-900 text-white">
      <div className="container mx-auto">
        <div className="flex">
          <div>
            <h3 className="md:text-display-lg text-display-md font-semibold pt-8 text-white uppercase">Contact me</h3>
            <p className="text-body-md font-normal text-white mb-8">
              You can call me, send email or chat with me on LinkedIn.
            </p>
            <div className="mb-8">
              <ul>
                {contacts.map((item) => (
                  <li className="text-body-md font-normal" key={item.href}>
                    {item.emoji}{' '}
                    <a href={item.href} className="hover:text-primary-500 underline hover:no-underline">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="pb-8">
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
