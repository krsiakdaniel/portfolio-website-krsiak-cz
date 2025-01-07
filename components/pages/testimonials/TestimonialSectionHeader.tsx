import { FC } from 'react'

interface SectionHeaderProps {
  title: string
}

const SectionHeader: FC<SectionHeaderProps> = ({ title }) => (
  <div className="border-b pb-2 text-2xl font-bold uppercase">{title}</div>
)

export default SectionHeader
