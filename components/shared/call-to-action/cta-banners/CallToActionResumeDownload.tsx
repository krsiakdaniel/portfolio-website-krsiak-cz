import { FC } from 'react'

import CallToAction from '@/components/shared/call-to-action/CallToAction'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'

import starAnimated from '@/public/images/webp/emoji-animated/128x128/star-animated-128x128.webp'

const CallToActionResumeDownload: FC = (): JSX.Element => {
  return (
    <CallToAction
      highlight="Resume in PDF"
      heading={`Download My\u00A0Resume`}
      textMobileAndDesktop="Get a PDF copy of my resume to learn more about my professional experience."
      textDesktop="Skilled React Developer building scalable applications using React and TypeScript."
      link={EXTERNAL_URL.resumeViewPDF}
      linkText={TEXT.downloadResume}
      dataTestId={DATA_TEST_IDS.callToAction.linkResumeDownload}
      icon={starAnimated}
      isLinkExternal
    />
  )
}

export default CallToActionResumeDownload
