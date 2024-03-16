import Image, { StaticImageData } from 'next/image'

type Props = {
  imgSrc: StaticImageData
  imgAlt: string
  title: string
  titleYears: string
  description: string
}

const SkillsCard = ({ imgSrc, imgAlt, title, titleYears, description }: Props) => (
  <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md">
    <Image src={imgSrc} alt={imgAlt} width={64} height={64} />
    <div className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900">
      {title}{' '}
      {titleYears && (
        <span className="text-neutral-500">
          {' · '} {titleYears} years
        </span>
      )}
    </div>
    <p className="mt-2 font-normal text-neutral-600">{description}</p>
  </div>
)

export default SkillsCard
