import { FC } from 'react'

import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'

import { INTRODUCTION, TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

const ResumeIntroduction: FC = (): JSX.Element => {
  return (
    <>
      <Paragraph dataTestId={DATA_TEST_IDS.page.resume.introduction}>
        {INTRODUCTION.resume.text.skilled}{' '}
        <Highlight
          text={INTRODUCTION.resume.text.reactDeveloper.replace(
            '{reactDeveloper}',
            TEXT.reactDeveloperNBSP,
          )}
        />{' '}
        {INTRODUCTION.resume.text.with} <Highlight text={INTRODUCTION.resume.text.yearsReact} />{' '}
        {INTRODUCTION.resume.text.yearsText}{' '}
        <Highlight
          text={INTRODUCTION.resume.text.typeScript.replace('{typeScript}', TEXT.typeScript)}
        />{' '}
        {INTRODUCTION.resume.text.buildText}
      </Paragraph>
    </>
  )
}

export default ResumeIntroduction
