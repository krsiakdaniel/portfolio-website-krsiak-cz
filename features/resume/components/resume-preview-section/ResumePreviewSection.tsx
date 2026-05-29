import { resumePreviewCardData } from '@/data/pages/resume/preview-cards/resumePreviewCards'

import { ARIA_LABELS } from '@/localization'

import ResumePreviewCard from '../resume-preview-card/ResumePreviewCard'

const ResumePreviewSection = () => {
  return (
    <section aria-label={ARIA_LABELS.resumePreviewSection}>
      <div className="grid md:grid-cols-2 md:gap-8">
        {resumePreviewCardData.map((card) => (
          <ResumePreviewCard
            key={card.title}
            title={card.title}
            highlight={card.highlight}
            description={card.description}
            href={card.href}
            fileType={card.fileType}
            buttonText={card.buttonText}
            dataTestId={card.dataTestId}
          />
        ))}
      </div>
    </section>
  )
}

export default ResumePreviewSection
