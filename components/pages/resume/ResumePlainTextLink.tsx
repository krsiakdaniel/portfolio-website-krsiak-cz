import { FC } from 'react'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'

const ResumePlainTextLink: FC = (): JSX.Element => {
  return (
    <a
      href={EXTERNAL_URL.resume.resumeViewPDF}
      target="_blank"
      rel="noopener noreferrer"
      className="text-violet-600 underline hover:no-underline"
      data-testid={DATA_TEST_IDS.resume.downloadLinkPlainText}
    >
      {TEXT.downloadResume}
    </a>
  )
}

export default ResumePlainTextLink
