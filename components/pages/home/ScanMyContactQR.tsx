import Image from 'next/image'
import { FC } from 'react'

import FooterSocialLinks from '@/components/layout/footer/FooterSocialLinks'
import DividerWithText from '@/components/shared/DividerWithText'

import contactQR from '@/public/images/svg/vcard-contact/qr-code-vcard.svg'

const ScanMyContactQR: FC = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center">
      <section className="mt-16 flex flex-col items-center">
        <DividerWithText text="My Links" />
        <FooterSocialLinks />
      </section>

      <section className="mt-16 flex flex-col items-center">
        <DividerWithText text="Contact Me" />
        <Image
          src={contactQR}
          width={256}
          height={256}
          alt="Contact Me - QR code"
          className="rounded-lg bg-violet-100 p-1 ring-1 ring-violet-300"
        />
      </section>
    </div>
  )
}

export default ScanMyContactQR
