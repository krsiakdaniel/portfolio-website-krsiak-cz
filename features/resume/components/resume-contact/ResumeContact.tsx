import HeadingSection from '@/components/shared/heading/HeadingSection'
import Highlight from '@/components/shared/highlight/Highlight'
import Paragraph from '@/components/shared/paragraph/Paragraph'
import ScanMyContactQR from '@/components/shared/scan-my-contact-qr/ScanMyContactQR'

import { IS_OPEN_TO_WORK } from '@/lib/utils/constants/shared/openToWork'
import { QR_CODE_SIZE } from '@/lib/utils/constants/shared/qrCode'

import { SHARED, TEXT } from '@/localization'

import { RESUME } from '../../localization'

const ResumeContact = () => {
  const isOpenToWork = IS_OPEN_TO_WORK
  const contactMessage = isOpenToWork ? TEXT.openToWork : TEXT.openToNetworking

  return (
    <>
      <HeadingSection
        text={
          <span className={isOpenToWork ? 'text-green-600' : 'text-blue-600'}>
            {contactMessage}
          </span>
        }
      />

      <div>
        <Paragraph>
          <Highlight text={RESUME.callMe} />, <Highlight text={RESUME.sendAnEmail} /> {SHARED.or}{' '}
          <Highlight text={RESUME.connectOnLinkedIn} />{' '}
          {isOpenToWork ? RESUME.regardingJobOpportunities : RESUME.forNetworkingOnLinkedIn}
        </Paragraph>
      </div>

      <div className="mt-10 flex">
        <ScanMyContactQR width={QR_CODE_SIZE.LARGE.WIDTH} height={QR_CODE_SIZE.LARGE.HEIGHT} />
      </div>
    </>
  )
}

export default ResumeContact
