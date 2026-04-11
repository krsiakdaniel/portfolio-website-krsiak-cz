import HeadingSection from '@/components/shared/heading/HeadingSection'
import ProjectListRow from '@/components/shared/projects/project-list-row/ProjectListRow'

import { ID } from '@/lib/utils/constants/ids/elementIds'

import { PROJECTS } from '@/localization'

import { type ProjectWorkListViewProps } from './ProjectWorkListView.types'

const ProjectWorkListView = ({ projects }: ProjectWorkListViewProps) => {
  return (
    <div className="mb-30">
      <HeadingSection text={PROJECTS.projects} id={ID.projects.work} />
      <div className="flex flex-col gap-2 mt-8">
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
    </div>
  )
}

export default ProjectWorkListView
