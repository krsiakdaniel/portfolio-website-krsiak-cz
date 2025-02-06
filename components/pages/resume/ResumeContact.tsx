import { FC } from 'react'

import HeadingSection from '@/components/shared/HeadingSection'
import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'
import ScanMyContactQR from '@/components/shared/ScanMyContactQR'

import { RESUME, SHARED, TEXT } from '@/localization/english'

import { IS_OPEN_TO_WORK } from '@/lib/utils/constants/shared/openToWork'
import { EM_DASH } from '@/lib/utils/constants/specialCharacters'

const ResumeContact: FC = (): JSX.Element => {
  const isOpenToWork = IS_OPEN_TO_WORK

  const contactMessage = isOpenToWork ? TEXT.openToWork : TEXT.openToNetworking
  const contactPurpose = isOpenToWork
    ? RESUME.regardingJobOpportunities
    : RESUME.forNetworkingOnLinkedIn

  return (
    <>
      <HeadingSection
        text={
          <span>
            {RESUME.scanQR}
            <span className="mx-2 hidden sm:inline-block">{EM_DASH}</span>
            <span
              className={`block font-bold sm:inline md:ml-2 ${isOpenToWork ? 'text-green-600' : 'text-blue-600'}`}
            >
              {contactMessage}
            </span>
          </span>
        }
      />

      <div>
        <Paragraph>
          {RESUME.feelFreeTo} <Highlight text={RESUME.callMe} /> {SHARED.or}
          {'\u00A0'}
          <Highlight text={RESUME.sendAnEmail} /> {contactPurpose}.
        </Paragraph>
      </div>

      <div className="mt-8 flex">
        <ScanMyContactQR showImageCaption={true} />
      </div>
    </>
  )
}

export default ResumeContact
