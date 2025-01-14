import Image from 'next/image'
import { FC } from 'react'

import DividerWithText from '@/components/shared/DividerWithText'

import { DIVIDER_WITH_TEXT } from '@/localization/english'

import contactQR from '@/public/images/svg/vcard-contact/krsiak-daniel-qr-code-vcard.svg'

type ScanMyContactQRProps = {
  showDivider?: boolean
  showNote?: boolean
  width?: number
  height?: number
}

const WIDTH = 256
const HEIGHT = 256

const ScanMyContactQR: FC<ScanMyContactQRProps> = ({
  showDivider = false,
  showNote = false,
  width = WIDTH,
  height = HEIGHT,
}): JSX.Element => {
  return (
    <div className="flex flex-col items-center">
      {showDivider && <DividerWithText text={DIVIDER_WITH_TEXT.contactMe} />}
      <Image
        src={contactQR}
        width={width}
        height={height}
        alt="Contact Me - QR code"
        className="rounded-lg bg-violet-100 p-1 ring-1 ring-violet-300"
      />
      {showNote && (
        <div className="mt-2 self-start">
          <p className="text-sm text-gray-500">Scan Contact</p>
        </div>
      )}
    </div>
  )
}

export default ScanMyContactQR
