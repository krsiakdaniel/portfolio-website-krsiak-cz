import ImageComponent from '@/components/shared/ImageComponent'

import TestimonialQuote from '@/components/pages/testimonials/TestimonialQuote'
import TestimonialText from '@/components/pages/testimonials/TestimonialText'
import HeadingSection from '@/components/shared/HeadingSection'
import Paragraph from '@/components/shared/Paragraph'

import { ICON_EMOJI, SOUTH_KOREA } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import hiking from '@/public/images/webp/photo/south-korea/hiking.webp'
import nature from '@/public/images/webp/photo/south-korea/nature.webp'
import palace from '@/public/images/webp/photo/south-korea/palace.webp'
import temple from '@/public/images/webp/photo/south-korea/temple.webp'

const IMAGE_WIDTH = 1240
const IMAGE_HEIGHT = 1650

const SouthKorea = () => {
  const imageComponentCSS = 'border-1 rounded-lg border border-violet-300 bg-violet-50 p-1 shadow-md'

  return (
    <section>
      <HeadingSection text={`${SOUTH_KOREA.headingSouthKorea} ${ICON_EMOJI.flagSouthKorea}`} />

      <Paragraph>
        <span>{SOUTH_KOREA.introduction}</span>
      </Paragraph>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid">
        <div className="mt-8">
          <div>
            <TestimonialQuote />
            <TestimonialText text={SOUTH_KOREA.quote1} />
            <Paragraph
              marginTop="mt-2"
              customCss="flex"
            >{`~ ${SOUTH_KOREA.quoteAuthor1} ${ICON_EMOJI.writingHand}`}</Paragraph>
          </div>
          <div className="mt-8">
            <ImageComponent
              src={hiking}
              width={IMAGE_WIDTH}
              height={IMAGE_HEIGHT}
              alt={SOUTH_KOREA.hiking}
              loading="eager"
              customCss={imageComponentCSS}
              dataTestId={DATA_TEST_IDS.southKorea.hiking}
            />
          </div>
        </div>

        <div className="mt-8">
          <div>
            <TestimonialQuote />
            <TestimonialText text={SOUTH_KOREA.quote2} />
            <Paragraph
              marginTop="mt-2"
              customCss="flex"
            >{`~ ${SOUTH_KOREA.quoteAuthor2} ${ICON_EMOJI.latinCross}`}</Paragraph>
          </div>
          <div className="mt-8">
            <ImageComponent
              src={nature}
              width={IMAGE_WIDTH}
              height={IMAGE_HEIGHT}
              alt={SOUTH_KOREA.nature}
              loading="eager"
              customCss={imageComponentCSS}
              dataTestId={DATA_TEST_IDS.southKorea.nature}
            />
          </div>
        </div>

        <div>
          <ImageComponent
            src={temple}
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            alt={SOUTH_KOREA.temple}
            loading="eager"
            customCss={imageComponentCSS}
            dataTestId={DATA_TEST_IDS.southKorea.temple}
          />
        </div>

        <div>
          <ImageComponent
            src={palace}
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            alt={SOUTH_KOREA.palace}
            loading="eager"
            customCss={imageComponentCSS}
            dataTestId={DATA_TEST_IDS.southKorea.palace}
          />
        </div>
      </div>
    </section>
  )
}

export default SouthKorea
