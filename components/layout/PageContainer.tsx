import { FC } from 'react'

import { PageContainerProps } from '@/lib/utils/typeDefinitions/props'

const PageContainer: FC<PageContainerProps> = ({ id, marginTop = 'mt-20', children }): JSX.Element => {
  return (
    <div id={id} className={`${marginTop} px-5`}>
      <div className="container mx-auto max-w-screen-xl px-5">{children}</div>
    </div>
  )
}

export default PageContainer
