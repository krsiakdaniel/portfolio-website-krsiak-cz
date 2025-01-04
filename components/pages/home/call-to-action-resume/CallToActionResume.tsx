import IconArrow from '@/components/icons/IconArrow'
import Heading2 from '@/components/shared/Heading2'
import Highlight from '@/components/shared/Highlight'

import { TEXT } from '@/localization/english'

import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { NavigationDirectionEnum } from '@/lib/utils/interfaces/enums'

const CallToActionResume = (): JSX.Element => {
  return (
    <div className="mt-16 rounded-lg bg-blue-50 p-10">
      <div className="flex">
        <div className="md:w-2/3">
          <Heading2 textColor="text-neutral-900">Explore My Resume</Heading2>
          <p className="mt-3 text-xl tracking-tight text-neutral-900">
            Learn more about my skills, experience, and accomplishments in <Highlight text="React development" />, to
            get a detailed overview of my career path.
          </p>
          <div className="mt-8 w-full">
            <a
              href={PAGES_URL.resume}
              rel="noopener noreferrer"
              title="Opens in a new tab"
              className="text-md flex w-full items-center justify-center rounded-lg bg-red-700 px-5 py-2.5 text-center font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 sm:w-[248px]"
              data-testid={DATA_TEST_IDS.callToAction.linkResume}
            >
              {TEXT.resume}
              <IconArrow direction={NavigationDirectionEnum.Right} />
            </a>
          </div>
        </div>
        <div className="hidden items-center justify-center md:flex md:w-1/3">
          <div className="text-9xl">📝</div>
        </div>
      </div>
    </div>
  )
}

export default CallToActionResume
