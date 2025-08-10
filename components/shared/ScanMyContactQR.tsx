import ImageComponent from '@/components/shared/ImageComponent'
import ImageComponentCaption from '@/components/shared/ImageComponentCaption'

import { CONTACT, TEXT } from '@/localization/english'

import { ScanMyContactQRProps } from '@/lib/utils/typeDefinitions/props/shared/scan-my-contact-qr'

import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'

import contactQR from '@/public/images/svg/vcard-contact/krsiak-daniel-qr-code-vcard.svg'
import { QR_CODE } from './constants'

const ScanMyContactQR = ({
  width = QR_CODE.WIDTH,
  height = QR_CODE.HEIGHT,
  showImageCaption = false,
}: ScanMyContactQRProps) => {
  return (
    <div className="flex flex-col items-center">
      <ImageComponent
        src={contactQR}
        width={width}
        height={height}
        alt={CONTACT.contactMeQRCode}
        loading={ImageLoading.EAGER}
        customCss="rounded-lg border border-violet-300 bg-violet-50 p-1 shadow-md"
        caption={showImageCaption ? <ImageComponentCaption text={TEXT.scanQR} /> : ''}
        dataTooltipContent={CONTACT.scanQR}
      />
    </div>
  )
}

export default ScanMyContactQR
