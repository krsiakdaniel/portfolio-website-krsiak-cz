import { StaticImageData } from 'next/image'

export type ErrorPageContentProps = {
  imgSrc: StaticImageData
  imgAlt: string
  heading: string
  description: string
  note: string
  buttonText?: string
  buttonLink?: string
  onButtonClick?: () => void
}

export type ErrorPageLayoutProps = {
  error: Error
  pageContainerId?: string
  imgAlt: string
  description: string
  note: string
}
