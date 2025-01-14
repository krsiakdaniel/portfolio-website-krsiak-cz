import { FC } from 'react'

import DividerInFooter from '@/components/layout/footer/divider/DividerInFooter'
import FooterContent from '@/components/layout/footer/FooterContent'

import { ID } from '@/lib/utils/constants/ids/elementIds'

const Footer: FC = (): JSX.Element => {
  return (
    <div id={ID.footer} className="mt-20 px-5">
      <div className="container mx-auto max-w-screen-xl px-5">
        <footer>
          <DividerInFooter />
          <FooterContent />
        </footer>
      </div>
    </div>
  )
}

export default Footer
