import PageContainer from '@/components/layout/PageContainer'
import ProjectItem from '@/components/projects/ProjectItem'
import ProjectsLayout from '@/components/projects/ProjectsLayout'
import PartTimeLabel from '@/components/shared/PartTimeLabel'
import { projectsWorkFrontEnd, projectsWorkQA, projectsWorkReact } from '@/data/projects/work/projectsOverview'
import { ID_PROJECTS_WORK } from '@/utils/constants'

type ExperienceCardProps = {
  title: string
  partTime?: boolean
  description: string
}

type ExperienceSectionProps = {
  text: string
}

const ExperienceSection = ({ text }: ExperienceSectionProps) => {
  return <h3 className="mb-2 mt-16 border-b pb-2 text-2xl font-bold uppercase">{text}</h3>
}

const ExperienceOtherTitle = () => {
  return <h4 className="mb-4 mt-8 text-xl font-bold dark:text-white">Other experience</h4>
}

const ExperienceCard = ({ title, partTime, description }: ExperienceCardProps) => {
  return (
    <div className="mb-8 w-full rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800 md:max-w-[588px]">
      <div>
        <h5 className="mr-3 font-semibold dark:text-white">
          {title} {partTime && <PartTimeLabel />}
        </h5>
        <p className="text-neutral-500 dark:text-neutral-400">{description}</p>
      </div>
    </div>
  )
}

const ProjectsWork = () => {
  return (
    <PageContainer id={ID_PROJECTS_WORK}>
      <ProjectsLayout
        dividerText="Work Experience"
        heading="Work"
        description="In my previous jobs, I developed new features, redesigned websites, implemented responsive design, updated legacy codebases, was responsible for text localization, QA testing, QA automation and team leading on various projects."
      >
        <ExperienceSection text="React" />
        {projectsWorkReact.map((item) => {
          return (
            <ProjectItem
              key={item.id}
              isFeatured={item.isFeatured}
              image={item.image}
              title={item.title}
              company={item.company}
              role={item.role}
              years={item.years}
              description={item.description}
              mySkillsIcons={item.mySkillsIcons}
              customers={item.customers}
              linkText={item.linkText}
              linkProjectPage={item.linkProjectPage}
            />
          )
        })}
        <ExperienceSection text="Front End" />
        {projectsWorkFrontEnd.map((item) => {
          return (
            <ProjectItem
              key={item.id}
              isFeatured={item.isFeatured}
              image={item.image}
              title={item.title}
              company={item.company}
              role={item.role}
              years={item.years}
              description={item.description}
              mySkillsIcons={item.mySkillsIcons}
              customers={item.customers}
              linkText={item.linkText}
              linkProjectPage={item.linkProjectPage}
            />
          )
        })}
        <ExperienceOtherTitle />
        <ExperienceCard
          partTime={true}
          title="Freelance · Web Consultant"
          description="In the past I was creating static websites for clients."
        />
        <ExperienceCard
          title="Freelance · Web Developer"
          description="First time web company job was 1 year coding website layouts."
        />
        <ExperienceSection text="WordPress" />
        {/* TODO: project page */}
        <p>
          I was responsible for SmartSupp HELP website running on WordPress. All tutorials content and localization into
          8 languages 🇬🇧 🇨🇿 🇪🇸 🇫🇷 🇭🇺 🇩🇪 🇮🇹 🇵🇱
        </p>
        <ExperienceOtherTitle />
        <ExperienceCard
          partTime={true}
          title="Freelance · WordPress Consultant"
          description="For 5 years I used to create websites for clients and small companies."
        />
        <ExperienceSection text="QA Automation & Testing" />
        {projectsWorkQA.map((item) => {
          return (
            <ProjectItem
              key={item.id}
              isFeatured={item.isFeatured}
              image={item.image}
              title={item.title}
              company={item.company}
              role={item.role}
              years={item.years}
              description={item.description}
              mySkillsIcons={item.mySkillsIcons}
              customers={item.customers}
              linkText={item.linkText}
              linkProjectPage={item.linkProjectPage}
            />
          )
        })}
        <ExperienceOtherTitle />
        <ExperienceCard
          title="Smartsupp · QA Automation - Team Leader"
          description="I set up Cypress E2E testing for the entire company application. I also wrote E2E tests in JavaScript and TypeScript. Mentoring juniors QA."
        />
        <ExperienceCard
          title="Moravia IT · Localization - Tester"
          description="Making sure translations fit UI layout on Windows 7 + Windows Store."
        />

        <ExperienceSection text="Localization" />
        {/* TODO: project page */}
        <p>
          I managed a team of 3 people. I was responsible for translation delivery and quality checks for Microsoft
          projects Windows 8 + Windows Phone.
        </p>
        <ExperienceOtherTitle />
        <ExperienceCard
          title="Smartsupp · Localization - Manager"
          description="Responsible for translation of the company website and application into 9 languages. 🇬🇧 🇨🇿 🇪🇸 🇫🇷 🇭🇺 🇩🇪 🇮🇹 🇳🇱 🇵🇱"
        />
      </ProjectsLayout>
    </PageContainer>
  )
}

export default ProjectsWork
