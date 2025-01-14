import { FC } from 'react'

import Heading3 from '@/components/shared/Heading3'

type SocialProofCardProps = {
  title: string
  description: string
}

const SocialProofCard: FC<SocialProofCardProps> = ({ title, description }): JSX.Element => (
  <div className="flex w-full flex-col items-center justify-center rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
    <Heading3 textColor="text-violet-600">{title}</Heading3>
    <p className="font-light text-gray-500 dark:text-gray-400">{description}</p>
  </div>
)

export default SocialProofCard
