import { FC } from 'react'

import ExpertiseSection from '@/components/pages/home/expertise/ExpertiseSection'
import HeadingSection from '@/components/shared/HeadingSection'
import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'

import { careerReactDev } from '@/lib/data/pages/resume/career-path/careerReactDev'
import { careerTesting } from '@/lib/data/pages/resume/career-path/careerTesting'
import { careerWebDev } from '@/lib/data/pages/resume/career-path/careerWebDev'

const CareerPath: FC = (): JSX.Element => {
  return (
    <>
      <HeadingSection text="My Career Path" />

      <div>
        <Paragraph size="text-sm">
          <strong>My journey:</strong> ⚛️ <Highlight text="React Dev" /> ← 🖥️ <Highlight text="Web Dev" /> ← ⚙️{' '}
          <Highlight text="Testing" /> ← 🏢 IBM · Mainframes ← ✈️ Airport · Ticket Agent ← 🍗 KFC ← 📚 High School
        </Paragraph>
      </div>

      <div className="mt-10 w-full">
        <div className="flex w-full flex-col gap-6 lg:flex-row">
          <div className="flex w-full flex-col gap-6 md:flex-row lg:w-2/3">
            <ExpertiseSection icon="⚛️" heading="React Dev" listItems={careerReactDev} />
            <ExpertiseSection icon="💻" heading="Web Dev" listItems={careerWebDev} />
          </div>
          <div className="flex w-full lg:w-1/3">
            <ExpertiseSection icon="⚙️" heading="Testing" listItems={careerTesting} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CareerPath
