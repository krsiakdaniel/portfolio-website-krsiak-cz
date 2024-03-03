import PageContainer from '@/components/layout/PageContainer'
import img404 from '@/public/images/illustrations/404.png'
import { ID_ERROR_404 } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <PageContainer id={ID_ERROR_404}>
      <div className="flex flex-col items-center text-center">
        <Image src={img404} alt="404" width={400} height={417} className="mb-10 bt-5" />
        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-violet-600 dark:text-violet-600 uppercase">
          404
        </h1>
        <p className="mb-4 text-3xl tracking-tight font-bold text-neutral-900 md:text-4xl dark:text-white">
          Sorry, we can&apos;t find that page.
        </p>
        <p className="mb-4 text-lg font-light text-neutral-600 dark:text-neutral-600">
          It looks like we are fresh out of yarn!
        </p>
        <Link
          href="/"
          className="inline-flex text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-purple-900 my-4"
        >
          Back to Homepage
        </Link>
      </div>
    </PageContainer>
  )
}

export default NotFoundPage
