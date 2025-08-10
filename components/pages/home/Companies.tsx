import DividerWithText from '@/components/shared/DividerWithText'
import Heading from '@/components/shared/Heading'
import ImageComponent from '@/components/shared/ImageComponent'

import { DIVIDER_WITH_TEXT, IMAGE_ALT, TEXT } from '@/localization/english'

import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'

import groupon from '@/public/images/svg/logo/groupon.svg'
import komercniBanka from '@/public/images/svg/logo/komercni-banka.svg'
import kooperativa from '@/public/images/svg/logo/kooperativa.svg'
import microsoft from '@/public/images/svg/logo/microsoft.svg'
import bata from '@/public/images/svg/logo/bata.svg'
import smartsupp from '@/public/images/svg/logo/smartsupp.svg'

const WIDTH_MICROSOFT = 256
const WIDTH_SMARTSUPP = 256
const WIDTH_KOOPERATIVA = 256
const WIDTH_BATA = 200
const WIDTH_KOMERCNI_BANKA = 130
const WIDTH_GROUPON = 200

const Companies = () => {
  const logosGrid =
    'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16 justify-items-center'
  const imgWrapper = 'flex items-center justify-center'

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
              width={WIDTH_KOOPERATIVA}
              alt={IMAGE_ALT.altKooperativa}
              loading={ImageLoading.LAZY}
            />
          </div>
          <div className={imgWrapper}>
            <ImageComponent
              src={smartsupp}
              width={WIDTH_SMARTSUPP}
              alt={IMAGE_ALT.altSmartsupp}
              loading={ImageLoading.LAZY}
            />
          </div>
          <div className={imgWrapper}>
            <ImageComponent
              src={microsoft}
              width={WIDTH_MICROSOFT}
              alt={IMAGE_ALT.altMicrosoft}
              loading={ImageLoading.LAZY}
            />
          </div>

          <div className={imgWrapper}>
            <ImageComponent
              src={bata}
              width={WIDTH_BATA}
              alt={IMAGE_ALT.altBata}
              loading={ImageLoading.LAZY}
            />
          </div>
          <div className={imgWrapper}>
            <ImageComponent
              src={komercniBanka}
              width={WIDTH_KOMERCNI_BANKA}
              alt={IMAGE_ALT.altKomercniBanka}
              loading={ImageLoading.LAZY}
            />
          </div>
          <div className={imgWrapper}>
            <ImageComponent
              src={groupon}
              width={WIDTH_GROUPON}
              alt={IMAGE_ALT.altGroupon}
              loading={ImageLoading.LAZY}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Companies
