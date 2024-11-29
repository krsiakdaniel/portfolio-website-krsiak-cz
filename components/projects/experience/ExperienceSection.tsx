type ExperienceSectionProps = {
  id: string
  text: string
}

const ExperienceSection = ({ id, text }: ExperienceSectionProps) => {
  return (
    <div id={id} className="mb-2 mt-16 border-b pb-2 text-2xl font-bold uppercase">
      {text}
    </div>
  )
}

export default ExperienceSection
