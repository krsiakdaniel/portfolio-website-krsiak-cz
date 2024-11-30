type HeroLinkProps = {
  href: string
  text: string
  className: string
  testId: string
}

const sharedCss = 'w-[248px] text-md rounded-lg px-5 py-2.5 text-center font-medium focus:outline-none focus:ring-4'

const HeroLink = ({ href, text, className = '', testId }: HeroLinkProps) => (
  <a data-testid={testId} href={href} target="_blank" rel="noopener noreferrer" className={`${sharedCss} ${className}`}>
    {text}
  </a>
)

export default HeroLink
