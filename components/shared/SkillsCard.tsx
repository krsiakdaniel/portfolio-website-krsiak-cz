import Image from 'next/image'

import { SkillCard } from '@/lib/utils/interfaces/interfaces'

type SkillsCardProps = SkillCard

const SkillsCard = ({ imgSrc, imgAlt, title, years, description }: SkillsCardProps): JSX.Element => (
  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
    <Image src={imgSrc} alt={imgAlt} width={88} height={88} />

    <div className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900">
      {title}{' '}
      {years && (
        <span className="text-neutral-500">
          {' · '} {years} {`${years === 1 ? 'year' : 'years'}`}
        </span>
      )}
    </div>
    <p className="mt-2 font-normal text-neutral-600">{description}</p>
  </div>
)

export default SkillsCard
