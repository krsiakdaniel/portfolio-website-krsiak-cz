/**
 * PostCSS configuration.
 *
 * PostCSS processes CSS files through a pipeline of plugins before they reach the browser.
 *
 * Chain: globals.css → PostCSS → @tailwindcss/postcss plugin → compiled CSS output
 *
 * @tailwindcss/postcss is the Tailwind CSS v4 PostCSS plugin. It reads the
 * `@import 'tailwindcss'` directive in globals.css, scans all content paths defined
 * in tailwind.config.ts for utility classes, and outputs the final CSS the browser receives.
 *
 * Without this file, Next.js would not run PostCSS on CSS files and Tailwind styles would not work.
 *
 * Note: PostCSS does not support TypeScript config files — must remain .js.
 */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}

export default config
