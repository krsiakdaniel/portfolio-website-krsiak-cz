import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { getCurrentYear } from '@/utils/helpers/getCurrentYear'
import Link from 'next/link'

export const FooterLeft = () => {
  return (
    <div>
      <span>😼 😺</span>
      <span className="ml-2" data-testid={DATA_TEST_IDS.footer.copyright}>
        Copyright ©&nbsp;{getCurrentYear()}
      </span>
      <span className="mx-2 hidden md:inline-flex">|</span>
      <span className="mt-4 block md:mt-0 md:inline">
        <Link href="/" className="text-violet-600 underline hover:no-underline" data-testid={DATA_TEST_IDS.footer.link}>
          krsiak.cz
        </Link>
      </span>
    </div>
  )
}

export default FooterLeft
