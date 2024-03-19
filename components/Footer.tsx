import ScrollToTopButton from '@/components/footer/ScrollToTopButton.client'
import PageContainer from '@/components/layout/PageContainer'
import { ID } from '@/utils/constants'
import { getCurrentYear } from '@/utils/getCurrentYear'
import Link from 'next/link'

const Footer = () => {
  return (
    <PageContainer id={ID.footer}>
      <footer className="border-t border-dashed bg-white">
        <div className="mx-auto flex w-full flex-col items-center justify-between py-4 text-center text-neutral-600 md:flex-row">
          <div className="space-x-2">
            <span>😼 😺</span>
            <span data-testid="footer-copyright">Copyright ©&nbsp;{getCurrentYear()}</span>
            <span className="hidden md:inline-flex">|</span>
            <span className="block md:inline">
              <Link href="/" className="hover:text-violet-600 hover:no-underline" data-testid="footer-link">
                krsiak.cz
              </Link>
            </span>
          </div>

          <ScrollToTopButton />
        </div>
      </footer>
    </PageContainer>
  )
}
export default Footer
