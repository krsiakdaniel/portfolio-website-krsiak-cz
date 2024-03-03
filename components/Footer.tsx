import PageContainer from '@/components/layout/PageContainer'
import { ID_FOOTER } from '@/utils/constants'
import Link from 'next/link'

const getCurrentYear = () => {
  return new Date().getFullYear()
}

const Footer = () => {
  return (
    <PageContainer id={ID_FOOTER}>
      <footer className="bg-white dark:bg-gray-800 border-t border-dashed">
        <div className="w-full mx-auto py-4 flex flex-col md:flex-row md:gap-2 items-center text-neutral-600 dark:text-gray-300">
          <span>😼 😺</span>
          <span>Copyright © {getCurrentYear()}</span>
          <span className="hidden md:inline-flex">|</span>
          <span>
            <Link href="/" className="hover:text-violet-600 underline hover:no-underline">
              krsiak.cz
            </Link>
          </span>
        </div>
      </footer>
    </PageContainer>
  )
}
export default Footer
