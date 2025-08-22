import { StaticImageData } from 'next/image'

export interface ResumePreviewCard {
  title: string
  description: string
  href: string
  imageSrc: string | StaticImageData
  imageAlt: string
  buttonText: string
  dataTestId: string
}

export type ResumePreviewCardProps = ResumePreviewCard
