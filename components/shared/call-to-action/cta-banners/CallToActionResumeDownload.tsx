'use client'

import { useResponsiveText } from '@/lib/hooks/useResponsiveText'

import CallToAction from '@/components/shared/call-to-action/CallToAction'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'

import starAnimated from '@/public/images/webp/emoji-animated/128x128/star-animated-128x128.webp'

const CallToActionResumeDownload = () => {
  const text = useResponsiveText({
    mobileText: TEXT.downloadResumeShortPDF,
    desktopText: TEXT.downloadResume,
  })

  return (
    <CallToAction
      highlight={TEXT.resumeDownload.highlight}
      heading={TEXT.resumeDownload.heading}
      textMobileAndDesktop={TEXT.resumeDownload.textMobileAndDesktop}
      textDesktop={TEXT.resumeDownload.textDesktop}
      link={EXTERNAL_URL.resumeViewPDF}
      linkText={text ?? TEXT.downloadResume}
      dataTestId={DATA_TEST_IDS.resume.linkButtonResumeDownloadPDF}
      icon={starAnimated}
      isLinkExternal={true}
    />
  )
}

export default CallToActionResumeDownload
