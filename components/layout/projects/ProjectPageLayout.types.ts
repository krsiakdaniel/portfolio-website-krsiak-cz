import { ReactNode } from 'react'

import { HeaderSectionProps } from '@/components/layout/projects/project-page/ProjectPage.types'

import { Project, Section } from '@/lib/utils/typeDefinitions/interfaces'
import { BreadCrumbsType } from '@/lib/utils/typeDefinitions/types'

export type ProjectPageLayoutWrapperProps = HeaderSectionProps & {
  breadCrumbs: BreadCrumbsType
  PageNavigation: ReactNode
  pageID: string
  projectData: Project
  sections: Section[]
  showAlert?: ReactNode
}

export type ProjectsOverviewLayoutProps = {
  icon: string
  ariaLabel: string
  heading: string
  description: ReactNode
  children: ReactNode
}
