type Props = {
  text: string
}

const ExperienceSection = ({ text }: Props) => {
  return <h3 className="mb-2 mt-16 border-b pb-2 text-2xl font-bold uppercase">{text}</h3>
}

export default ExperienceSection
