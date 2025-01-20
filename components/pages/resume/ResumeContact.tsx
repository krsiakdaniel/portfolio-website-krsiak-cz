import { FC } from 'react'

import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'
import Photo from '@/components/shared/Photo'
import ScanMyContactQR from '@/components/shared/ScanMyContactQR'

import { ResumeContactProps } from '@/lib/utils/typeDefinitions/props/pages/resume'

const ResumeContact: FC<ResumeContactProps> = ({ isOpenToWork }): JSX.Element => {
  const contactMessage = isOpenToWork ? 'I Am Open To Work' : 'For Networking'
  const contactPurpose = isOpenToWork ? 'job opportunities' : 'networking'

  return (
    <div>
      <div className="mt-20 border-b pb-2 text-2xl font-bold uppercase">
        Scan My Contact -
        <span className={`ml-2 font-bold ${isOpenToWork ? 'text-green-600' : 'text-blue-600'}`}>{contactMessage}</span>
      </div>
      <Paragraph>
        For {contactPurpose} feel free to <Highlight text="call me" /> or <Highlight text="write an email" />.
      </Paragraph>

      <div className="mt-8 flex flex-col items-center space-y-8 md:flex-row md:space-x-8 md:space-y-0">
        <ScanMyContactQR width={296} height={296} showNote />
        <Photo isOpenToWork={isOpenToWork} />
      </div>
    </div>
  )
}

export default ResumeContact
