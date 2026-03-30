import { GalleryImage } from '@/lib/types/interfaces'

export type GalleryProps = {
  images: GalleryImage[]
}

export type GalleryImageProps = GalleryProps['images'][0]

export type GalleryPreviewProps = {
  activeImage: GalleryImageProps
}

export type GalleryThumbnailsProps = {
  images: GalleryImageProps[]
  activeImage: GalleryImageProps
  setActiveImage: (image: GalleryImageProps) => void
}
