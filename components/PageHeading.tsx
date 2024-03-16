type Props = {
  title: string
}

const PageHeading = ({ title }: Props) => {
  return <h1 className="text-5xl font-bold text-violet-600 sm:text-7xl">{title}</h1>
}

export default PageHeading
