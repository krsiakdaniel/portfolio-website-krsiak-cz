import { StaticImageData } from 'next/image'

// Error Page Content Props
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

// Error Page Layout Props
export type ErrorPageLayoutProps = {
  description: string
  error: Error
  imgAlt: string
  note: string
  pageContainerId?: string
}
