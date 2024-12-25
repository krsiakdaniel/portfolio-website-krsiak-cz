type HeroLinkProps = {
  href: string
  text: string
  className: string
  dataTestId: string
}

const HeroLink = ({ href, text, className = '', dataTestId }: HeroLinkProps) => (
  <a
    data-testid={dataTestId}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-md w-[248px] rounded-lg px-5 py-2.5 text-center font-medium focus:outline-none focus:ring-4 ${className}`}
  >
    {text}
  </a>
)

export default HeroLink
