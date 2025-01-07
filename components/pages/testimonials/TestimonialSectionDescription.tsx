import { FC } from 'react'

interface SectionDescriptionProps {
  description: string
}

const SectionDescription: FC<SectionDescriptionProps> = ({ description }) => (
  <p className="mt-4 text-lg text-neutral-600">{description}</p>
)

export default SectionDescription
