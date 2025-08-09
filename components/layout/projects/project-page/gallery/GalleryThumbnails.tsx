import { FC, MouseEventHandler } from 'react'

import ImageComponent from '@/components/shared/ImageComponent'

import { ARIA_LABELS } from '@/localization/english'

import { GALLERY_THUMBNAIL_4_3 } from '@/lib/utils/constants/imageGalleryConfig'
import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'
import {
  GalleryImageProps,
  GalleryThumbnailsProps,
} from '@/lib/utils/typeDefinitions/props/layout/projects/project-page'

const GalleryThumbnails: FC<GalleryThumbnailsProps> = ({
  images,
  activeImage,
  setActiveImage,
}): JSX.Element => {
  // Handler for mouse clicks on thumbnail images
  const handleImageClick = (image: GalleryImageProps): MouseEventHandler<HTMLDivElement> => {
    return () => setActiveImage(image)
  }

  // Handler for keyboard interactions (Enter and Space) for accessibility
  const handleOnKeyDown =
    (image: GalleryImageProps) => (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault() // Prevent page scroll on space press
        setActiveImage(image)
      }
    }

  return (
    <div
      className="mt-2 flex items-center justify-items-start gap-4"
      role="list"
      aria-label={ARIA_LABELS.galleryThumbnails}
    >
      {images.map((image, index) => (
        <div
          data-testid={`gallery-image-${image.id}`}
          key={image.id}
          onClick={handleImageClick(image)}
          role="button"
          aria-label={`${ARIA_LABELS.galleryThumbnail} ${index + 1} of ${images.length}`}
          tabIndex={0}
          onKeyDown={handleOnKeyDown(image)}
          aria-pressed={activeImage.id === image.id}
        >
          <ImageComponent
            src={image.src}
            width={GALLERY_THUMBNAIL_4_3.WIDTH}
            height={GALLERY_THUMBNAIL_4_3.HEIGHT}
            customCss={`rounded-lg border-violet-300 bg-violet-50 p-1 shadow-md transition-all duration-500 ease-in-out cursor-pointer opacity-80 hover:ring-2 hover:ring-violet-600 hover:bg-violet-100 hover:opacity-100
              ${
                activeImage.id === image.id
                  ? 'ring-2 ring-violet-400 bg-violet-100'
                  : 'border-violet-300'
              }`}
            alt={`${ARIA_LABELS.galleryThumbnail}: ${image.id}`}
            loading={ImageLoading.LAZY}
            placeholder="blur"
            blurDataURL={image.src}
            sizes={`${GALLERY_THUMBNAIL_4_3.WIDTH}px`}
          />
        </div>
      ))}
    </div>
  )
}

export default GalleryThumbnails
