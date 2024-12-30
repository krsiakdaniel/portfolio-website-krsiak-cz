import Image from 'next/image'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import Heading3 from '@/components/shared/Heading3'
import { ImageShowcaseItem } from '@/lib/utils/interfaces/interfaces'

type GalleryProps = {
  imageShowcase: ImageShowcaseItem[]
}

const Gallery = ({ imageShowcase }: GalleryProps): JSX.Element => {
  return (
    <div className="mt-8">
      <Heading3>Gallery</Heading3>
      <p className="mt-4 text-neutral-600">See project screenshots below.</p>
      <div data-testid={DATA_TEST_IDS.gallery}>
        {imageShowcase.map((image) => (
          <div data-testid={`gallery-image-${image.id}`} key={image.id}>
            <Image
              src={image.src}
              alt={`project-image-${image.id}`}
              width={1240}
              height={1272}
              placeholder="blur"
              blurDataURL={image.src}
              className="mt-8 rounded-lg border border-neutral-300 bg-neutral-100 shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
