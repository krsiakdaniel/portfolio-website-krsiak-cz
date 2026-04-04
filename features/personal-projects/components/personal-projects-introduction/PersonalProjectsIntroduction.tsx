import Highlight from '@/components/shared/highlight/Highlight'
import Paragraph from '@/components/shared/paragraph/Paragraph'

import { INTRODUCTION } from '@/localization'

const PersonalProjectsIntroduction = () => {
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
