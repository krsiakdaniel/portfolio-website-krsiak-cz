import { FC } from 'react'

import FooterCopyright from '@/components/layout/footer/FooterCopyright'
import FooterSocialLinks from '@/components/layout/footer/FooterSocialLinks'
import FooterStatusAndScroll from '@/components/layout/footer/FooterStatusAndScroll'
import ScanMyContactQR from '@/components/shared/ScanMyContactQR'

const FooterContent: FC = (): JSX.Element => {
  return (
    <div className="mx-auto flex w-full flex-col items-center pb-16">
      <div className="flex flex-col">
        <section className="mt-16">
          <FooterSocialLinks />
        </section>

        <section className="mt-16 flex justify-center">
          <ScanMyContactQR showDivider />
        </section>
      </div>

      <section>
        <FooterStatusAndScroll />
        <FooterCopyright />
      </section>
    </div>
  )
}

export default FooterContent
