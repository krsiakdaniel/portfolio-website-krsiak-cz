import { FC } from 'react'

import SocialProofCard from '@/components/pages/home/SocialProofCard'
import DividerWithText from '@/components/shared/DividerWithText'

import { SOCIAL_PROOF } from '@/localization/english'

const SocialProof: FC = (): JSX.Element => {
  return (
    <div className="mt-20 w-full bg-gray-50">
      <DividerWithText text={SOCIAL_PROOF.sectionTitle} />
      <div className="mt-4 w-full">
        <div className="flex w-full flex-col gap-4 lg:flex-row">
          <div className="flex w-full flex-col gap-4 md:flex-row lg:w-2/3">
            <SocialProofCard title={SOCIAL_PROOF.companiesTitle} description={SOCIAL_PROOF.companiesDescription} />
            <SocialProofCard title={SOCIAL_PROOF.featuresTitle} description={SOCIAL_PROOF.featuresDescription} />
          </div>
          <div className="flex w-full lg:w-1/3">
            <SocialProofCard title={SOCIAL_PROOF.automationTitle} description={SOCIAL_PROOF.automationDescription} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialProof
