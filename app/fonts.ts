import { Roboto, Rubik } from 'next/font/google'

// 'latin-ext' is a subset to support both English and Czech characters

// html and body text
export const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin-ext'],
  display: 'swap',
})

// headings only
export const rubik = Rubik({
  weight: ['400', '700'],
  subsets: ['latin-ext'],
  display: 'swap',
})
