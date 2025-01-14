import { FC } from 'react'

import ResumePlainTextLink from '@/components/pages/resume/ResumePlainTextLink'
import ResumePlainTextPage from '@/components/pages/resume/ResumePlainTextPage'
import Paragraph from '@/components/shared/Paragraph'

import {
  resumePlainTextPage1,
  resumePlainTextPage2,
  resumePlainTextPage3,
} from '@/lib/data/pages/resume/resumePlainText'

const ResumePlainText: FC = (): JSX.Element => (
  <>
    <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">Resume In Plain Text</div>
    <div>
      <Paragraph>
        Read more about my professional experience. Or <ResumePlainTextLink /> 😉
      </Paragraph>
    </div>

    <div>
      <ResumePlainTextPage content={resumePlainTextPage1} />
      <ResumePlainTextPage content={resumePlainTextPage2} />
      <ResumePlainTextPage content={resumePlainTextPage3} />
    </div>
  </>
)

export default ResumePlainText
