import Link from 'next/link'

export type HeaderSectionProps = {
  title: string
  role: string
  years?: string | undefined
  link: string
}

const HeaderSection = ({ title, role, years, link }: HeaderSectionProps) => (
  <div>
    <h1 className="md:text-display-lg text-display-md font-bold">{title}</h1>
    <h2 className="text-display-xs font-semibold text-primary-500">
      {role}
      {years && <small className="text-neutral-600 text-body-md">{`· ${years}`}</small>}
    </h2>
    <Link href={`/#${link}`} className="text-neutral-500 mb-8">
      ← Go back
    </Link>
  </div>
)

export default HeaderSection
