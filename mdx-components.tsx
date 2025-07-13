import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Define custom MDX components with Tailwind CSS styling
const customMDXComponents: MDXComponents = {
  h1: (props) => <h1 className="mb-4 mt-8 text-3xl font-bold" {...props} />,
  h2: (props) => <h2 className="mb-3 mt-6 text-2xl font-bold" {...props} />,
  h3: (props) => <h3 className="mb-2 mt-5 text-xl font-bold" {...props} />,
  h4: (props) => <h4 className="mb-2 mt-4 text-lg font-bold" {...props} />,
  p: (props) => <p className="mb-4" {...props} />,
  ul: (props) => <ul className="mb-4 list-disc pl-6" {...props} />,
  ol: (props) => <ol className="mb-4 list-decimal pl-6" {...props} />,
  li: (props) => <li className="mb-1" {...props} />,
  a: (props) => {
    const href = props.href || ''
    const isInternalLink = href.startsWith('/') || href.startsWith('#')

    if (isInternalLink) {
      return (
        <Link href={href} className="text-blue-600 hover:underline dark:text-blue-400" {...props} />
      )
    }

    return (
      <a
        className="text-blue-600 hover:underline dark:text-blue-400"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    )
  },
  blockquote: (props) => (
    <blockquote
      className="my-4 border-l-4 border-gray-300 pl-4 italic dark:border-gray-700"
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
      <code className="rounded bg-gray-100 px-1 py-0.5 font-mono dark:bg-gray-800" {...props} />
    )
  },
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
    return (
      <pre
        className={`my-4 overflow-auto rounded-lg bg-gray-100 p-4 dark:bg-gray-900 ${className || ''}`}
        {...props}
      />
    )
  },
  img: ({ alt, src, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // If it's an external image, use regular img tag
    if (src && (src.startsWith('http') || src.startsWith('//'))) {
      return <img className="my-4 h-auto max-w-full rounded" alt={alt} src={src} {...props} />
    }

    // For local images, use Next.js Image component with explicit number props
    return (
      <Image
        className="my-4 h-auto max-w-full rounded"
        src={src || ''}
        alt={alt || ''}
        width={700}
        height={400}
      />
    )
  },
  table: (props) => (
    <div className="my-4 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700" {...props} />
    </div>
  ),
  th: (props) => <th className="px-4 py-2 text-left font-bold" {...props} />,
  td: (props) => (
    <td className="border-t border-gray-200 px-4 py-2 dark:border-gray-800" {...props} />
  ),
  hr: (props) => <hr className="my-8 border-gray-300 dark:border-gray-700" {...props} />,
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...customMDXComponents,
  }
}
