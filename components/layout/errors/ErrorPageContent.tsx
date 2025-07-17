import Link from 'next/link'
import { FC } from 'react'

import Heading1 from '@/components/shared/Heading1'
import Heading2 from '@/components/shared/Heading2'
import ImageComponent from '@/components/shared/ImageComponent'
import Paragraph from '@/components/shared/Paragraph'

import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'

import { ErrorPageContentProps } from '@/lib/utils/typeDefinitions/props/layout/errors'

const IMAGE_WIDTH = 400
const IMAGE_HEIGHT = 417

const ErrorPageContent: FC<ErrorPageContentProps> = ({
  imgSrc,
  imgAlt,
  heading,
  description,
  note,
  buttonText,
  buttonLink,
  onButtonClick,
}): JSX.Element => {
  const sharedCss =
    'mt-8 rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-violet-800 focus:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-violet-400'

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
        <Heading1 customCss="text-8xl">{heading}</Heading1>
      </div>

      <Heading2 textColor="text-neutral-600">{description}</Heading2>

      <Paragraph>{note}</Paragraph>

      {buttonText && buttonLink && (
        <Link href={buttonLink} className={`${sharedCss} inline-flex select-none text-center`}>
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
