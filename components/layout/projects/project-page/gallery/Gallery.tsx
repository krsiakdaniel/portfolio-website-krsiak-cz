'use client'

import { useState } from 'react'

import GalleryPreview from '@/components/layout/projects/project-page/gallery/GalleryPreview'
import GalleryThumbnails from '@/components/layout/projects/project-page/gallery/GalleryThumbnails'
import Heading from '@/components/shared/Heading'
import Paragraph from '@/components/shared/Paragraph'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import {
  GalleryImageProps,
  GalleryProps,
} from '@/lib/utils/typeDefinitions/props/layout/projects/project-page'
import { ARIA_LABELS, GALLERY } from '@/localization/english'

const Gallery = ({ images = [] }: GalleryProps) => {
  const [activeImage, setActiveImage] = useState<GalleryImageProps>(images[0])

  return (
    <div className="mt-8">
      <Heading as="h3">{GALLERY.heading}</Heading>
      <Paragraph>{GALLERY.screenshots}</Paragraph>
      <div
        data-testid={DATA_TEST_IDS.gallery}
        className="mt-4 grid gap-4"
        role="region"
        aria-label={ARIA_LABELS.galleryProjectShowcase}
      >
        <GalleryThumbnails
          images={images}
          activeImage={activeImage}
          setActiveImage={setActiveImage}
        />
        <GalleryPreview activeImage={activeImage} />
      </div>
    </div>
  )
}

export default Gallery
