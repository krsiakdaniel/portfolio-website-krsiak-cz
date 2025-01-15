import { FC } from 'react'

import DividerInFooter from '@/components/layout/footer/divider/DividerInFooter'
import FooterContent from '@/components/layout/footer/FooterContent'
import PageContainer from '@/components/layout/PageContainer'

import { ID } from '@/lib/utils/constants/ids/elementIds'

const Footer: FC = (): JSX.Element => {
  return (
    <PageContainer id={ID.footer}>
      <footer>
        <DividerInFooter />
        <FooterContent />
      </footer>
    </PageContainer>
  )
}

export default Footer
