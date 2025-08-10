import Link from 'next/link'

import Heading from '@/components/shared/Heading'

import ImageComponent from '@/components/shared/ImageComponent'
import Paragraph from '@/components/shared/Paragraph'

import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'

import { ErrorPageContentProps } from '@/lib/utils/typeDefinitions/props/layout/errors'

const IMAGE_WIDTH = 400
const IMAGE_HEIGHT = 417

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
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
        alt={imgAlt}
        loading={ImageLoading.EAGER}
      />

      <div className="mt-10">
        <Heading as="h1" size="8xl" sizeSM="8xl" sizeMD="8xl">
          {heading}
        </Heading>
      </div>

      <Heading as="h2" textColor="text-neutral-600">
        {description}
      </Heading>

      <Paragraph>{note}</Paragraph>

      {buttonText && buttonLink && (
        <Link href={buttonLink} className={`${sharedCss} inline-flex text-center select-none`}>
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
