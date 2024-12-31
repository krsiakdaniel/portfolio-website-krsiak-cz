import { Metadata } from 'next'

import PageContainer from '@/components/layout/PageContainer'
import PageNavigation from '@/components/page-navigation/PageNavigation'
import BreadCrumbs from '@/components/shared/Breadcrumbs'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import Heading1 from '@/components/shared/Heading1'
import Heading3 from '@/components/shared/Heading3'
import Highlight from '@/components/shared/Highlight'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { metaDataTestimonials } from '@/lib/utils/metadata/pages/metaDataTestimonials'
import { TEXT } from '@/localization/english'

export const metadata: Metadata = {
  ...metaDataTestimonials,
}

const About = (): JSX.Element => {
  return (
    <PageContainer id={ID.websiteLink.testimonials}>
      <BreadCrumbs level1Url={PAGES_URL.testimonials} level1Text={TEXT.testimonials} />

      <div className="mt-10">
        <div>
          <Heading1>{TEXT.testimonials}</Heading1>
          <p className="mt-4 text-lg text-neutral-600" data-testid={DATA_TEST_IDS.page.aboutMe.introduction}>
            I am a dedicated <Highlight text="React Developer" /> with expertise in <Highlight text="QA Automation" />{' '}
            and have a proven track record in leading teams as a <Highlight text="Team Leader" />.
          </p>

          <p className="text-lg text-neutral-600">
            Below, you&apos;ll find insightful feedback from colleagues and collaborators who have experienced my
            contributions firsthand.
          </p>
        </div>

        <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">Professional Experience</div>
        <div className="flex flex-col">
          <p className="mt-8 text-lg text-neutral-600">
            <Heading3 textColor="text-violet-600">Alexandre Castro</Heading3>
            <ul className="mt-2">
              <li>
                <strong>💼 Position:</strong> QA Tester and Content Manager <strong>~ Smartlook</strong>
              </li>
              <li>
                <strong>🤝 Work Relationship:</strong> Daniel was senior to Alexandre but didn&apos;t manage him directly.
              </li>
              <li>
                <strong>💬 Testimonial:</strong>
                &quot;His vast work experience in diverse environments and positions has endowed him with a unique set of
                both soft and hard skills, making him a team member that brings added value to every organization. On a
                personal note, Daniel helped me a great deal when I first started at Smartsupp. Thanks to him, I have
                managed to gain proficiency in a wide set of tools and working techniques. To this day, I still rely on
                Daniel as a go-to person for advice on specific topics related to my work and personal side projects.&quot;
              </li>
            </ul>
          </p>

          <p className="mt-8 text-lg text-neutral-600">
            <Heading3 textColor="text-violet-600">Roman Kvapil</Heading3>
            <ul className="mt-2">
              <li>
                <strong>💼 Position:</strong> Partner Account Manager <strong>~ Microsoft</strong>
              </li>
              <li>
                <strong>🤝 Work Relationship:</strong> Roman worked with Daniel but on different teams.
              </li>
              <li>
                <strong>💬 Testimonial:</strong>
                &quot;I can recommend his knowledge and perspective about the IT globally and his behavior as a person are
                excellent for team work.&quot;
              </li>
            </ul>
          </p>

          <p className="mt-8 text-lg text-neutral-600">
            <Heading3 textColor="text-violet-600">Vojtech Pridalek</Heading3>
            <ul className="mt-2">
              <li>
                <strong>💼 Position:</strong> Senior Localization Group Manager <strong>~ Moravia IT (RWS)</strong>
              </li>
              <li>
                <strong>🤝 Work Relationship:</strong> Vojtech was senior to Daniel but didn&apos;t manage him directly.
              </li>
              <li>
                <strong>💬 Testimonial:</strong>
                &quot;Daniel has helped the team with his engineering skills focusing on automating the routine manual bug
                management tasks, working in the challenging role of bugfixing engineer bridging the linguistic managers
                and the production teams.&quot;
              </li>
            </ul>
          </p>

          <p className="mt-8 text-lg text-neutral-600">
            <Heading3 textColor="text-violet-600">Inka Losseff</Heading3>
            <ul className="mt-2">
              <li>
                <strong>💼 Position:</strong> Team Lead, Linguistic Services and Quality Management{' '}
                <strong>~ Moravia IT (RWS)</strong>
              </li>
              <li>
                <strong>🤝 Work Relationship:</strong> Inka worked with Daniel but on different teams.
              </li>
              <li>
                <strong>💬 Testimonial:</strong> &quot;Daniel is strong in creating all kinds of automation utilities (term
                processing, all kinds of tracking, etc.). He has gained a lot of experience in bug processing.&quot;
              </li>
            </ul>
          </p>

          <p className="mt-8 text-lg text-neutral-600">
            <Heading3 textColor="text-violet-600">Daniel Popa</Heading3>
            <ul className="mt-2">
              <li>
                <strong>💼 Position:</strong> Service Management Lead <strong>~ IBM</strong>
              </li>
              <li>
                <strong>🤝 Work Relationship:</strong> Daniel worked with Daniel but on different teams.
              </li>
              <li>
                <strong>💬 Testimonial:</strong> &quot;I met Daniel Krsiak while working on different teams, he was my
                desk-mate. I found him passionate about new technologies, eager to learn all the time, communicative and
                willing to share his knowledge.&quot;
              </li>
            </ul>
          </p>
        </div>

        {/* TODO: Add the following sections */}
        {/* <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">Fitness Moderator 🏋️‍♂️</div> */}
        {/* <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">Personality ✝️</div> */}
      </div>
      <PageNavigation
        linkPrevious={PAGES_URL.resume}
        namePrevious={TEXT.resume}
        dataTestIdPrevious={DATA_TEST_IDS.page.aboutMe.previous}
        linkNext={PAGES_URL.work.mainUrl}
        nameNext={TEXT.workExperience}
        dataTestIdNext={DATA_TEST_IDS.page.aboutMe.next}
      />
    </PageContainer>
  )
}

export default About
