import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Define custom MDX components with consistent site design system
const customMDXComponents: MDXComponents = {
  h1: (props) => (
    <h1 
      className="mb-6 mt-8 text-4xl font-bold text-gray-900 dark:text-white font-rubik" 
      {...props} 
    />
  ),
  h2: (props) => (
    <h2 
      className="mb-4 mt-8 text-3xl font-bold text-gray-900 dark:text-white font-rubik" 
      {...props} 
    />
  ),
  h3: (props) => (
    <h3 
      className="mb-3 mt-6 text-2xl font-bold text-gray-900 dark:text-white font-rubik" 
      {...props} 
    />
  ),
  h4: (props) => (
    <h4 
      className="mb-2 mt-5 text-xl font-bold text-gray-900 dark:text-white font-rubik" 
      {...props} 
    />
  ),
  p: (props) => (
    <p 
      className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300 font-roboto" 
      {...props} 
    />
  ),
  ul: (props) => (
    <ul className="mb-4 list-disc pl-6 text-gray-700 dark:text-gray-300" {...props} />
  ),
  ol: (props) => (
    <ol className="mb-4 list-decimal pl-6 text-gray-700 dark:text-gray-300" {...props} />
  ),
  li: (props) => (
    <li className="mb-2 leading-relaxed" {...props} />
  ),
  a: (props) => {
    const href = props.href || ''
    const isInternalLink = href.startsWith('/') || href.startsWith('#')

    if (isInternalLink) {
      return (
        <Link 
          href={href} 
          className="text-violet-600 hover:text-violet-700 hover:underline dark:text-violet-400 dark:hover:text-violet-300 font-medium transition-colors" 
          {...props} 
        />
      )
    }

    return (
      <a
        className="text-violet-600 hover:text-violet-700 hover:underline dark:text-violet-400 dark:hover:text-violet-300 font-medium transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    )
  },
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-4 border-violet-600 bg-violet-50 pl-6 py-4 italic text-gray-700 dark:border-violet-400 dark:bg-violet-900/20 dark:text-gray-300 rounded-r-lg"
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
    // If it's a code block with language class from rehype-pretty-code
    if (className?.includes('language-')) {
      return <code className={className} {...props} />
    }
    // For inline code
    return (
      <code className="rounded bg-violet-100 px-2 py-1 font-mono text-violet-800 dark:bg-violet-900/30 dark:text-violet-200 text-sm" {...props} />
    )
  },
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
    return (
      <pre
        className={`my-6 overflow-auto rounded-lg bg-gray-50 border border-gray-200 p-4 dark:bg-gray-900 dark:border-gray-700 ${className || ''}`}
        {...props}
      />
    )
  },
  img: ({ alt, src, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // If it's an external image, use regular img tag
    if (src && (src.startsWith('http') || src.startsWith('//'))) {
      return (
        <img 
          className="my-6 h-auto max-w-full rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm" 
          alt={alt} 
          src={src} 
          {...props} 
        />
      )
    }

    // For local images, use Next.js Image component with explicit number props
    return (
      <Image
        className="my-6 h-auto max-w-full rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
        src={src || ''}
        alt={alt || ''}
        width={700}
        height={400}
      />
    )
  },
  table: (props) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
      <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-600" {...props} />
    </div>
  ),
  th: (props) => (
    <th 
      className="bg-gray-50 px-6 py-3 text-left font-bold text-gray-900 dark:bg-gray-800 dark:text-white font-rubik" 
      {...props} 
    />
  ),
  td: (props) => (
    <td 
      className="border-t border-gray-200 px-6 py-4 text-gray-700 dark:border-gray-700 dark:text-gray-300" 
      {...props} 
    />
  ),
  hr: (props) => (
    <hr className="my-8 border-gray-300 dark:border-gray-600" {...props} />
  ),
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...customMDXComponents,
  }
}
