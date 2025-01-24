import { FC } from 'react'

import Image from 'next/image'

import { SocialLinkIconProps } from '@/lib/utils/typeDefinitions/props/shared/social-link-icon'

const SocialLinkIcon: FC<SocialLinkIconProps> = ({
  href,
  dataTestId,
  title,
  ariaLabel,
  imgSrc,
  imgAlt,
  iconWidth,
  iconHeight,
}): JSX.Element => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={dataTestId}
      className="transition-opacity duration-300 hover:rotate-12 hover:opacity-70"
      title={title}
      aria-label={ariaLabel}
    >
      <Image src={imgSrc} width={iconWidth} height={iconHeight} alt={imgAlt} loading="eager" />
    </a>
  )
}

export default SocialLinkIcon
