import { Metadata } from 'next'

import PageContainer from '@/components/layout/PageContainer'
import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import ResumeInfo from '@/components/pages/resume/ResumeInfo'
import ResumePreviewEmbed from '@/components/pages/resume/ResumePreviewEmbed'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import List from '@/components/shared/List'
import ListItem from '@/components/shared/ListItem'
import CallToActionResumeDownload from '@/components/shared/call-to-action/CallToActionResumeDownload'

import { metaDataResume } from '@/lib/data/metadata/pages/metaDataResume'
import { jobs } from '@/lib/data/pages/resume'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { formatExperienceMonthsYears } from '@/lib/utils/helpers/formatExperienceMonthsYears'

export const metadata: Metadata = {
  ...metaDataResume,
}

const Resume = (): JSX.Element => {
  return (
    <PageContainer id={ID.resume}>
      <BreadCrumbs level1Url={PAGES_URL.resume} level1Text={TEXT.resume} />

      <div className="mt-10">
        <ResumeInfo />
        <CallToActionResumeDownload />
        <div>
          <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">My Career Since High School</div>
          <div className="mt-8">
            <List>
              {jobs.map((job) => (
                <ListItem key={job.id}>
                  <span className="mr-1 font-bold">{job.title}</span>
                  {' · '}
                  <span className="ml-1">
                    {job.duration} {formatExperienceMonthsYears({ duration: job.duration, unit: job.unit })}
                  </span>
                </ListItem>
              ))}
            </List>
          </div>
        </div>

        <div>
          <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">Resume Preview</div>
          <p className="mt-4 text-base font-normal text-neutral-600">Read about my professional experience.</p>
          <ResumePreviewEmbed />
        </div>
      </div>
      <PageNavigation
        linkPrevious={PAGES_URL.work.mainUrl}
        namePrevious={TEXT.workExperience}
        dataTestIdPrevious={DATA_TEST_IDS.page.resume.previous}
        linkNext={PAGES_URL.personal.mainUrl}
        nameNext={TEXT.personalProjects}
        dataTestIdNext={DATA_TEST_IDS.page.resume.next}
      />
    </PageContainer>
  )
}

export default Resume
