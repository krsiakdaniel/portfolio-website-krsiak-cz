import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { ImageShowcaseItem } from '@/utils/interfaces/interfaces'
import Image from 'next/image'

type GalleryProps = {
  imageShowcase: ImageShowcaseItem[]
}

const Gallery = ({ imageShowcase }: GalleryProps) => {
  return (
    <div className="mt-8">
      <h3 className="mb-4 text-3xl font-bold">Gallery</h3>
      <p className="mb-3 text-neutral-600">See project screenshots below.</p>
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
