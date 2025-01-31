import { FC } from 'react'

import HeadingSection from '@/components/shared/HeadingSection'
import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'
import Photo from '@/components/shared/Photo'
import ScanMyContactQR from '@/components/shared/ScanMyContactQR'

import { TEXT } from '@/localization/english'

import { IS_OPEN_TO_WORK } from '@/lib/utils/constants/shared/openToWork'

const ResumeContact: FC = (): JSX.Element => {
  const isOpenToWork = IS_OPEN_TO_WORK

  const contactMessage = isOpenToWork ? TEXT.openToWork : TEXT.openToNetworking
  const contactPurpose = isOpenToWork ? 'regarding job opportunities' : 'for networking on LinkedIn'

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
          Feel free to <Highlight text="call me" /> or <Highlight text="send an email" /> {contactPurpose}.
        </Paragraph>
      </div>

      <div className="mt-8 flex flex-col items-center space-y-8 md:flex-row md:space-x-8 md:space-y-0">
        <ScanMyContactQR showImageCaption={true} />
        <Photo isPhotoSmall={false} isOpenToWork={isOpenToWork} showCaption={true} />
      </div>
    </>
  )
}

export default ResumeContact
