import React from 'react'
import Link from 'next/link'

type Props = {
  label: string
  link: string
  size?: string
  type?: string
}

const Button = ({ label, link, size, type = 'bg-[#1F5D84]' }: Props) => (
  <Link
    href={link}
    className={`button flex items-center justify-center rounded-full text-neutral-100 font-semibold hover:opacity-90
      ${size === 'lg' ? 'px-6 py-4 text-body-sm' : 'px-4 py-2.5 text-body-xs'}
      ${type}`}
  >
    {label}
  </Link>
)

export default Button
