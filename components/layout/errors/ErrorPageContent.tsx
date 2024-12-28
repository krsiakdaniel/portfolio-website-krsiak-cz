import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import Heading1 from '@/components/shared/Heading1'

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
  return (
    <div className="flex flex-col items-center text-center">
      <Image src={imgSrc} alt={imgAlt} width={400} height={417} loading="eager" className="bt-5" />
      <div className="mt-10">
        <Heading1 textSize="8xl" textSizeSM="8xl" textSizeLG="8xl">
          {heading}
        </Heading1>
      </div>
      <p className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">{description}</p>
      <p className="mt-2 text-lg font-light text-neutral-600">{note}</p>
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