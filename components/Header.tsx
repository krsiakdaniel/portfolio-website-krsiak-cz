import logo from '@/public/favicon-32x32.png'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-neutral-400 bg-white px-5">
      <div className="container mx-auto max-w-screen-xl px-5">
        <div className="flex items-center justify-between py-3">
          <div>
            <Link href="/" className="group flex flex-row items-center gap-3">
              <div>
                <Image src={logo} alt="Logo" width={32} height={32} />
              </div>
              <p className="text-body-md cursor-pointer font-bold text-neutral-700 group-hover:text-violet-600">
                krsiak.cz
              </p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
