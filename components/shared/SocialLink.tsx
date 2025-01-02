import { FC } from 'react'

type SocialLinkProps = {
  href: string
  text: string
  className: string
  dataTestId: string
}

const SocialLink: FC<SocialLinkProps> = ({ href, text, className = '', dataTestId }): JSX.Element => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-md w-[248px] rounded-lg px-5 py-2.5 text-center font-medium focus:outline-none focus:ring-4 ${className}`}
    data-testid={dataTestId}
  >
    {text}
  </a>
)

export default SocialLink
