import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Heading1 from '@/components/shared/Heading1'
import Heading2 from '@/components/shared/Heading2'
import Paragraph from '@/components/shared/Paragraph'

type ErrorPageContentProps = {
  imgSrc: StaticImageData
  imgAlt: string
  heading: string
  description: string
  note: string
  buttonText?: string
  buttonLink?: string
  onButtonClick?: () => void
}

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
  return (
    <div className="flex flex-col items-center text-center">
      <Image src={imgSrc} width={400} height={417} alt={imgAlt} loading="eager" />
      <div className="mt-10">
        <Heading1 textSize="8xl" textSizeSM="8xl" textSizeLG="8xl">
          {heading}
        </Heading1>
      </div>
      <Heading2>{description}</Heading2>
      <Paragraph>{note}</Paragraph>
      {buttonText && buttonLink && (
        <Link
          href={buttonLink}
          className="mt-8 inline-flex rounded-lg bg-purple-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300"
        >
          {buttonText}
        </Link>
      )}
      {buttonText && onButtonClick && (
        <button
          type="button"
          onClick={onButtonClick}
          className="mt-8 rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300"
        >
          {buttonText}
        </button>
      )}
    </div>
  )
}

export default ErrorPageContent
