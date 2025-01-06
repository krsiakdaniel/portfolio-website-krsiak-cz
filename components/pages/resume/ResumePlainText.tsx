import { FC } from 'react'

import {
  resumePlainTextPage1,
  resumePlainTextPage2,
  resumePlainTextPage3,
} from '@/lib/data/pages/resume/resumePlainText'

type ResumePlainTextPageProps = {
  content: string
}

const ResumePlainTextPage: FC<ResumePlainTextPageProps> = ({ content }): JSX.Element => (
  <div className="mt-8 w-full">
    <pre className="text-md whitespace-pre-wrap rounded-lg bg-gray-100 p-8 font-mono">{content}</pre>
  </div>
)

const ResumePlainText: FC = (): JSX.Element => (
  <>
    <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">Resume In Plain Text</div>
    <div>
      <p className="mt-4 text-lg text-neutral-600">Learn more about my professional experience</p>
    </div>

    <div>
      <ResumePlainTextPage content={resumePlainTextPage1} />
      <ResumePlainTextPage content={resumePlainTextPage2} />
      <ResumePlainTextPage content={resumePlainTextPage3} />
    </div>
  </>
)

export default ResumePlainText
