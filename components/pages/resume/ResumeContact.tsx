import { FC } from 'react'

import HeadingSection from '@/components/shared/HeadingSection'
import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'
import ScanMyContactQR from '@/components/shared/ScanMyContactQR'

import { RESUME, SHARED, TEXT } from '@/localization/english'

import { IS_OPEN_TO_WORK } from '@/lib/utils/constants/shared/openToWork'

const ResumeContact: FC = (): JSX.Element => {
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
        <ScanMyContactQR showImageCaption={true} />
      </div>
    </>
  )
}

export default ResumeContact
