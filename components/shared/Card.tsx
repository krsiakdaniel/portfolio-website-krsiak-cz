import Image, { StaticImageData } from 'next/image'

type Props = {
  src: StaticImageData
  alt: string
  title: string
  description: string
}

const Card = ({ src, alt, title, description }: Props) => (
  <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Image src={src} alt={alt} className="mb-3" />
    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{description}</p>
  </div>
)

export default Card
