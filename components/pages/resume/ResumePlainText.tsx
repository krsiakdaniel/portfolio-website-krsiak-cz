import { FC } from 'react'

import ResumePlainTextLink from '@/components/pages/resume/ResumePlainTextLink'
import ResumePlainTextPage from '@/components/pages/resume/ResumePlainTextPage'
import CallToActionLinkedIn from '@/components/shared/call-to-action/CallToActionLinkedIn'

import {
  resumePlainTextPage1,
  resumePlainTextPage2,
  resumePlainTextPage3,
} from '@/lib/data/pages/resume/resumePlainText'

const ResumePlainText: FC = (): JSX.Element => (
  <>
    <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">Resume In Plain Text</div>
    <div>
      <p className="mt-4 text-lg text-neutral-600">
        Read more about my professional experience. Or <ResumePlainTextLink /> 😉
      </p>
    </div>

    <div>
      <ResumePlainTextPage content={resumePlainTextPage1} />

      <CallToActionLinkedIn />

      <div className="mt-16">
        <ResumePlainTextPage content={resumePlainTextPage2} />
      </div>
      <ResumePlainTextPage content={resumePlainTextPage3} />
    </div>
  </>
)

export default ResumePlainText
