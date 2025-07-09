import Link from 'next/link'
import { FC } from 'react'

import ImageComponent from '@/components/shared/ImageComponent'
import Paragraph from '@/components/shared/Paragraph'

import { IMAGE_ALT, TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'

import logo from '@/public/icons/webp/logo.webp'

const IMAGE_WIDTH = 32
const IMAGE_HEIGHT = 32

const Logo: FC = (): JSX.Element => {
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
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            alt={IMAGE_ALT.altLogo}
            loading={ImageLoading.EAGER}
            sizes={`${IMAGE_WIDTH}px`}
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
