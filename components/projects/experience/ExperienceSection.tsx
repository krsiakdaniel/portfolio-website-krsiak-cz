type Props = {
  id: string
  text: string
}

const ExperienceSection = ({ id, text }: Props) => {
  return (
    <h3 id={id} className="mb-2 mt-16 border-b pb-2 text-2xl font-bold uppercase">
      {text}
    </h3>
  )
}

export default ExperienceSection
