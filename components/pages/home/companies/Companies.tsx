import DividerWithText from '@/components/shared/DividerWithText'
import Heading from '@/components/shared/Heading'
import ImageComponent from '@/components/shared/ImageComponent'

import bata from '@/public/images/svg/logo/bata.svg'
import groupon from '@/public/images/svg/logo/groupon.svg'
import komercniBanka from '@/public/images/svg/logo/komercni-banka.svg'
import kooperativa from '@/public/images/svg/logo/kooperativa.svg'
import microsoft from '@/public/images/svg/logo/microsoft.svg'
import smartsupp from '@/public/images/svg/logo/smartsupp.svg'

import { ImageLoadingEnum } from '@/lib/types/enums'
import { DIVIDER_WITH_TEXT, IMAGE_ALT, TEXT } from '@/localization'

import { COMPANIES_LOGOS_SIZES } from './Companies.constants'

const Companies = () => {
  const logosGridCss =
    'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16 justify-items-center'
  const imgWrapperCss = 'flex items-center justify-center'

  // Animation classes for staggered infinite scaling using CSS custom property for delay
  const animationClasses = [
    'animate-pulse-scale',
    'animate-pulse-scale [--pulse-delay:2s]',
    'animate-pulse-scale [--pulse-delay:4s]',
    'animate-pulse-scale [--pulse-delay:6s]',
    'animate-pulse-scale [--pulse-delay:8s]',
    'animate-pulse-scale [--pulse-delay:10s]',
  ]

  return (
    <section>
      <div className="mt-20">
        <DividerWithText text={DIVIDER_WITH_TEXT.companies} />
        <div className="text-center">
          <Heading as="h2">{TEXT.workedForCompanies}</Heading>
        </div>

        <div className={logosGridCss}>
          <div className={imgWrapperCss}>
            <ImageComponent
              src={kooperativa}
              width={COMPANIES_LOGOS_SIZES.KOOPERATIVA.WIDTH}
              alt={IMAGE_ALT.altKooperativa}
              loading={ImageLoadingEnum.LAZY}
              customCss={animationClasses[0]}
            />
          </div>
          <div className={imgWrapperCss}>
            <ImageComponent
              src={smartsupp}
              width={COMPANIES_LOGOS_SIZES.SMARTSUPP.WIDTH}
              alt={IMAGE_ALT.altSmartsupp}
              loading={ImageLoadingEnum.LAZY}
              customCss={animationClasses[1]}
            />
          </div>
          <div className={imgWrapperCss}>
            <ImageComponent
              src={microsoft}
              width={COMPANIES_LOGOS_SIZES.MICROSOFT.WIDTH}
              alt={IMAGE_ALT.altMicrosoft}
              loading={ImageLoadingEnum.LAZY}
              customCss={animationClasses[2]}
            />
          </div>

          <div className={imgWrapperCss}>
            <ImageComponent
              src={bata}
              width={COMPANIES_LOGOS_SIZES.BATA.WIDTH}
              alt={IMAGE_ALT.altBata}
              loading={ImageLoadingEnum.LAZY}
              customCss={animationClasses[3]}
            />
          </div>
          <div className={imgWrapperCss}>
            <ImageComponent
              src={komercniBanka}
              width={COMPANIES_LOGOS_SIZES.KOMERCNI_BANKA.WIDTH}
              alt={IMAGE_ALT.altKomercniBanka}
              loading={ImageLoadingEnum.LAZY}
              customCss={animationClasses[4]}
            />
          </div>
          <div className={imgWrapperCss}>
            <ImageComponent
              src={groupon}
              width={COMPANIES_LOGOS_SIZES.GROUPON.WIDTH}
              alt={IMAGE_ALT.altGroupon}
              loading={ImageLoadingEnum.LAZY}
              customCss={animationClasses[5]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Companies
