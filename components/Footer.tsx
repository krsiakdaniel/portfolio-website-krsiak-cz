import PageContainer from '@/components/layout/PageContainer'
import { ID_FOOTER } from '@/utils/constants'
import Link from 'next/link'

const getCurrentYear = () => {
  return new Date().getFullYear()
}

const Footer = () => {
  return (
    <PageContainer id={ID_FOOTER}>
      <footer className="border-t border-dashed bg-white dark:bg-gray-800">
        <div className="mx-auto flex w-full flex-col items-center py-4 text-neutral-600 dark:text-gray-300 md:flex-row md:gap-2">
          <span>😼 😺</span>
          <span>Copyright © {getCurrentYear()}</span>
          <span className="hidden md:inline-flex">|</span>
          <span>
            <Link href="/" className="underline hover:text-violet-600 hover:no-underline">
              krsiak.cz
            </Link>
          </span>
        </div>
      </footer>
    </PageContainer>
  )
}
export default Footer
