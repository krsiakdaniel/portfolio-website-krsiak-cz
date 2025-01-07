import { FC } from 'react'

import SocialProofStatisticsCard from '@/components/pages/resume/SocialProofStatisticsCard'

const SocialProofStatistics: FC = (): JSX.Element => {
  return (
    <section className="mt-16 w-full bg-white text-left dark:bg-gray-900">
      {/* <Heading2 textColor="text-neutral-900">Transforming Companies with Automation</Heading2> */}
      <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">Transforming Companies with Automation</div>
      <div className="mt-4 w-full py-0 text-center">
        <dl className="flex w-full flex-col gap-4 text-gray-900 lg:flex-row">
          <div className="flex w-full flex-col gap-4 md:flex-row lg:w-2/3">
            <SocialProofStatisticsCard title="Companies 5+" description="From startup to corporate" />
            <SocialProofStatisticsCard title="Features 500+" description="Implemented successfully" />
          </div>
          <div className="flex w-full lg:w-1/3">
            <SocialProofStatisticsCard title="Automation ∞" description="Streamlined testing and CI/CD" />
          </div>
        </dl>
      </div>
    </section>
  )
}

export default SocialProofStatistics
