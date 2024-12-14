import ScrollToTopButton from '@/components/footer/ScrollToTopButton'
import PageContainer from '@/components/layout/PageContainer'
import { ID } from '@/utils/constants'
import { DATA_TEST_IDS } from '@/utils/dataTestIds'
import { getCurrentYear } from '@/utils/getCurrentYear'
import Link from 'next/link'

const FooterLeft = () => {
  return (
    <div>
      <span>😼 😺</span>
      <span className="ml-2" data-testid={DATA_TEST_IDS.footer.copyright}>
        Copyright ©&nbsp;{getCurrentYear()}
      </span>
      <span className="mx-2 hidden md:inline-flex">|</span>
      <span className="mt-4 block md:mt-0 md:inline">
        <Link href="/" className="text-violet-600 underline hover:no-underline" data-testid={DATA_TEST_IDS.footer.link}>
          krsiak.cz
        </Link>
      </span>
    </div>
  )
}

const FooterRight = () => {
  return (
    <div className="flex space-x-4">
      <div className="mt-4 flex space-x-2 md:mt-0">
        <Link
          href="/status-page"
          className="text-violet-600 underline hover:no-underline"
          data-testid={DATA_TEST_IDS.footer.statusPage}
        >
          Status page
        </Link>
        <span className="hidden md:inline">🟢</span>
      </div>
      <ScrollToTopButton />
    </div>
  )
}

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
