import FooterCopyright from '@/components/layout/footer/FooterCopyright'
import FooterSocialLinks from '@/components/layout/footer/FooterSocialLinks'
import FooterStatusAndScroll from '@/components/layout/footer/FooterStatusAndScroll'
import PageContainer from '@/components/layout/PageContainer'
import DividerInFooter from '@/components/layout/footer/divider/DividerInFooter'

import { ID } from '@/lib/utils/constants/ids/elementIds'

const Footer = (): JSX.Element => {
  return (
    <PageContainer id={ID.footer}>
      <footer>
        <DividerInFooter />

        <div className="mx-auto flex w-full flex-col items-center py-8 text-center text-neutral-600">
          <FooterSocialLinks />
          <FooterStatusAndScroll />
          <FooterCopyright />
        </div>
      </footer>
    </PageContainer>
  )
}

export default Footer
