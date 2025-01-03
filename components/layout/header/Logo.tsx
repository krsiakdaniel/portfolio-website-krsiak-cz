import Image from 'next/image'
import Link from 'next/link'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import logo from '@/public/images/webp/logo.webp'

const Logo = (): JSX.Element => {
  return (
    <div>
      <Link
        href={PAGES_URL.home}
        className="group flex flex-row items-center gap-3"
        data-testid={DATA_TEST_IDS.headerLogo}
      >
        <div>
          <Image src={logo} width={32} height={32} alt="logo" loading="eager" />
        </div>
        <p className="text-body-md cursor-pointer font-bold text-neutral-700 group-hover:text-violet-600">
          {TEXT.logo}
        </p>
      </Link>
    </div>
  )
}

export default Logo
