import Image from 'next/image'

import GridPlaceholder from '@/components/pages/projects/overview-page/GridPlaceholder'
import { ProjectSectionProps } from '@/components/pages/projects/overview-page/OverviewPage.types'
import ProjectCompactCard from '@/components/pages/projects/overview-page/ProjectCompactCard'
import HeadingSection from '@/components/shared/HeadingSection'

import { OtherExperienceData } from '@/lib/utils/typeDefinitions/interfaces'

type ProjectSectionGridProps = ProjectSectionProps & {
  otherExperience?: OtherExperienceData[]
  showPlaceholder?: boolean
}

const ProjectSectionGrid = ({
  projectData = [],
  sectionId = '',
  sectionText = '',
  otherExperience = [],
  showPlaceholder = false,
}: ProjectSectionGridProps) => {
  return (
    <>
      <HeadingSection text={sectionText} id={sectionId} />

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {projectData.map((item) => (
          <ProjectCompactCard
            key={item.id}
            ariaLabel={item.ariaLabel}
            company={item.company}
            dataTestId={item.id}
            icon={item.icon}
            image={item.image}
            isFeatured={item.isFeatured}
            linkProjectPage={item.linkProjectPage}
            linkText={item.linkText}
            role={item.role}
            skillsIcons={item.skillsIcons}
            title={item.title}
            years={item.years}
          />
        ))}
        {otherExperience.map((item) => (
          <div
            key={item.id}
            className="relative flex cursor-default flex-col rounded-lg border border-dashed border-violet-300 bg-white"
          >
            {/* Thumbnail placeholder */}
            <div className="flex min-h-[161px] items-center justify-center overflow-hidden rounded-t-lg border-b border-dashed border-violet-300 bg-violet-50 p-2">
              {item.icon && <span className="select-none text-6xl">{item.icon}</span>}
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col gap-1 p-3">
              <h3 className="text-2xl font-semibold text-neutral-900">
                {item.icon && <span className="mr-1 select-none">{item.icon}</span>}
                {item.company}
              </h3>
              <p className="text-xl font-medium text-violet-600">{item.role}</p>
              <p className="text-sm text-neutral-500">
                {item.description}
                {item.years && <span className="ml-1 text-neutral-400">· {item.years}</span>}
              </p>

              {item.svgIcons?.length || item.emojiIcons?.length ? (
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {item.svgIcons?.map((src) => (
                    <Image key={src} src={src} alt="" width={28} height={28} />
                  ))}
                  {item.emojiIcons?.map((emoji) => (
                    <span key={emoji} className="text-[28px] leading-none">
                      {emoji}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        ))}
        {showPlaceholder && <GridPlaceholder />}
      </div>
    </>
  )
}

export default ProjectSectionGrid
