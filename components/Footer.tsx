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
        <div className="w-full mx-auto py-4 md:flex md:items-center md:justify-between text-center">
          <p className="text-gray-400 dark:text-gray-300">
            Copyright © {getCurrentYear()} |{' '}
            <Link href="/" className="hover:text-purple-500 underline hover:no-underline">
              krsiak.cz
            </Link>
          </p>
        </div>
      </footer>
    </PageContainer>
  )
}
export default Footer
