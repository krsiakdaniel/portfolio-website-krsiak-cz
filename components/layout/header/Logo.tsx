import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Paragraph from '@/components/shared/Paragraph'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import logo from '@/public/icons/png/icon-64x64.png'

const Logo: FC = (): JSX.Element => {
  return (
    <div>
      <Link
        href={PAGES_URL.home}
        className="group flex flex-row items-center justify-center gap-3"
        data-testid={DATA_TEST_IDS.headerLogo}
      >
        <div>
          <Image src={logo} width={32} height={32} alt="logo" loading="eager" />
        </div>
        <Paragraph marginTop="mt-0" size="text-md" customCss="cursor-pointer font-bold group-hover:text-violet-600">
          {TEXT.logo}
        </Paragraph>
      </Link>
    </div>
  )
}

export default Logo
