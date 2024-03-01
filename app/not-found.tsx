import img404 from '@/public/images/404.png'
import { ID_ERROR_404 } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div id={ID_ERROR_404} className="mt-20 px-5">
      <div className="container mx-auto px-5 max-w-screen-xl border-x border-black">
        <div className="flex flex-col items-center text-center">
          <Image src={img404} alt="404" width={400} height={417} className="mb-10 bt-5" />
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-purple-600 dark:text-purple-500 uppercase">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Sorry, we can&apos;t find that page.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            It looks like we are fresh out of yarn!
          </p>
          <Link
            href="/"
            className="inline-flex text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-purple-900 my-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
