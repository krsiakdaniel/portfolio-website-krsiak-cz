import { FC } from 'react'

import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { YEARS } from '@/lib/utils/constants/yearsExperience'
import { TEXT } from '@/localization/english'

const ResumeIntroduction: FC = (): JSX.Element => {
  return (
    <>
      <Paragraph dataTestId={DATA_TEST_IDS.page.resume.introduction}>
        Skilled <Highlight text={TEXT.reactDeveloper} /> with {YEARS.react} years of experience
        using <Highlight text={TEXT.typeScript} /> to build scalable web applications.
      </Paragraph>
    </>
  )
}

export default ResumeIntroduction
