import { FC } from 'react'

import { appleTouchIconSizes } from '@/lib/data/metadata/shared/appleTouchIconSizes'

const AppleTouchIcons: FC = (): JSX.Element => {
  return (
    <>
      {(appleTouchIconSizes ?? []).map((size) => {
        return <link key={size} rel="apple-touch-icon" sizes={size} href={`/icons/png/icon-${size}.png`} />
      })}
    </>
  )
}

export default AppleTouchIcons
