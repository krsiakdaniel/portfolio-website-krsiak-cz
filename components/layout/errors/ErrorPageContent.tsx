import Link from 'next/link'

import Heading from '@/components/shared/heading/Heading'
import ImageComponent from '@/components/shared/image-component/ImageComponent'
import Paragraph from '@/components/shared/paragraph/Paragraph'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { ImageLoadingEnum } from '@/lib/types/enums'

import { ERROR_PAGE_IMAGE } from './ErrorPageContent.constants'
import { ErrorPageContentProps } from './ErrorPageContent.types'

const ErrorPageContent = ({
  imgSrc,
  imgAlt,
  heading,
  description,
  note,
  buttonText,
  buttonLink,
  onButtonClick,
}: ErrorPageContentProps) => {
  const sharedCss =
    'mt-8 rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-violet-800 focus:bg-violet-800 focus:outline-hidden focus:ring-4 focus:ring-violet-400'

  return (
    <div className="flex flex-col items-center text-center">
      <ImageComponent
        src={imgSrc}
        width={ERROR_PAGE_IMAGE.WIDTH}
        height={ERROR_PAGE_IMAGE.HEIGHT}
        alt={imgAlt}
        loading={ImageLoadingEnum.EAGER}
      />

      <div className="mt-10">
        <Heading
          as="h1"
          size="9xl"
          sizeSM="9xl"
          sizeMD="9xl"
          dataTestId={DATA_TEST_IDS.errorPage.heading}
        >
          {heading}
        </Heading>
      </div>

      <Heading
        as="h2"
        textColor="text-neutral-600"
        dataTestId={DATA_TEST_IDS.errorPage.description}
      >
        {description}
      </Heading>

      <Paragraph>{note}</Paragraph>

      {buttonText && buttonLink && (
        <Link
          href={buttonLink}
          className={`${sharedCss} inline-flex text-center select-none`}
          data-testid={DATA_TEST_IDS.errorPage.backToHomeLink}
        >
          {buttonText}
        </Link>
      )}

      {buttonText && onButtonClick && (
        <button type="button" onClick={onButtonClick} className={`select-none ${sharedCss}`}>
          {buttonText}
        </button>
      )}
    </div>
  )
}

export default ErrorPageContent
