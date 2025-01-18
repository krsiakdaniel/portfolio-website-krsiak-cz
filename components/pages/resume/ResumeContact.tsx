import { FC } from 'react'

import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'
import Photo from '@/components/shared/Photo'
import ScanMyContactQR from '@/components/shared/ScanMyContactQR'

const ResumeContact: FC = (): JSX.Element => {
  return (
    <div>
      <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">Scan To Add Contact</div>
      <Paragraph>
        <span className="font-bold text-green-600">OPEN TO WORK:</span> For networking or job opportunities feel free to{' '}
        <Highlight text="call me" /> or <Highlight text="write an email" />.
      </Paragraph>

      <div className="mt-8 flex flex-col items-center space-y-8 md:flex-row md:space-x-8 md:space-y-0">
        <ScanMyContactQR width={296} height={296} showNote />
        <Photo />
      </div>
    </div>
  )
}

export default ResumeContact
