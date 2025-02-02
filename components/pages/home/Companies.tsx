import { FC } from 'react'

import DividerWithText from '@/components/shared/DividerWithText'
import Heading2 from '@/components/shared/Heading2'
import ImageComponent from '@/components/shared/ImageComponent'

import { DIVIDER_WITH_TEXT, IMAGE_ALT, TEXT } from '@/localization/english'

import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'

import groupon from '@/public/images/svg/logo/groupon.svg'
import komercniBanka from '@/public/images/svg/logo/komercni-banka.svg'
import kooperativa from '@/public/images/svg/logo/kooperativa.svg'
import microsoft from '@/public/images/svg/logo/microsoft.svg'
import rwsMoravia from '@/public/images/svg/logo/rws-moravia.svg'
import smartsupp from '@/public/images/svg/logo/smartsupp.svg'

const WIDTH_MICROSOFT = 256
const WIDTH_SMARTSUPP = 256
const WIDTH_KOOPERATIVA = 256
const WIDTH_RWS_MORAVIA = 200
const WIDTH_KOMERCNI_BANKA = 130
const WIDTH_GROUPON = 200

const Companies: FC = (): JSX.Element => {
  const logosGrid =
    'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16 justify-items-center'
  const imgWrapper = 'flex items-center justify-center'

  return (
    <section>
      <div className="mt-20">
        <DividerWithText text={DIVIDER_WITH_TEXT.companies} />
        <div className="text-center">
          <Heading2>{TEXT.workedForCompanies}</Heading2>
        </div>

        <div className={logosGrid}>
          <div className={imgWrapper}>
            <ImageComponent
              src={kooperativa}
              width={WIDTH_KOOPERATIVA}
              alt={IMAGE_ALT.kooperativa}
              loading={ImageLoading.LAZY}
            />
          </div>
          <div className={imgWrapper}>
            <ImageComponent
              src={smartsupp}
              width={WIDTH_SMARTSUPP}
              alt={IMAGE_ALT.smartsupp}
              loading={ImageLoading.LAZY}
            />
          </div>
          <div className={imgWrapper}>
            <ImageComponent
              src={microsoft}
              width={WIDTH_MICROSOFT}
              alt={IMAGE_ALT.microsoft}
              loading={ImageLoading.LAZY}
            />
          </div>

          <div className={imgWrapper}>
            <ImageComponent
              src={rwsMoravia}
              width={WIDTH_RWS_MORAVIA}
              alt={IMAGE_ALT.rwsMoravia}
              loading={ImageLoading.LAZY}
            />
          </div>
          <div className={imgWrapper}>
            <ImageComponent
              src={komercniBanka}
              width={WIDTH_KOMERCNI_BANKA}
              alt={IMAGE_ALT.komercniBanka}
              loading={ImageLoading.LAZY}
            />
          </div>
          <div className={imgWrapper}>
            <ImageComponent
              src={groupon}
              width={WIDTH_GROUPON}
              alt={IMAGE_ALT.groupon}
              loading={ImageLoading.LAZY}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Companies
