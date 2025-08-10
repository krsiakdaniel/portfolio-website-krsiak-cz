import { PageContainerProps } from '@/lib/utils/typeDefinitions/props/layout/pageContainer'

const PageContainer = ({ id, marginTop = 'mt-20', children }: PageContainerProps) => {
  return (
    <div id={id} className={`${marginTop} px-5`}>
      <div className="container mx-auto max-w-(--breakpoint-xl) px-5">{children}</div>
    </div>
  )
}

export default PageContainer
