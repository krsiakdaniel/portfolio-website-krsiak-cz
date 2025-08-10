import Link from 'next/link'

import ImageComponent from '@/components/shared/ImageComponent'
import Paragraph from '@/components/shared/Paragraph'

import { IMAGE_ALT, TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'

import logo from '@/public/icons/webp/logo.webp'
import { HEADER_LOGO } from './constants'

const Logo = () => {
  return (
    <>
      <Link
        href={PAGES_URL.home}
        className="group flex flex-row items-center justify-center gap-3"
        data-testid={DATA_TEST_IDS.headerLogo}
      >
        <div>
          <ImageComponent
            src={logo}
            width={HEADER_LOGO.WIDTH}
            height={HEADER_LOGO.HEIGHT}
            alt={IMAGE_ALT.altLogo}
            priority={true}
            loading={ImageLoading.EAGER}
            sizes={`${HEADER_LOGO.WIDTH}px`}
          />
        </div>
        <Paragraph
          marginTop="mt-0"
          size="text-md"
          customCss="select-none cursor-pointer font-bold group-hover:text-violet-800"
        >
          {TEXT.logo}
        </Paragraph>
      </Link>
    </>
  )
}

export default Logo
