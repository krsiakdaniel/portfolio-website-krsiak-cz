import { StaticImageData } from 'next/image'

export type ErrorPageContentProps = {
  buttonLink?: string
  buttonText?: string
  description: string
  heading: string
  imgAlt: string
  imgSrc: StaticImageData
  note: string
  onButtonClick?: () => void
}
