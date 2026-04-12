import Link from 'next/link'

import { ArrowRight } from 'lucide-react'

import { type ProjectListRowProps } from './ProjectListRow.types'

const ProjectListRow = ({
  ariaLabel,
  company,
  icon,
  id,
  isFeatured,
  linkProjectPage,
  role,
  title,
}: ProjectListRowProps) => {
  return (
    <Link
      href={linkProjectPage}
      data-testid={id}
      aria-label={ariaLabel}
      className={`group flex items-center gap-3 rounded-lg border bg-white px-3 py-3 transition-all duration-300 ease-in-out hover:scale-101 ${isFeatured ? 'border-yellow-300 hover:bg-yellow-50 hover:border-yellow-500' : 'border-violet-300 hover:bg-violet-50 hover:border-violet-500'}`}
    >
      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <div className="flex flex-col gap-x-2 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="flex items-center gap-1 truncate text-lg font-semibold text-neutral-900 group-hover:text-violet-700">
            <span role="img" aria-label={ariaLabel} className="select-none">
              {icon}
            </span>
            {title}
            <span className="shrink-0 text-neutral-300 transition-colors group-hover:text-violet-500">
              <ArrowRight aria-hidden="true" className="block h-4 w-4" />
            </span>
          </h3>
          <span className="shrink-0 text-sm text-neutral-400 group-hover:text-neutral-600">
            {company}
          </span>
        </div>

        <p className="text-base font-medium text-violet-600">{role}</p>
      </div>
    </Link>
  )
}

export default ProjectListRow
