import { FC } from 'react'

import SocialProofCard from '@/components/pages/resume/SocialProofCard'

import { SOCIAL_PROOF } from '@/localization/english'

const SocialProof: FC = (): JSX.Element => {
  return (
    <div className="mt-16 w-full bg-white text-left dark:bg-gray-900">
      <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">{SOCIAL_PROOF.sectionTitle}</div>
      <div className="mt-4 w-full py-0 text-center">
        <div className="flex w-full flex-col gap-4 text-gray-900 lg:flex-row">
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
