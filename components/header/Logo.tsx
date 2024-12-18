import { TEXT } from '@/localization/english'
import logo from '@/public/images/webp/logo.webp'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <div>
      <Link href={PAGES_URL.home} className="group flex flex-row items-center gap-3" data-testid={DATA_TEST_IDS.header}>
        <div>
          <Image src={logo} alt="logo" width={32} height={32} loading="eager" />
        </div>
        <p className="text-body-md cursor-pointer font-bold text-neutral-700 group-hover:text-violet-600">
          {TEXT.logo}
        </p>
      </Link>
    </div>
  )
}

export default Logo
