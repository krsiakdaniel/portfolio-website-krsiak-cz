import { FC } from 'react'

import ExpertiseSection from '@/components/pages/home/expertise/ExpertiseSection'

import Paragraph from '@/components/shared/Paragraph'
import { careerAutomation } from '@/lib/data/pages/resume/career-path/careerAutomation'
import { careerFrontEnd } from '@/lib/data/pages/resume/career-path/careerFrontEnd'
import { careerReact } from '@/lib/data/pages/resume/career-path/careerReact'

const CareerPath: FC = (): JSX.Element => {
  return (
    <>
      <div>
        <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">My Career Path</div>

        <div>
          <Paragraph size="text-sm">
            <strong>My journey:</strong> 🏢 IBM · Mainframes ← ✈️ Airport · Ticket Agent ← 🍗 KFC ← 📊 High School ·
            Accountant
          </Paragraph>
        </div>

        <div className="mt-5 flex flex-wrap gap-20">
          <div className="min-w-[300px] flex-1">
            <ExpertiseSection heading="⚛️ React" listItems={careerReact} />
          </div>
          <div className="min-w-[300px] flex-1">
            <ExpertiseSection heading="🖥️ Front End" listItems={careerFrontEnd} />
          </div>
          <div className="min-w-[300px] flex-1">
            <ExpertiseSection heading="⚙️ Testing" listItems={careerAutomation} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CareerPath
