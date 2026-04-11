import ImageComponent from '@/components/shared/image-component/ImageComponent'

import { GALLERY_PREVIEW_4_3 } from '@/lib/utils/constants/imageGalleryConfig'

import { ARIA_LABELS } from '@/localization'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { ImageLoadingEnum } from '@/lib/types/enums'

import { type GalleryPreviewProps } from './Gallery.types'
import { calculateImageHeight } from './Gallery.utils'

const GalleryPreview = ({ activeImage }: GalleryPreviewProps) => {
  const { width, height } = activeImage
  const previewHeight = calculateImageHeight(
    GALLERY_PREVIEW_4_3.WIDTH,
    width,
    height,
    GALLERY_PREVIEW_4_3.HEIGHT,
  )

  return (
    <div className="overflow-hidden">
      <div
        role="img"
        aria-live="polite"
        aria-atomic="true"
        aria-label={`${ARIA_LABELS.galleryActiveImage}: ${activeImage.id}`}
        data-testid={DATA_TEST_IDS.galleryPreview.activeImage}
      >
        <ImageComponent
          src={activeImage.src}
          width={GALLERY_PREVIEW_4_3.WIDTH}
          height={previewHeight}
          customCss="border rounded-lg border border-violet-300 bg-violet-50 p-1 transition-all duration-500 ease-in-out animate-fade-in"
          alt={`${ARIA_LABELS.galleryActiveImage}: ${activeImage.id}`}
          loading={ImageLoadingEnum.LAZY}
          placeholder="blur"
          blurDataURL={activeImage.src}
          sizes={`(max-width: 768px) 100vw, (max-width: 1200px) 80vw, ${GALLERY_PREVIEW_4_3.WIDTH}px`}
        />
      </div>
    </div>
  )
}

export default GalleryPreview
