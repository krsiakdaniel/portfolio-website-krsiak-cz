import { appleTouchIconSizes } from '@/lib/data/metadata/shared/appleTouchIconSizes'

const THEME_COLOR = '#ECF0F1'

const MetaTags = (): JSX.Element => {
  return (
    <>
      <meta name="theme-color" content={THEME_COLOR} />
      {appleTouchIconSizes.map((size) => {
        return <link key={size} rel="apple-touch-icon" sizes={size} href={`/icons/png/icon-${size}.png`} />
      })}
    </>
  )
}

export default MetaTags
