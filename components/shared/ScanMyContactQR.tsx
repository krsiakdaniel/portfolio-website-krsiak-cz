import Image from 'next/image'
import { FC } from 'react'

import DividerWithText from '@/components/shared/DividerWithText'
import Paragraph from '@/components/shared/Paragraph'

import { DIVIDER_WITH_TEXT } from '@/localization/english'

import contactQR from '@/public/images/svg/vcard-contact/krsiak-daniel-qr-code-vcard.svg'

import { ScanMyContactQRProps } from '@/lib/utils/typeDefinitions/props'

const IMAGE_WIDTH = 256
const IMAGE_HEIGHT = 256

const ScanMyContactQR: FC<ScanMyContactQRProps> = ({
  showDivider = false,
  showNote = false,
  width = IMAGE_WIDTH,
  height = IMAGE_HEIGHT,
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
        <div className="self-start">
          <Paragraph marginTop="mt-2" size="text-sm" textColor="text-neutral-500">
            Scan Contact
          </Paragraph>
        </div>
      )}
    </div>
  )
}

export default ScanMyContactQR
