import { FC } from 'react'

import ImageComponent from '@/components/shared/ImageComponent'
import ImageComponentCaption from '@/components/shared/ImageComponentCaption'

import { TEXT, TOOLTIP } from '@/localization/english'

import { ScanMyContactQRProps } from '@/lib/utils/typeDefinitions/props/shared/scan-my-contact-qr'

import contactQR from '@/public/images/svg/vcard-contact/krsiak-daniel-qr-code-vcard.svg'

const IMAGE_WIDTH = 296
const IMAGE_HEIGHT = 296

const ScanMyContactQR: FC<ScanMyContactQRProps> = ({
  width = IMAGE_WIDTH,
  height = IMAGE_HEIGHT,
  showImageCaption = false,
}): JSX.Element => {
  return (
    <div className="flex flex-col items-center">
      <ImageComponent
        src={contactQR}
        width={width}
        height={height}
        alt="Contact Me - QR code"
        loading="eager"
        customCss="rounded-lg border border-violet-300 bg-violet-50 p-1 shadow-md"
        caption={showImageCaption ? <ImageComponentCaption text={TEXT.scanQR} /> : ''}
        dataTooltipContent={TOOLTIP.scanQR}
      />
    </div>
  )
}

export default ScanMyContactQR
