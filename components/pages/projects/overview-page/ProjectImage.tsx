import Image from 'next/image'
import { FC } from 'react'

type ProjectImageProps = {
  isFeatured?: boolean
  image: string
  title: string
}

const ProjectImage: FC<ProjectImageProps> = ({ isFeatured, image, title }): JSX.Element => (
  <div className="flex first:mt-0 lg:mt-0 lg:justify-start">
    <div className="relative">
      {isFeatured && <p className="absolute -right-4 -top-5 z-10 text-4xl">⭐</p>}
      <Image
        src={image}
        width={600}
        height={617}
        alt={title}
        className="rounded-lg bg-violet-100 p-1 ring-1 ring-violet-300"
      />
    </div>
  </div>
)

export default ProjectImage
