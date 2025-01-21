import { FC } from 'react'

import IconArrow from '@/components/icons/IconArrow'

import { ArrowDirectionEnum } from '@/lib/utils/typeDefinitions/enums'

import { ProjectLinkProps } from '@/lib/utils/typeDefinitions/props/pages/projects/overview-page'

const ProjectLink: FC<ProjectLinkProps> = ({ linkText, linkProjectPage, dataTestId }): JSX.Element => (
  <p className="mt-8">
    <a
      href={linkProjectPage}
      title={linkText}
      className="flex w-44 items-center justify-center space-x-2 rounded-lg bg-violet-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-violet-800 focus:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-violet-400"
      data-testid={dataTestId}
    >
      <span>{linkText}</span>
      <IconArrow arrowDirection={ArrowDirectionEnum.Right} />
    </a>
  </p>
)

export default ProjectLink
