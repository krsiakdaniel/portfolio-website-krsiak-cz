import { Metadata } from 'next'

import PageContainer from '@/components/layout/PageContainer'
import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import ResumeInfo from '@/components/pages/resume/ResumeInfo'
import ResumePreviewEmbed from '@/components/pages/resume/ResumePreviewEmbed'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'
import SocialLink from '@/components/shared/SocialLink'

import { metaDataResume } from '@/lib/data/metadata/pages/metaDataResume'
import { jobs } from '@/lib/data/pages/resume'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { LinkColors } from '@/lib/utils/interfaces/enums'

export const metadata: Metadata = {
  ...metaDataResume,
}

const Resume = (): JSX.Element => {
  return (
    <PageContainer id={ID.resume}>
      <BreadCrumbs level1Url={PAGES_URL.resume} level1Text={TEXT.resume} />

      <div className="mt-10">
        <ResumeInfo />

        <div>
          <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">My Career Path</div>
          <div className="mt-8">
            <List>
              {jobs.map((job) => (
                <ListItem key={job.id}>
                  <span className="mr-1 font-bold">{job.title}</span>
                  {' · '}
                  <span className="ml-1">
                    {job.years} {job.years === 1 ? 'year' : 'years'}
                  </span>
                </ListItem>
              ))}
            </List>
          </div>
        </div>

        <div>
          <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">Download resume</div>
          <p className="mt-4 text-base font-normal text-neutral-500">
            Click below to download my resume with detailed professional experience.
          </p>
          <div className="mt-8">
            <SocialLink
              href={EXTERNAL_URL.resume.resumeViewPDF}
              text={TEXT.resumePDF}
              linkColor={LinkColors.Red}
              dataTestId={DATA_TEST_IDS.page.resume.downloadResume}
            />
          </div>
        </div>

        <div>
          <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">My resume</div>
          <p className="mt-4 text-base font-normal text-neutral-500">
            Discover more about my background and experiences.
          </p>
          <ResumePreviewEmbed />
        </div>
      </div>
      <PageNavigation
        linkPrevious={PAGES_URL.home}
        namePrevious={TEXT.home}
        dataTestIdPrevious={DATA_TEST_IDS.page.resume.previous}
        linkNext={PAGES_URL.work.mainUrl}
        nameNext={TEXT.workExperience}
        dataTestIdNext={DATA_TEST_IDS.page.resume.next}
      />
    </PageContainer>
  )
}

export default Resume
