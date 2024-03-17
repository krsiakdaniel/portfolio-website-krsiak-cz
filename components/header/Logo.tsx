import logo from '@/public/logo.webp'
import Image from 'next/image'
import Link from 'next/link'

const TEXTS = {
  logo: 'krsiak.cz',
}

const URLS = {
  home: '/',
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

export default Logo
