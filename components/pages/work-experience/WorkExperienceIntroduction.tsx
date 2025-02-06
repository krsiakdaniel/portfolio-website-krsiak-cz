import { FC } from 'react'

import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'

import { INTRODUCTION } from '@/localization/english'

const WorkExperienceIntroduction: FC = (): JSX.Element => {
  return (
    <>
      <Paragraph>
        {INTRODUCTION.workExperience.text.experienced}{' '}
        <Highlight text={INTRODUCTION.workExperience.text.reactDeveloper} />{' '}
        {INTRODUCTION.workExperience.text.whoKnows}{' '}
        <Highlight text={INTRODUCTION.workExperience.text.qaAutomation} />{' '}
        {INTRODUCTION.workExperience.text.andCanLead}
        {'\u00A0'}
        <Highlight text={INTRODUCTION.workExperience.text.teamLeader} />
      </Paragraph>
    </>
  )
}

export default WorkExperienceIntroduction
