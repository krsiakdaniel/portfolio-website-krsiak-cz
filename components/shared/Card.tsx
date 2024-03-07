import Image, { StaticImageData } from 'next/image'

type Props = {
  src: StaticImageData
  alt: string
  title: string
  description: string
  titleHighlight: string
}

const Card = ({ src, alt, title, titleHighlight, description }: Props) => (
  <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md">
    <Image src={src} alt={alt} className="mb-3" />
    <div className="mb-2 text-2xl font-semibold tracking-tight text-neutral-900">
      {title}{' '}
      {titleHighlight && (
        <span className="text-neutral-500">
          {' · '} {titleHighlight}
        </span>
      )}
    </div>
    <p className="mb-3 font-normal text-neutral-600">{description}</p>
  </div>
)

export default Card
