import PageContainer from '@/components/layout/PageContainer'
import ProjectItem from '@/components/projects/ProjectItem'
import ProjectsLayout from '@/components/projects/ProjectsLayout'
import ExperienceCard from '@/components/projects/experience/ExperienceCard'
import ExperienceOtherTitle from '@/components/projects/experience/ExperienceOtherTitle'
import ExperienceSection from '@/components/projects/experience/ExperienceSection'
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
      <ProjectsLayout
        dividerText="Work Experience"
        heading="Work"
        description="I worked on modern products, developed new features, redesigned websites, implemented responsive design, updated legacy codebase, was responsible for localization, QA automation and testing, including work as team leader."
      >
        <ExperienceSection id={`${ID_PROJECTS_WORK}-${ID_SECTION_REACT}`} text="React" />
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
              dataTestId={item.id}
            />
          )
        })}

        <ExperienceSection id={`${ID_PROJECTS_WORK}-${ID_SECTION_FRONT_END}`} text="Front End" />
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
              dataTestId={item.id}
            />
          )
        })}
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

        <ExperienceSection id={`${ID_PROJECTS_WORK}-${ID_SECTION_WORDPRESS}`} text="WordPress" />
        {projectsWorkWordPress.map((item) => {
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
              dataTestId={item.id}
            />
          )
        })}
        <ExperienceOtherTitle />
        <ExperienceCard
          company="Freelance"
          role="WordPress Consultant"
          description="For 5 years I used to create websites for clients and small companies."
          isPartTime
        />

        <ExperienceSection id={`${ID_PROJECTS_WORK}-${ID_SECTION_QA}`} text="QA Automation & Testing" />
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
              dataTestId={item.id}
            />
          )
        })}
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

        <ExperienceSection id={`${ID_PROJECTS_WORK}-${ID_SECTION_LOCALIZATION}`} text="Localization" />
        {projectsWorkLocalization.map((item) => {
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
              dataTestId={item.id}
            />
          )
        })}
        <ExperienceOtherTitle />
        <ExperienceCard
          company="Smartsupp"
          role="Localization - Manager"
          description="Responsible for translation of the company website and application into 9 languages. 🇬🇧 🇨🇿 🇪🇸 🇫🇷 🇭🇺 🇩🇪 🇮🇹 🇳🇱 🇵🇱"
        />
      </ProjectsLayout>
    </PageContainer>
  )
}

export default ProjectsWork
