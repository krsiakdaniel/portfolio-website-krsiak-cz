import { FC } from 'react'

type SocialProofStatisticsCardProps = {
  title: string
  description: string
}

const SocialProofStatisticsCard: FC<SocialProofStatisticsCardProps> = ({ title, description }): JSX.Element => (
  <div className="flex w-full flex-col items-center justify-center rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
    <dt className="mb-2 whitespace-nowrap text-3xl font-extrabold lg:text-4xl">{title}</dt>
    <dd className="font-light text-gray-500 dark:text-gray-400">{description}</dd>
  </div>
)

export default SocialProofStatisticsCard
