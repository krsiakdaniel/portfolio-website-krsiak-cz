import DividerWithText from '@/components/shared/DividerWithText'
import Heading from '@/components/shared/Heading'
import ImageComponent from '@/components/shared/ImageComponent'

import { DIVIDER_WITH_TEXT, IMAGE_ALT, TEXT } from '@/localization/english'

import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'

import bata from '@/public/images/svg/logo/bata.svg'
import groupon from '@/public/images/svg/logo/groupon.svg'
import komercniBanka from '@/public/images/svg/logo/komercni-banka.svg'
import kooperativa from '@/public/images/svg/logo/kooperativa.svg'
import microsoft from '@/public/images/svg/logo/microsoft.svg'
import smartsupp from '@/public/images/svg/logo/smartsupp.svg'
import { COMPANY_LOGOS } from './constants'

const Companies = () => {
  const logosGrid =
    'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16 justify-items-center'
  const imgWrapper = 'flex items-center justify-center'

  // Animation classes for staggered infinite scaling using custom CSS delays
  const animationClasses = [
    'animate-pulse-scale',
    'animate-pulse-scale-delay-1',
    'animate-pulse-scale-delay-2',
    'animate-pulse-scale-delay-3',
    'animate-pulse-scale-delay-4',
    'animate-pulse-scale-delay-5',
  ]

  return (
    <section>
      <div className="mt-20">
        <DividerWithText text={DIVIDER_WITH_TEXT.companies} />
        <div className="text-center">
          <Heading as="h2">{TEXT.workedForCompanies}</Heading>
        </div>

        <div className={logosGrid}>
          <div className={imgWrapper}>
            <ImageComponent
              src={kooperativa}
              width={COMPANY_LOGOS.KOOPERATIVA.WIDTH}
              alt={IMAGE_ALT.altKooperativa}
              loading={ImageLoading.LAZY}
              customCss={animationClasses[0]}
            />
          </div>
          <div className={imgWrapper}>
            <ImageComponent
              src={smartsupp}
              width={COMPANY_LOGOS.SMARTSUPP.WIDTH}
              alt={IMAGE_ALT.altSmartsupp}
              loading={ImageLoading.LAZY}
              customCss={animationClasses[1]}
            />
          </div>
          <div className={imgWrapper}>
            <ImageComponent
              src={microsoft}
              width={COMPANY_LOGOS.MICROSOFT.WIDTH}
              alt={IMAGE_ALT.altMicrosoft}
              loading={ImageLoading.LAZY}
              customCss={animationClasses[2]}
            />
          </div>

          <div className={imgWrapper}>
            <ImageComponent
              src={bata}
              width={COMPANY_LOGOS.BATA.WIDTH}
              alt={IMAGE_ALT.altBata}
              loading={ImageLoading.LAZY}
              customCss={animationClasses[3]}
            />
          </div>
          <div className={imgWrapper}>
            <ImageComponent
              src={komercniBanka}
              width={COMPANY_LOGOS.KOMERCNI_BANKA.WIDTH}
              alt={IMAGE_ALT.altKomercniBanka}
              loading={ImageLoading.LAZY}
              customCss={animationClasses[4]}
            />
          </div>
          <div className={imgWrapper}>
            <ImageComponent
              src={groupon}
              width={COMPANY_LOGOS.GROUPON.WIDTH}
              alt={IMAGE_ALT.altGroupon}
              loading={ImageLoading.LAZY}
              customCss={animationClasses[5]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Companies
