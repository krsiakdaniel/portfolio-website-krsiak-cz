import { FC } from 'react'

import DividerInFooter from '@/components/layout/footer/divider/DividerInFooter'
import FooterBanner from '@/components/layout/footer/FooterBanner'
import FooterCopyright from '@/components/layout/footer/FooterCopyright'
import FooterSocialLinks from '@/components/layout/footer/FooterSocialLinks'
import FooterStatusAndScroll from '@/components/layout/footer/FooterStatusAndScroll'
import { ID } from '@/lib/utils/constants/ids/elementIds'

const Footer: FC = (): JSX.Element => {
  return (
    <div id={ID.footer} className="mt-20 px-5">
      <div className="container mx-auto max-w-screen-xl px-5">
        <footer>
          <DividerInFooter />

          <div className="mx-auto mt-20 flex w-full flex-col items-center pb-16">
            <FooterSocialLinks />
            <FooterBanner />
            <FooterStatusAndScroll />
            <FooterCopyright />
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
