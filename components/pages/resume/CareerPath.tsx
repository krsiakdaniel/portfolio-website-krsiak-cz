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

      <div className="mt-8 flex flex-wrap gap-20">
        <ExpertiseSection heading="⚛️ React Dev" listItems={careerReactDev} />
        <ExpertiseSection heading="🖥️ Web Dev" listItems={careerWebDev} />
        <ExpertiseSection heading="⚙️ Testing" listItems={careerTesting} />
      </div>
    </>
  )
}

export default CareerPath
