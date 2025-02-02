'use client'

import { FC } from 'react'

import { useResponsiveText } from '@/lib/hooks/useResponsiveText'

import CallToAction from '@/components/shared/call-to-action/CallToAction'

import { ICON_EMOJI, TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'

const CallToActionLinkedIn: FC = (): JSX.Element => {
  const text = useResponsiveText({
    mobileText: TEXT.nameDanielKrsiak,
    desktopText: `${TEXT.linkedIn} - ${TEXT.nameDanielKrsiak}`,
  })

  return (
    <CallToAction
      highlight="LinkedIn"
      heading={`Connect on\u00A0LinkedIn`}
      textMobileAndDesktop={`Visit my LinkedIn profile to connect and\u00A0see my professional experiences.`}
      textDesktop={`It\u00A0showcases a\u00A0comprehensive overview of my career journey.`}
      link={EXTERNAL_URL.linkedIn}
      linkText={text ?? TEXT.linkedIn}
      dataTestId={DATA_TEST_IDS.callToAction.linkLinkedIn}
      icon={ICON_EMOJI.link}
      hasPhoto={true}
      isLinkExternal
    />
  )
}

export default CallToActionLinkedIn
