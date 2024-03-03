import Link from 'next/link'

type Props = {
  label: string
  link: string
  size?: string
  type?: string
}

const Button = ({ label, link, size, type = 'bg-[#1F5D84]' }: Props) => (
  <Link
    href={link}
    className={`button flex items-center justify-center rounded-full font-semibold text-neutral-100 hover:opacity-90
      ${size === 'lg' ? 'text-body-sm px-6 py-4' : 'text-body-xs px-4 py-2.5'}
      ${type}`}
  >
    {label}
  </Link>
)

export default Button
