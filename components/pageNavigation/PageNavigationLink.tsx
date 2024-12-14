import { IconArrow } from '@/components/icons'

const LEFT = 'left'
const RIGHT = 'right'

type PageNavigationLinkProps = {
  href: string
  text: string
  type?: typeof LEFT | typeof RIGHT
  dataTestId: string | undefined
  justify: 'start' | 'end'
  widthClass: string
}

const PageNavigationLink = ({ href, text, type, dataTestId, justify, widthClass }: PageNavigationLinkProps) => {
  return (
    <a
      href={href}
      className={`flex w-full items-center justify-${justify} rounded-lg border-violet-300 bg-violet-50 p-4 font-bold text-violet-600 hover:border-violet-300 focus:outline-none focus:ring-4 focus:ring-violet-300 group-hover:text-violet-800 ${widthClass}`}
      data-testid={dataTestId}
    >
      {type === LEFT && <IconArrow type={LEFT} />}
      {text}
      {type === RIGHT && <IconArrow type={RIGHT} />}
    </a>
  )
}

export default PageNavigationLink
