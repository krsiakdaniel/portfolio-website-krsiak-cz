import FooterCopyright from '@/components/footer/FooterCopyright'
import FooterSocialLinks from '@/components/footer/FooterSocialLinks'
import FooterStatusAndScroll from '@/components/footer/FooterStatusAndScroll'
import PageContainer from '@/components/layout/PageContainer'

import { ID } from '@/lib/utils/constants/ids/elementIds'

const Footer = (): JSX.Element => {
  return (
    <PageContainer id={ID.footer}>
      <footer className="border-t border-dashed bg-white">
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
