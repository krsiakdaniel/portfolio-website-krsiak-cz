import { FC } from 'react'

import Heading3 from '@/components/shared/Heading3'
import Paragraph from '@/components/shared/Paragraph'

import { SocialProofCardProps } from '@/lib/utils/typeDefinitions/props/pages/home/socialProof'

const SocialProofCard: FC<SocialProofCardProps> = ({ title, description }): JSX.Element => (
  <div className="flex w-full flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-4">
    <Heading3 textColor="text-violet-600">{title}</Heading3>
    <Paragraph marginTop="mt-0" size="text-md" textColor="text-neutral-500">
      {description}
    </Paragraph>
  </div>
)

export default SocialProofCard
