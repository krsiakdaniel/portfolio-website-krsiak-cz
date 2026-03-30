import ProjectListRow from '@/components/pages/projects/overview-page/ProjectListRow'

import { ProjectWorkListViewProps } from './ProjectWorkListView.types'

const ProjectWorkListView = ({ projects }: ProjectWorkListViewProps) => {
  return (
    <div className="mt-20 mb-30 flex flex-col gap-2">
      {projects.map((item) => (
        <ProjectListRow
          key={item.id}
          ariaLabel={item.ariaLabel}
          company={item.company}
          icon={item.icon}
          id={item.id}
          isFeatured={item.isFeatured}
          linkProjectPage={item.linkProjectPage}
          role={item.role}
          skillsIcons={item.skillsIcons}
          title={item.title}
          years={item.years}
        />
      ))}
    </div>
  )
}

export default ProjectWorkListView
