import Image from 'next/image'
import { FC } from 'react'

import Heading3 from '@/components/shared/Heading3'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { ImageShowcaseItem } from '@/lib/utils/interfaces/interfaces'

type GalleryProps = {
  imageShowcase: ImageShowcaseItem[]
}

const Gallery: FC<GalleryProps> = ({ imageShowcase }): JSX.Element => {
  return (
    <div className="mt-8">
      <Heading3>{TEXT.gallery}</Heading3>
      <p className="mt-4 text-neutral-600">See project screenshots below.</p>
      <div data-testid={DATA_TEST_IDS.gallery}>
        {imageShowcase.map((image) => (
          <div data-testid={`gallery-image-${image.id}`} key={image.id}>
            <Image
              src={image.src}
              width={1240}
              height={1272}
              className="mt-8 rounded-lg bg-violet-100 p-1 ring-1 ring-violet-300"
              alt={`project-image-${image.id}`}
              placeholder="blur"
              blurDataURL={image.src}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
