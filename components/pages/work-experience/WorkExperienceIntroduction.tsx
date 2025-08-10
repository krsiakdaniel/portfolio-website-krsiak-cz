import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'

import { EM_DASH } from '@/lib/utils/constants/specialCharacters'
import { COMMON_VALUES, INTRODUCTION, SHARED } from '@/localization/english'

const WorkExperienceIntroduction = () => {
  return (
    <>
      <Paragraph>
        {INTRODUCTION.workExperience.text.experienced}{' '}
        <Highlight
          text={`${COMMON_VALUES.react} ${EM_DASH}\u00A0${COMMON_VALUES.typeScript} ${COMMON_VALUES.developer}`}
        />{' '}
        {INTRODUCTION.workExperience.text.focus}
        <Highlight text={INTRODUCTION.workExperience.text.performance} />
        {', '}
        <Highlight text={INTRODUCTION.workExperience.text.uxui} />
        {', '}
        {SHARED.and}
        {'\u00A0'}
        <Highlight text={INTRODUCTION.workExperience.text.qaAutomation} />
        {'.'}
      </Paragraph>
    </>
  )
}

export default WorkExperienceIntroduction
