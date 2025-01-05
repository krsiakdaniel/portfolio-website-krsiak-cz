import CallToAction from '@/components/shared/call-to-action/CallToAction'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'

const CallToActionResumeDownload = (): JSX.Element => {
  return (
    <CallToAction
      highlight="Resume in PDF"
      heading="Download My Resume"
      description="Get a PDF copy of my resume to learn more about my professional experience."
      link={EXTERNAL_URL.resume.resumeViewPDF}
      linkText="💾 Download Resume in PDF"
      dataTestId={DATA_TEST_IDS.callToAction.linkResumeDownload}
      icon="💾"
      isLinkExternal
      hasLinkLongText
    />
  )
}

export default CallToActionResumeDownload
