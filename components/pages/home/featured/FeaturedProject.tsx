import ProjectSummaryCard from '@/components/pages/projects/overview-page/ProjectSummaryCard'
import DividerWithText from '@/components/shared/DividerWithText'

import { projectsWorkReact } from '@/data/pages/projects/work/projects-overview/workReact'
import { DIVIDER_WITH_TEXT } from '@/localization'

const FeaturedProject = () => {
  const featuredProject = projectsWorkReact[0]

  return (
    <div className="mt-20 mb-30">
      <DividerWithText text={DIVIDER_WITH_TEXT.featuredProject} />

      <div className="mt-8">
        <ProjectSummaryCard
          key={featuredProject.id}
          isFeatured={featuredProject.isFeatured}
          image={featuredProject.image}
          icon={featuredProject.icon}
          ariaLabel={featuredProject.ariaLabel}
          title={featuredProject.title}
          company={featuredProject.company}
          role={featuredProject.role}
          description={featuredProject.description}
          skillsIcons={featuredProject.skillsIcons}
          customers={featuredProject.customers}
          personalProjectNote={featuredProject.personalProjectNote}
          linkText={featuredProject.linkText}
          linkProjectPage={featuredProject.linkProjectPage}
          dataTestId={featuredProject.id}
          className=""
        />
      </div>
    </div>
  )
}

export default FeaturedProject
