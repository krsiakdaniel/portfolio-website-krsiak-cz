import HeadingSection from '@/components/shared/HeadingSection'
import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'
import ScanMyContactQR from '@/components/shared/ScanMyContactQR'

import { RESUME, SHARED, TEXT } from '@/localization/english'

import { QR_CODE } from '@/components/shared/constants'
import { IS_OPEN_TO_WORK } from '@/lib/utils/constants/shared/openToWork'

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
        <ScanMyContactQR
          width={QR_CODE.LARGE.WIDTH}
          height={QR_CODE.LARGE.HEIGHT}
          showImageCaption={true}
        />
      </div>
    </>
  )
}

export default ResumeContact
