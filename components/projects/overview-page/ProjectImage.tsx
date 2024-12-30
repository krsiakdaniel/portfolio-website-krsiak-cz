import Image from 'next/image'

type ProjectImageProps = {
  isFeatured?: boolean
  image: string
  title: string
}

const ProjectImage = ({ isFeatured, image, title }: ProjectImageProps): JSX.Element => (
  <div className="flex first:mt-0 lg:mt-0 lg:justify-start">
    <div className="relative">
      {isFeatured && <p className="absolute -right-4 -top-5 z-10 text-4xl">⭐</p>}
      <Image src={image} className="rounded-lg border bg-neutral-100 shadow-md" alt={title} width={600} height={617} />
    </div>
  </div>
)

export default ProjectImage
