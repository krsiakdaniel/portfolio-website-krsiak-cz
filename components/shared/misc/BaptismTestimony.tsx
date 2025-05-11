import { FC } from 'react'

import ImageComponent from '@/components/shared/ImageComponent'

import TestimonialQuote from '@/components/pages/testimonials/TestimonialQuote'
import TestimonialText from '@/components/pages/testimonials/TestimonialText'
import ExternalLink from '@/components/shared/ExternalLink'
import HeadingSection from '@/components/shared/HeadingSection'
import Paragraph from '@/components/shared/Paragraph'
import Photo from '@/components/shared/Photo'

import { BIBLE, TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'
import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'

import baptismKrsiakDaniel from '@/public/images/webp/testimonials/personal/baptism/krsiak-daniel-baptism-testimony.webp'

const IMAGE_WIDTH_PHOTO = 216
const IMAGE_HEIGHT_PHOTO = 216

const IMAGE_WIDTH_CHURCH = 1240
const IMAGE_HEIGHT_CHURCH = 1860

// TODO: add later when BLOG in MDX is implemented
const BaptismTestimony: FC = (): JSX.Element => {
  // CSS classes
  const containerClass = 'flex flex-col lg:flex-row'
  const textContainerClass = 'mt-4 pt-8 md:px-8 lg:w-3/4'
  const imageContainerClass = 'flex w-full items-center justify-center p-8 lg:w-1/4'
  const photoClass = `h-[${IMAGE_HEIGHT_PHOTO}px] w-[${IMAGE_WIDTH_PHOTO}px]`
  const imageComponentClass =
    'border-1 mt-8 rounded-lg border border-violet-300 bg-violet-50 p-1 shadow-md'

  return (
    <section>
      <HeadingSection text={BIBLE.baptismTestimonyHeading} />

      <div className={containerClass}>
        <div className={textContainerClass}>
          <TestimonialQuote />
          <TestimonialText text={BIBLE.verseText} />
          <Paragraph customCss="flex">
            <ExternalLink
              href={EXTERNAL_URL.verseBiblePeter1Chapter3Verse21}
              text={BIBLE.bookChapterVerse}
              title={TEXT.opensInNewTab}
              dataTestId={DATA_TEST_IDS.baptism.verseLink}
            />
          </Paragraph>
        </div>
        <div className={imageContainerClass}>
          <div className={photoClass}>
            <Photo isPhotoSmall={true} showCaption={true} />
          </div>
        </div>
      </div>

      <div>
        <ImageComponent
          src={baptismKrsiakDaniel}
          width={IMAGE_WIDTH_CHURCH}
          height={IMAGE_HEIGHT_CHURCH}
          alt={BIBLE.baptismChurch}
          loading={ImageLoading.LAZY}
          customCss={imageComponentClass}
          dataTestId={DATA_TEST_IDS.baptism.image}
        />
      </div>
    </section>
  )
}

export default BaptismTestimony
