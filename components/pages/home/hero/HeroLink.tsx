import { FC } from 'react'

type HeroLinkProps = {
  href: string
  text: string
  className: string
  dataTestId: string
  isSmall?: boolean
}

const HeroLink: FC<HeroLinkProps> = ({ href, text, className = '', dataTestId, isSmall = false }): JSX.Element => (
  <a
    data-testid={dataTestId}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={` ${isSmall ? 'w-[136px] px-2 py-1 text-xs' : 'text-md w-[248px] px-5 py-2.5'} rounded-lg text-center font-medium focus:outline-none focus:ring-4 ${className} `}
  >
    {text}
  </a>
)

export default HeroLink
