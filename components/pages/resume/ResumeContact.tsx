import { FC } from 'react'

import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'
import Photo from '@/components/shared/Photo'
import ScanMyContactQR from '@/components/shared/ScanMyContactQR'

import HeadingSection from '@/components/shared/HeadingSection'
import { ResumeContactProps } from '@/lib/utils/typeDefinitions/props/pages/resume/resume'

const ResumeContact: FC<ResumeContactProps> = ({ isOpenToWork = false }): JSX.Element => {
  const contactMessage = isOpenToWork ? `Open To Work` : 'For Networking'
  const contactPurpose = isOpenToWork ? 'job opportunities. I am open to new projects' : 'networking on LinkedIn'

  return (
    <>
      <HeadingSection
        text={
          <span>
            Scan My Contact
            <span className="mx-2 hidden sm:inline-block">—</span>
            <span className={`block font-bold sm:inline md:ml-2 ${isOpenToWork ? 'text-green-600' : 'text-blue-600'}`}>
              {contactMessage}
            </span>
          </span>
        }
      />

      <div>
        <Paragraph>
          Feel free to <Highlight text="call me" /> or <Highlight text="send an email" /> for {contactPurpose}.
        </Paragraph>
      </div>

      <div className="mt-8 flex flex-col items-center space-y-8 md:flex-row md:space-x-8 md:space-y-0">
        <ScanMyContactQR showImageCaption={true} />
        <Photo isOpenToWork={isOpenToWork} />
      </div>
    </>
  )
}

export default ResumeContact
