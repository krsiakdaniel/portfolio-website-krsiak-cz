import FooterCopyright from '@/components/layout/footer/FooterCopyright'
import FooterStatusAndScroll from '@/components/layout/footer/FooterStatusAndScroll'
import PageContainer from '@/components/layout/pages/PageContainer'

import FooterMainLinks from '@/components/layout/footer/FooterMainLinks'
import { ID } from '@/lib/utils/constants/ids/elementIds'

const Footer = (): JSX.Element => {
  return (
    <PageContainer id={ID.footer}>
      <footer className="border-t border-dashed bg-white">
        <div className="mx-auto flex w-full flex-col items-center py-8 text-center text-neutral-600">
          <FooterMainLinks />
          <FooterStatusAndScroll />
          <FooterCopyright />
        </div>
      </footer>
    </PageContainer>
  )
}

export default Footer
