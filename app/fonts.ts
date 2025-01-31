import { Roboto, Rubik } from 'next/font/google'

// 'latin-ext' is a subset to support both English and Czech characters

// html and body text
export const roboto = Roboto({
  weight: ['300', '400', '500', '700'], // light, regular, medium, bold
  subsets: ['latin-ext'],
  display: 'swap',
})

// headings only
export const rubik = Rubik({
  weight: ['300', '400', '500', '700'], // light, regular, medium, bold
  subsets: ['latin-ext'],
  display: 'swap',
})
