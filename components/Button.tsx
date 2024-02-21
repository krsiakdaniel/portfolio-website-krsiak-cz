import React from 'react'
import Link from 'next/link'

type Props = {
  label: string
  link: string
  size?: string
  type?: string
}

let colorVariants = {
  linkedin: 'bg-secondary-600',
  github: 'bg-neutral-900',
  resume: 'bg-red-600',
}

const Button = ({ label, link, size, type = 'github' }: Props) => (
  <Link
    href={link}
    className={`button flex items-center justify-center rounded-full text-white font-semibold hover:opacity-90
      ${size === 'lg' ? 'px-6 py-4 text-body-sm' : 'px-4 py-2.5 text-body-xs'}
      ${colorVariants[type]}`}
  >
    {label}
  </Link>
)

export default Button
