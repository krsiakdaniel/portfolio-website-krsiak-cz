import img404 from '@/public/images/404.png'
import Image from 'next/image'
import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center flex flex-col items-center">
            <Image src={img404} alt="404" width={400} height={417} className="mb-10 bt-5" />
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-purple-600 dark:text-purple-500">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Sorry, we can&apos;t find that page.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              You&apos;ll find lots to explore on the home page.
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
    </>
  )
}

export default NotFoundPage
