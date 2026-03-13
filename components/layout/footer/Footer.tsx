import PageContainer from '@/components/layout/PageContainer'
import Copyright from '@/components/layout/footer/Copyright'
import Status from '@/components/layout/footer/Status'
import DividerWithText from '@/components/shared/DividerWithText'
import ScanMyContactQR from '@/components/shared/ScanMyContactQR'

import { ID } from '@/lib/utils/constants/ids/elementIds'

import { ARIA_LABELS, DIVIDER_WITH_TEXT } from '@/localization'

import ScrollToTopButton from './ScrollToTopButton'

const Footer = () => {
  return (
    <PageContainer id={ID.footer}>
      <footer role="contentinfo" aria-label={ARIA_LABELS.siteFooter}>
        <div className="mx-auto mt-20 flex w-full flex-col items-center justify-center pb-16">
          <div>
            <DividerWithText text={DIVIDER_WITH_TEXT.contactMe} />
            <ScanMyContactQR showImageCaption={false} />
          </div>

          <Status />
          <Copyright />
        </div>

        <ScrollToTopButton />
      </footer>
    </PageContainer>
  )
}

export default Footer
