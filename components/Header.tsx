import React from 'react'
import Link from 'next/link'

const Header = () => {
  const navigation = [
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ]
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex py-6 justify-between items-center">
          <div className="flex flex-row gap-8 items-center">
            <Link href="/">
              <p className="text-body-md font-bold text-neutral-700 hover:text-primary-600 px-4 cursor-pointer">
                krsiak.cz
              </p>
            </Link>
          </div>
          <div className="hidden md:flex md:flex-row md:gap-6 md:visible">
            <div className="md:flex flex-row gap-6 items-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-body-md font-bold uppercase text-neutral-700 hover:text-primary-600 px-4 cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
