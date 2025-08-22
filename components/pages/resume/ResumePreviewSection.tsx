import ResumePreviewCard from './ResumePreviewCard'

import { resumePreviewCardData } from '@/lib/data/pages/resume/preview-cards/resumePreviewCards'

const ResumePreviewSection = () => {
  return (
    <section>
      <div className="grid md:grid-cols-2 md:gap-8">
        {resumePreviewCardData.map((card) => (
          <ResumePreviewCard
            key={card.title}
            title={card.title}
            highlight={card.highlight}
            description={card.description}
            href={card.href}
            imageSrc={card.imageSrc}
            imageAlt={card.imageAlt}
            buttonText={card.buttonText}
            dataTestId={card.dataTestId}
          />
        ))}
      </div>
    </section>
  )
}

export default ResumePreviewSection
