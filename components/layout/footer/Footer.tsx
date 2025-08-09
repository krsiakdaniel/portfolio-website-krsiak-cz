import { FC } from 'react'

import Copyright from '@/components/layout/footer/Copyright'
import DividerWithEmojis from '@/components/layout/footer/divider/DividerWithEmojis'
import Status from '@/components/layout/footer/Status'
import PageContainer from '@/components/layout/PageContainer'
import DividerWithText from '@/components/shared/DividerWithText'
import ScanMyContactQR from '@/components/shared/ScanMyContactQR'

import { ARIA_LABELS, DIVIDER_WITH_TEXT } from '@/localization/english'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import ScrollToTopButton from './ScrollToTopButton'

const Footer: FC = (): JSX.Element => {
  return (
    <PageContainer id={ID.footer}>
      <footer role="contentinfo" aria-label={ARIA_LABELS.siteFooter}>
        <DividerWithEmojis />

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
