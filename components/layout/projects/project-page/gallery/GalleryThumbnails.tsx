import { FC, MouseEventHandler } from 'react'

import ImageComponent from '@/components/shared/ImageComponent'

import { ARIA_LABELS } from '@/localization/english'

import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'
import {
  GalleryImageProps,
  GalleryThumbnailsProps,
} from '@/lib/utils/typeDefinitions/props/layout/projects/project-page'

const IMAGE_WIDTH = 298
const IMAGE_HEIGHT = 305

const GalleryThumbnails: FC<GalleryThumbnailsProps> = ({
  images,
  featuredImage,
  setFeaturedImage,
}): JSX.Element => {
  // Handler for mouse clicks on thumbnail images
  const handleImageClick = (image: GalleryImageProps): MouseEventHandler<HTMLDivElement> => {
    return () => setFeaturedImage(image)
  }

  // Handler for keyboard interactions (Enter and Space) for accessibility
  const handleOnKeyDown =
    (image: GalleryImageProps) => (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault() // Prevent page scroll on space press
        setFeaturedImage(image)
      }
    }

  return (
    <div
      className="mt-4 grid grid-cols-4 items-center justify-items-center gap-4"
      role="list"
      aria-label={ARIA_LABELS.galleryThumbnails}
    >
      {images.map((image) => (
        <div
          data-testid={`gallery-image-${image.id}`}
          key={image.id}
          onClick={handleImageClick(image)}
          role="listitem"
          aria-label={ARIA_LABELS.galleryThumbnail}
          tabIndex={0}
          onKeyDown={handleOnKeyDown(image)}
          aria-pressed={featuredImage.id === image.id}
        >
          <ImageComponent
            src={image.src}
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            customCss={`rounded-lg bg-violet-50 p-1 shadow-md transition-all duration-500 ease-in-out cursor-pointer opacity-80 hover:ring-2 hover:ring-violet-600 hover:bg-violet-100 hover:opacity-100 hover:-translate-y-2
              ${
                featuredImage.id === image.id
                  ? 'ring-2 ring-violet-400 bg-violet-100'
                  : 'border-violet-300'
              }`}
            alt={`${ARIA_LABELS.galleryThumbnail}: ${image.id}`}
            loading={ImageLoading.LAZY}
            placeholder="blur"
            blurDataURL={image.src}
          />
        </div>
      ))}
    </div>
  )
}

export default GalleryThumbnails
