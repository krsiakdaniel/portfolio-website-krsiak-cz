import PageContainer from '@/components/layout/PageContainer'
import { ID } from '@/utils/constants/ids/elementIds'
import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'

const Footer = () => {
  return (
    <PageContainer id={ID.footer}>
      <footer className="border-t border-dashed bg-white">
        <div className="mx-auto flex w-full flex-col items-center justify-between py-4 text-center text-neutral-600 md:flex-row">
          <FooterLeft />
          <FooterRight />
        </div>
      </footer>
    </PageContainer>
  )
}

export default Footer
