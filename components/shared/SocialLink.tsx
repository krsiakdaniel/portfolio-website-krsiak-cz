import { FC } from 'react'

type SocialLinkProps = {
  href: string
  text: string
  linkColor: 'red' | 'blue' | 'gray'
  className?: string
  dataTestId: string
}

const SocialLink: FC<SocialLinkProps> = ({
  href,
  text,
  className = '',
  linkColor = 'gray',
  dataTestId,
}): JSX.Element => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-md w-[248px] rounded-lg bg-${linkColor}-700 px-5 py-2.5 text-center font-medium text-white hover:bg-${linkColor}-800 focus:outline-none focus:ring-4 focus:ring-${linkColor}-300 ${className}`}
    data-testid={dataTestId}
  >
    {text}
  </a>
)

export default SocialLink
