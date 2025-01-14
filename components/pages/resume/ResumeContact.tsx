import { FC } from 'react'

import Photo from '@/components/shared/Photo'
import ScanMyContactQR from '@/components/shared/ScanMyContactQR'

const ResumeContact: FC = (): JSX.Element => {
  return (
    <section>
      <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">Contact Me</div>
      <p className="mt-4 text-lg text-neutral-600">Scan my contact and feel free to call me or write an email.</p>

      <div className="mt-8 flex flex-col items-center space-y-8 md:flex-row md:space-x-8 md:space-y-0">
        <ScanMyContactQR width={296} height={296} showNote />
        <Photo />
      </div>
    </section>
  )
}

export default ResumeContact
