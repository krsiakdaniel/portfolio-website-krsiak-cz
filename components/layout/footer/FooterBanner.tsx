import Image from 'next/image'
import { FC } from 'react'

import footerBanner from '@/public/images/webp/footer/react-typescript-banner.webp'

const FooterBanner: FC = (): JSX.Element => {
  return (
    <div className="mt-8">
      <Image
        src={footerBanner}
        alt="Krsiak Daniel - React and TypeScript Developer"
        width={1240}
        height={350}
        className="rounded-lg"
      />
    </div>
  )
}

export default FooterBanner
