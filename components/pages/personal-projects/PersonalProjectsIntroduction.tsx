import { FC } from 'react'

import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'

import { INTRODUCTION } from '@/localization/english'

const PersonalProjectsIntroduction: FC = (): JSX.Element => {
  return (
    <>
      <Paragraph>
        {INTRODUCTION.personalProjects.text.enjoy}{' '}
        <Highlight text={INTRODUCTION.personalProjects.text.newTechnologies} />{' '}
        {INTRODUCTION.personalProjects.text.andCreating}{' '}
        <Highlight text={INTRODUCTION.personalProjects.text.personalProjects} />{' '}
        {INTRODUCTION.personalProjects.text.whereApply}
      </Paragraph>
    </>
  )
}

export default PersonalProjectsIntroduction
