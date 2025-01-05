import Image from 'next/image'

import DividerWithText from '@/components/shared/DividerWithText'
import Heading2 from '@/components/shared/Heading2'

import { IMAGE_ALT } from '@/localization/english'

import ibm from '@/public/images/svg/logo/ibm.svg'
import komercniBanka from '@/public/images/svg/logo/komercni-banka.svg'
import kooperativa from '@/public/images/svg/logo/kooperativa.svg'
import microsoft from '@/public/images/svg/logo/microsoft.svg'
import rwsMoravia from '@/public/images/svg/logo/rws-moravia.svg'
import smartsupp from '@/public/images/svg/logo/smartsupp.svg'

const Companies = (): JSX.Element => {
  const logosWrapperCss = 'flex flex-col items-center justify-center lg:mt-16 lg:flex-row lg:gap-16'
  const imageCss = 'mt-16 lg:mt-0'

  return (
    <section>
      <div className="mt-16">
        <DividerWithText text="Companies" />
        <div className="text-center">
          <Heading2>Worked For Companies</Heading2>
        </div>

        <div className={logosWrapperCss}>
          <Image src={microsoft} width={256} alt={IMAGE_ALT.microsoft} className={imageCss} />
          <Image src={smartsupp} width={256} alt={IMAGE_ALT.smartsupp} className={imageCss} />
          <Image src={kooperativa} width={256} alt={IMAGE_ALT.kooperativa} className={imageCss} />
        </div>
        <div className={logosWrapperCss}>
          <Image src={ibm} width={130} alt={IMAGE_ALT.ibm} className={imageCss} />
          <Image src={rwsMoravia} width={200} alt={IMAGE_ALT.rwsMoravia} className={imageCss} />
        </div>
        <div className={logosWrapperCss}>
          <Image src={komercniBanka} width={130} alt={IMAGE_ALT.komercniBanka} className={imageCss} />
        </div>
      </div>
    </section>
  )
}

export default Companies
