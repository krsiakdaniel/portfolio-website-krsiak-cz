'use client'

import logo from '@/public/logo.webp'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type MenuToggleProps = {
  isOpen: boolean
  handleMenuToggle: () => void
}

const TEXTS = {
  logo: 'krsiak.cz',
  aboutMe: '👨‍💻 About Me',
  workExperience: '🖥️ Work Experience',
  personalProjects: '🚀 Personal Projects',
}

const URLS = {
  home: '/',
  aboutMe: '/about-me',
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

const MenuToggle = ({ isOpen, handleMenuToggle }: MenuToggleProps) => {
  return (
    <button onClick={handleMenuToggle} className="lg:hidden" aria-label="Toggle Menu">
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
    <ul className="hidden gap-8 lg:flex" id="menu">
      <li>
        <Link
          href={URLS.aboutMe}
          className="text-body-md cursor-pointer font-bold text-neutral-700 hover:text-violet-600"
          data-testid="desktop-about-me-link"
        >
          {TEXTS.aboutMe}
        </Link>
      </li>
      <li>
        <Link
          href={URLS.workExperience}
          className="text-body-md cursor-pointer font-bold text-neutral-700 hover:text-violet-600"
          data-testid="desktop-work-experience-link"
        >
          {TEXTS.workExperience}
        </Link>
      </li>
      <li>
        <Link
          href={URLS.personalProjects}
          className="text-body-md cursor-pointer font-bold text-neutral-700 hover:text-violet-600"
          data-testid="desktop-personal-projects-link"
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
          href={URLS.aboutMe}
          className="block border-b border-neutral-100 py-2 pl-3 pr-4 font-bold text-neutral-700 hover:bg-neutral-50 hover:text-violet-700"
          data-testid="mobile-about-me-link"
        >
          {TEXTS.aboutMe}
        </Link>
      </li>
      <li>
        <Link
          href={URLS.workExperience}
          className="block border-b border-neutral-100 py-2 pl-3 pr-4 font-bold text-neutral-700 hover:bg-neutral-50 hover:text-violet-700"
          data-testid="mobile-work-experience-link"
        >
          {TEXTS.workExperience}
        </Link>
      </li>
      <li>
        <Link
          href={URLS.personalProjects}
          className="block py-2 pl-3 pr-4 font-bold text-neutral-700 hover:bg-neutral-50 hover:text-violet-700"
          data-testid="mobile-personal-projects-link"
        >
          {TEXTS.personalProjects}
        </Link>
      </li>
    </ul>
  )
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  const [scroll, setScroll] = useState(0)

  const checkScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = (winScroll / height) * 100
    setScroll(scrolled)
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScroll)
    return () => {
      window.removeEventListener('scroll', checkScroll)
    }
  }, [])

  return (
    <header className="sticky top-0 z-20 border-b border-neutral-400 bg-white px-5">
      <div className="container mx-auto max-w-screen-xl px-5">
        <div className="flex items-center justify-between py-3">
          <Logo />
          <MenuDesktop />
          <MenuToggle isOpen={isOpen} handleMenuToggle={handleMenuToggle} />
        </div>
        {isOpen && <MenuMobile />}
      </div>

      <div className="absolute bottom-0 left-0 h-1 bg-violet-600" style={{ width: `${scroll}%` }}></div>
    </header>
  )
}

export default Header
