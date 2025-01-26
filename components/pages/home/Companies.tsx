import { FC } from 'react'

import DividerWithText from '@/components/shared/DividerWithText'
import Heading2 from '@/components/shared/Heading2'
import ImageComponent from '@/components/shared/ImageComponent'

import { DIVIDER_WITH_TEXT, IMAGE_ALT, TEXT } from '@/localization/english'

import groupon from '@/public/images/svg/logo/groupon.svg'
import ibm from '@/public/images/svg/logo/ibm.svg'
import komercniBanka from '@/public/images/svg/logo/komercni-banka.svg'
import kooperativa from '@/public/images/svg/logo/kooperativa.svg'
import microsoft from '@/public/images/svg/logo/microsoft.svg'
import rwsMoravia from '@/public/images/svg/logo/rws-moravia.svg'
import smartsupp from '@/public/images/svg/logo/smartsupp.svg'

const WIDTH_MICROSOFT = 256
const WIDTH_SMARTSUPP = 256
const WIDTH_KOOPERATIVA = 256
const WIDTH_IBM = 130
const WIDTH_RWS_MORAVIA = 200
const WIDTH_KOMERCNI_BANKA = 130
const WIDTH_GROUPON = 130

const Companies: FC = (): JSX.Element => {
  const logosWrapperCss = 'flex flex-col items-center justify-center lg:mt-16 lg:flex-row lg:gap-16'
  const imageCss = 'mt-16 lg:mt-0'

  return (
    <section>
      <div className="mt-20">
        <DividerWithText text={DIVIDER_WITH_TEXT.companies} />
        <div className="text-center">
          <Heading2>{TEXT.workedForCompanies}</Heading2>
        </div>

        <div className={logosWrapperCss}>
          <ImageComponent
            src={microsoft}
            width={WIDTH_MICROSOFT}
            alt={IMAGE_ALT.microsoft}
            loading="lazy"
            customCss={imageCss}
          />
          <ImageComponent
            src={smartsupp}
            width={WIDTH_SMARTSUPP}
            alt={IMAGE_ALT.smartsupp}
            loading="lazy"
            customCss={imageCss}
          />
          <ImageComponent
            src={kooperativa}
            width={WIDTH_KOOPERATIVA}
            alt={IMAGE_ALT.kooperativa}
            loading="lazy"
            customCss={imageCss}
          />
        </div>
        <div className={logosWrapperCss}>
          <ImageComponent src={ibm} width={WIDTH_IBM} alt={IMAGE_ALT.ibm} loading="lazy" customCss={imageCss} />
          <ImageComponent
            src={rwsMoravia}
            width={WIDTH_RWS_MORAVIA}
            alt={IMAGE_ALT.rwsMoravia}
            loading="lazy"
            customCss={imageCss}
          />
        </div>
        <div className={logosWrapperCss}>
          <ImageComponent
            src={komercniBanka}
            width={WIDTH_KOMERCNI_BANKA}
            alt={IMAGE_ALT.komercniBanka}
            loading="lazy"
            customCss={imageCss}
          />
        </div>
        <div className={logosWrapperCss}>
          <ImageComponent
            src={groupon}
            width={WIDTH_GROUPON}
            alt={IMAGE_ALT.komercniBanka}
            loading="lazy"
            customCss={imageCss}
          />
        </div>
      </div>
    </section>
  )
}

export default Companies
