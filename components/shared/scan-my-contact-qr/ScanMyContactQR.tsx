import ImageComponent from '@/components/shared/image-component/ImageComponent'
import { ScanMyContactQRProps } from '@/components/shared/scan-my-contact-qr/ScanMyContactQR.types'

import { QR_CODE_SIZE } from '@/lib/utils/constants/shared/qrCode'

import contactQR from '@/public/images/svg/vcard-contact/krsiak-daniel-qr-code-vcard.svg'

import { ImageLoadingEnum } from '@/lib/types/enums'
import { CONTACT } from '@/localization'

const ScanMyContactQR = ({
  width = QR_CODE_SIZE.SMALL.WIDTH,
  height = QR_CODE_SIZE.SMALL.HEIGHT,
}: ScanMyContactQRProps) => {
  return (
    <div className="flex flex-col items-center">
      <ImageComponent
        src={contactQR}
        width={width}
        height={height}
        alt={CONTACT.contactMeQRCode}
        loading={ImageLoadingEnum.EAGER}
        customCss="rounded-lg border border-violet-300 bg-violet-50 p-1"
      />
    </div>
  )
}

export default ScanMyContactQR
