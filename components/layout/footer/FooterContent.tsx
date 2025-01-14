import { FC } from 'react'

import FooterCopyright from '@/components/layout/footer/FooterCopyright'
import FooterSocialLinks from '@/components/layout/footer/FooterSocialLinks'
import FooterStatusAndScroll from '@/components/layout/footer/FooterStatusAndScroll'
import ScanMyContactQR from '@/components/shared/ScanMyContactQR'

const FooterContent: FC = (): JSX.Element => {
  return (
    <div className="mx-auto flex w-full flex-col items-center pb-16">
      <div className="flex flex-col">
        <div className="mt-16">
          <FooterSocialLinks />
        </div>

        <div className="mt-16 flex justify-center">
          <ScanMyContactQR showDivider />
        </div>
      </div>

      <div>
        <FooterStatusAndScroll />
        <FooterCopyright />
      </div>
    </div>
  )
}

export default FooterContent
