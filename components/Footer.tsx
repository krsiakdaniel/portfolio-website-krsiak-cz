import React from 'react'

const Footer = () => {
  const contacts = [
    { emoji: '📱', text: '(+420) 734 496 308', href: 'tel:+420734496308' },
    { emoji: '📧', text: 'krsiak.daniel@gmail.com', href: 'mailto:krsiak.daniel@gmail.com' },
    {
      emoji: '💬',
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/krsiakdaniel/',
    },
  ]
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto" id="#contact">
        <div className="flex flex-col md:py-30 pt-12 pb-20 md:gap-24 gap-16">
          <div>
            <h3 className="md:text-display-lg text-display-md font-semibold pb-0 text-white uppercase">Contact me</h3>
            <p className="lg:text-body-md text-body-sm font-normal text-white mb-4">
              You can call me, send email or chat with me on LinkedIn.
            </p>
            <div className="mt-8">
              <ul>
                {contacts.map((contact) => (
                  <li className="text-display-xs font-normal" key={contact.href}>
                    {contact.emoji}{' '}
                    <a href={contact.href} className="hover:text-primary-600 underline hover:no-underline">
                      {contact.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="pb-8">
          <p>
            Copyright © 2024.{' '}
            <a href="https://www.krsiak.cz/" className="hover:text-primary-600 underline hover:no-underline">
              krsiak.cz
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
