import { ReactNode } from 'react'

import { Project, Section } from '@/lib/utils/typeDefinitions/interfaces'
import { BreadCrumbsType } from '@/lib/utils/typeDefinitions/types'

import { HeaderSectionProps } from '@/lib/utils/typeDefinitions/props/layout/projects/project-page'

// Project Page Layout Wrapper Props
export type ProjectPageLayoutWrapperProps = HeaderSectionProps & {
  breadCrumbs: BreadCrumbsType
  PageNavigation: ReactNode
  pageID: string
  projectData: Project
  sections: Section[]
  showAlert?: ReactNode
}

// Projects Overview Layout Props
export type ProjectsOverviewLayoutProps = {
  children: ReactNode
  description: ReactNode
  heading: string
}
