import PageContainer from '@/components/layout/PageContainer'
import img404 from '@/public/images/illustrations/404.png'
import { ID_ERROR_404 } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <PageContainer id={ID_ERROR_404}>
      <div className="flex flex-col items-center text-center">
        <Image src={img404} alt="404" width={400} height={417} className="bt-5 mb-10" />
        <h1 className="mb-4 text-7xl font-extrabold uppercase tracking-tight text-violet-600 dark:text-violet-600 lg:text-9xl">
          404
        </h1>
        <p className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
          Sorry, we can&apos;t find that page.
        </p>
        <p className="mb-4 text-lg font-light text-neutral-600 dark:text-neutral-600">
          It looks like we are fresh out of yarn!
        </p>
        <Link
          href="/"
          className="my-4 inline-flex rounded-lg bg-purple-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900"
        >
          Back to Homepage
        </Link>
      </div>
    </PageContainer>
  )
}

export default NotFoundPage
