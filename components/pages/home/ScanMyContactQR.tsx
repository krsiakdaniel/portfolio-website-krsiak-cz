import Image from 'next/image'
import { FC } from 'react'

import DividerWithText from '@/components/shared/DividerWithText'
import Heading2 from '@/components/shared/Heading2'

import contactQR from '@/public/images/svg/vcard-contact/qr-code-vcard.svg'

const ScanMyContactQR: FC = (): JSX.Element => {
  return (
    <section className="mt-16">
      <DividerWithText text="Contact Me" />
      <div className="text-center">
        <Heading2>Scan To Add Contact</Heading2>
      </div>
      <div className="mt-8 flex justify-center">
        <Image
          src={contactQR}
          width={256}
          height={256}
          alt="Contact Me - QR code"
          className="rounded-lg bg-violet-100 p-1 ring-1 ring-violet-300"
        />
      </div>
    </section>
  )
}

export default ScanMyContactQR
