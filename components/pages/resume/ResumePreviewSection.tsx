import ResumePreviewCard from './ResumePreviewCard'

import { resumePreviewCardData } from '@/lib/data/pages/resume/resumePreviewCards'

const ResumePreviewSection = () => {
  return (
    <section className="mt-20">
      <div className="grid gap-8 md:grid-cols-2">
        {resumePreviewCardData.map((card, index) => (
          <ResumePreviewCard
            key={index}
            title={card.title}
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
