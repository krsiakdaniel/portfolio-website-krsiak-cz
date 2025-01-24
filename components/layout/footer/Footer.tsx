import { FC } from 'react'

import DividerInFooter from '@/components/layout/footer/divider/DividerInFooter'
import FooterCopyright from '@/components/layout/footer/FooterCopyright'
import FooterStatusAndScroll from '@/components/layout/footer/FooterStatusAndScroll'
import PageContainer from '@/components/layout/PageContainer'
import ScanMyContactQR from '@/components/shared/ScanMyContactQR'

import { ID } from '@/lib/utils/constants/ids/elementIds'

const Footer: FC = (): JSX.Element => {
  return (
    <PageContainer id={ID.footer}>
      <footer>
        <DividerInFooter />

        <div className="mx-auto mt-20 flex w-full flex-col items-center justify-center pb-16">
          <ScanMyContactQR showDivider={true} />
          <FooterStatusAndScroll />
          <FooterCopyright />
        </div>
      </footer>
    </PageContainer>
  )
}

export default Footer
