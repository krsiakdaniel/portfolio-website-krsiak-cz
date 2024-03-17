import NextPageNavigation from '@/components/NextPageNavigation'
import PageContainer from '@/components/layout/PageContainer'
import ProjectsLayout from '@/components/layout/ProjectsLayout'
import { ProjectSection } from '@/components/projects/ProjectSection'
import ExperienceCard from '@/components/projects/experience/ExperienceCard'
import ExperienceOtherTitle from '@/components/projects/experience/ExperienceOtherTitle'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import {
  projectsWorkFrontEnd,
  projectsWorkLocalization,
  projectsWorkQA,
  projectsWorkReact,
  projectsWorkWordPress,
} from '@/data/projects/work/projectsOverview'
import {
  ID_PROJECTS_WORK,
  ID_SECTION_FRONT_END,
  ID_SECTION_LOCALIZATION,
  ID_SECTION_QA,
  ID_SECTION_REACT,
  ID_SECTION_WORDPRESS,
} from '@/utils/constants'

const ProjectsWork = () => {
  return (
    <PageContainer id={ID_PROJECTS_WORK}>
      <BreadCrumbs linkLevel1="/work-experience" textLevel1="Work Experience" />
      <ProjectsLayout
        heading="🖥️ Work Experience"
        description="I worked on modern products, developed new features, redesigned websites, implemented responsive design, updated legacy codebase, was responsible for localization, QA automation and testing, including work as team leader."
      >
        <ProjectSection sectionId={ID_SECTION_REACT} sectionText="React" projectData={projectsWorkReact} />

        <ProjectSection sectionId={ID_SECTION_FRONT_END} sectionText="Front End" projectData={projectsWorkFrontEnd} />
        <ExperienceOtherTitle />
        <ExperienceCard
          company="Freelance"
          role="Web Developer / Consultant"
          description="In the past I was creating  websites for clients."
          isPartTime
        />
        <ExperienceCard
          company="Freelance"
          role="Web Developer"
          description="First time web company job was 1 year coding website layouts."
        />

        <ProjectSection sectionId={ID_SECTION_WORDPRESS} sectionText="WordPress" projectData={projectsWorkWordPress} />
        <ExperienceOtherTitle />
        <ExperienceCard
          company="Freelance"
          role="WordPress Consultant"
          description="For 5 years I used to create websites for clients and small companies."
          isPartTime
        />

        <ProjectSection sectionId={ID_SECTION_QA} sectionText="QA Automation & Testing" projectData={projectsWorkQA} />
        <ExperienceOtherTitle />
        <ExperienceCard
          company="Smartsupp"
          role="QA Automation - Team Leader"
          description="I set up Cypress E2E testing for the entire company application. I also wrote E2E tests in JavaScript and TypeScript. Mentoring juniors QA."
        />
        <ExperienceCard
          company="RWS (Moravia IT)"
          role="Localization - Tester"
          description="Making sure translations fit UI layout on Windows 7 + Windows Store."
        />

        <ProjectSection
          sectionId={ID_SECTION_LOCALIZATION}
          sectionText="Localization"
          projectData={projectsWorkLocalization}
        />
        <ExperienceOtherTitle />
        <ExperienceCard
          company="Smartsupp"
          role="Localization - Manager"
          description="Responsible for translation of the company website and application into 9 languages. 🇬🇧 🇨🇿 🇪🇸 🇫🇷 🇭🇺 🇩🇪 🇮🇹 🇳🇱 🇵🇱"
        />
      </ProjectsLayout>
      <div className="mt-20">
        <NextPageNavigation
          pageLinkPrevious="/about-me"
          pageNamePrevious="About Me"
          pageLinkNext="/personal-projects"
          pageNameNext="Personal Projects"
        />
      </div>
    </PageContainer>
  )
}

export default ProjectsWork
