import { FC } from 'react'

import Paragraph from '@/components/shared/Paragraph'
import Photo from '@/components/shared/Photo'
import ScanMyContactQR from '@/components/shared/ScanMyContactQR'

const ResumeContact: FC = (): JSX.Element => {
  return (
    <div>
      <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">Contact Me</div>
      <Paragraph>Scan my contact and feel free to call me or write an email.</Paragraph>

      <div className="mt-8 flex flex-col items-center space-y-8 md:flex-row md:space-x-8 md:space-y-0">
        <ScanMyContactQR width={296} height={296} showNote />
        <Photo />
      </div>
    </div>
  )
}

export default ResumeContact
