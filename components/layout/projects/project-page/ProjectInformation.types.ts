import { Project } from '@/lib/utils/typeDefinitions/interfaces'

export type ProjectInformationProps = Pick<
  Project,
  'customers' | 'description' | 'linkGitHub' | 'projectLinks' | 'skillsOverview'
>
