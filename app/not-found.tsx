import Image from 'next/image'
import Link from 'next/link'

import PageContainer from '@/components/layout/PageContainer'
import Heading1 from '@/components/shared/Heading1'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import img404 from '@/public/images/webp/404.webp'

const NotFoundPage = () => {
  return (
    <PageContainer id={ID.error.err404}>
      <div className="flex flex-col items-center text-center">
        <Image src={img404} alt="404" width={400} height={417} loading="eager" className="bt-5" />
        <div className="mt-10">
          <Heading1 textSize="9xl" textSizeSM="9xl" textSizeLG="9xl">
            404
          </Heading1>
        </div>
        <p className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
          Sorry, we can&apos;t find that page.
        </p>
        <p className="mt-2 text-lg font-light text-neutral-600">It looks like we are fresh out of yarn!</p>
        <Link
          href={PAGES_URL.home}
          className="mt-8 inline-flex rounded-lg bg-purple-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300"
        >
          Back to Homepage
        </Link>
      </div>
    </PageContainer>
  )
}

export default NotFoundPage
