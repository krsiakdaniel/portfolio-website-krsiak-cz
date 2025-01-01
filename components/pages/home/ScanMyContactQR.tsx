import Image from 'next/image'

import DividerWithText from '@/components/shared/DividerWithText'
import Heading2 from '@/components/shared/Heading2'

import contactQR from '@/public/images/svg/qr-code-vcard.svg'

const ScanMyContactQR = (): JSX.Element => {
  return (
    <section className="mt-16">
      <DividerWithText text="Contact Me" />
      <div className="text-center">
        <Heading2>Scan To Add Contact</Heading2>
      </div>
      <div className="mt-8 flex justify-center">
        <Image src={contactQR} alt="QR code" width={256} />
      </div>
    </section>
  )
}

export default ScanMyContactQR
