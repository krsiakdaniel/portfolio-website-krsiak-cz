import Link from 'next/link'

import { LINK_LINKEDIN } from '@/utils/constants'

const Header = () => {
  return (
    <header className="sticky top-0 bg-white z-20 border-b border-neutral-400 px-5">
      <div className="container mx-auto px-5 max-w-screen-xl">
        <div className="flex py-5 justify-between items-center">
          <div className="flex flex-row gap-8 items-center">
            <Link href="/">
              <p className="text-body-md font-bold text-neutral-700 hover:text-purple-500 cursor-pointer">krsiak.cz</p>
            </Link>
          </div>
          <div className="md:flex md:flex-row md:gap-6">
            <div className="md:flex flex-row gap-6 items-center">
              <Link
                href={LINK_LINKEDIN}
                className="text-body-md font-bold uppercase text-neutral-700 hover:text-purple-500 cursor-pointer"
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
