import { FC, ReactNode } from 'react'

type PageContainerProps = {
  id?: string
  marginTop?: 'mt-0' | 'mt-20'
  children: ReactNode
}

const PageContainer: FC<PageContainerProps> = ({ id, marginTop = 'mt-20', children }): JSX.Element => {
  return (
    <div id={id} className={`${marginTop} px-5`}>
      <div className="container mx-auto max-w-screen-xl px-5">{children}</div>
    </div>
  )
}

export default PageContainer
