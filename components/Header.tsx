'use client'

import logo from '@/public/logo.webp'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

type MenuToggleProps = {
  isOpen: boolean
  handleToggle: () => void
}

const TEXTS = {
  logo: 'krsiak.cz',
  workExperience: 'Work Experience',
  personalProjects: 'Personal Projects',
}

const URLS = {
  home: '/',
  workExperience: '/work-experience',
  personalProjects: '/personal-projects',
}

const Logo = () => {
  return (
    <div>
      <Link href={URLS.home} className="group flex flex-row items-center gap-3" data-testid="header-logo">
        <div>
          <Image src={logo} alt="logo" width={32} height={32} />
        </div>
        <p className="text-body-md cursor-pointer font-bold text-neutral-700 group-hover:text-violet-600">
          {TEXTS.logo}
        </p>
      </Link>
    </div>
  )
}

const MenuToggle = ({ isOpen, handleToggle }: MenuToggleProps) => {
  return (
    <button onClick={handleToggle} className="lg:hidden">
      {!isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 hover:text-violet-700"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 hover:text-violet-700"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      )}
    </button>
  )
}

const MenuDesktop = () => {
  return (
    <ul className="hidden gap-4 lg:flex" id="menu">
      <li>
        <Link
          href={URLS.workExperience}
          className="text-body-md cursor-pointer font-bold text-neutral-700 hover:text-violet-600"
        >
          {TEXTS.workExperience}
        </Link>
      </li>
      <li>
        <Link
          href={URLS.personalProjects}
          className="text-body-md cursor-pointer font-bold text-neutral-700 hover:text-violet-600"
        >
          {TEXTS.personalProjects}
        </Link>
      </li>
    </ul>
  )
}

const MenuMobile = () => {
  return (
    <ul className="mb-5 mt-2 flex flex-col lg:hidden" id="mobile-menu">
      <li>
        <Link
          href={URLS.workExperience}
          className="block border-b border-neutral-100 py-2 pl-3 pr-4 font-bold text-neutral-700 hover:bg-neutral-50 hover:text-violet-700"
        >
          {TEXTS.workExperience}
        </Link>
      </li>
      <li>
        <Link
          href={URLS.personalProjects}
          className="block py-2 pl-3 pr-4 font-bold text-neutral-700 hover:bg-neutral-50 hover:text-violet-700"
        >
          {TEXTS.personalProjects}
        </Link>
      </li>
    </ul>
  )
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="sticky top-0 z-20 border-b border-neutral-400 bg-white px-5">
      <div className="container mx-auto max-w-screen-xl px-5">
        <div className="flex items-center justify-between py-3">
          <Logo />
          <MenuDesktop />
          <MenuToggle isOpen={isOpen} handleToggle={handleToggle} />
        </div>
        {isOpen && <MenuMobile />}
      </div>
    </header>
  )
}

export default Header
