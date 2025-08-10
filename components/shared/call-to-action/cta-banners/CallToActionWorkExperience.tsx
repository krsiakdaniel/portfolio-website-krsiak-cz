'use client'

import { useResponsiveText } from '@/lib/hooks/useResponsiveText'

import CallToAction from '@/components/shared/call-to-action/CallToAction'

import { CALL_TO_ACTION, ICON_EMOJI, TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

const CallToActionWorkExperience = () => {
  const text = useResponsiveText({
    mobileText: CALL_TO_ACTION.workExperience.highlightShort,
    desktopText: CALL_TO_ACTION.workExperience.highlight,
  })

  return (
    <CallToAction
      highlight={text}
      heading={CALL_TO_ACTION.workExperience.heading}
      textMobileAndDesktop={CALL_TO_ACTION.workExperience.textMobileAndDesktop}
      textDesktop={CALL_TO_ACTION.workExperience.textDesktop}
      link={PAGES_URL.work.mainUrl}
      linkText={TEXT.workExperience}
      dataTestId={DATA_TEST_IDS.callToAction.linkWorkExperience}
      icon={ICON_EMOJI.manTechnologist.lightSkinTone}
      hasPhoto={true}
    />
  )
}

export default CallToActionWorkExperience
