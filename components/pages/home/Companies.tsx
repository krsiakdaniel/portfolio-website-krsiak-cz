import Image from 'next/image'

import DividerWithText from '@/components/shared/DividerWithText'
import Heading2 from '@/components/shared/Heading2'

import ibm from '@/public/images/svg/logo/ibm.svg'
import komercniBanka from '@/public/images/svg/logo/komercni-banka.svg'
import kooperativa from '@/public/images/svg/logo/kooperativa.svg'
import microsoft from '@/public/images/svg/logo/microsoft.svg'
import rwsMoravia from '@/public/images/svg/logo/rws-moravia.svg'
import smartsupp from '@/public/images/svg/logo/smartsupp.svg'

const Companies = (): JSX.Element => {
  return (
    <section>
      <div className="mt-16">
        <DividerWithText text="Companies" />
        <div className="text-center">
          <Heading2>Worked For Companies</Heading2>
        </div>

        <div className="mt-16 flex flex-col items-center justify-center lg:flex-row lg:gap-16">
          <Image src={microsoft} alt="microsoft" width={256} />
          <Image src={smartsupp} alt="smartsupp" width={256} className="mt-8 lg:mt-0" />
          <Image src={kooperativa} alt="kooperativa" width={256} className="mt-8 lg:mt-0" />
        </div>
        <div className="mt-8 flex flex-col items-center justify-center lg:mt-16 lg:flex-row lg:gap-16">
          <Image src={ibm} alt="ibm" width={130} />
          <Image src={rwsMoravia} alt="rwsMoravia" width={200} className="mt-8 lg:mt-0" />
        </div>
        <div className="mt-8 flex flex-col items-center justify-center lg:mt-16 lg:flex-row lg:gap-16">
          <Image src={komercniBanka} alt="komercniBanka" width={130} />
        </div>
      </div>
    </section>
  )
}

export default Companies
