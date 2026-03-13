// JSX type definitions for React 19 compatibility
// This file resolves the "Cannot find namespace 'JSX'" error in React 19

// Use type aliases instead of empty interfaces to satisfy TypeScript ESLint
declare global {
  namespace JSX {
    type Element = React.JSX.Element
    type ElementClass = React.JSX.ElementClass
    type ElementAttributesProperty = React.JSX.ElementAttributesProperty
    type ElementChildrenAttribute = React.JSX.ElementChildrenAttribute
    type LibraryManagedAttributes<C, P> = React.JSX.LibraryManagedAttributes<C, P>
    type IntrinsicAttributes = React.JSX.IntrinsicAttributes
    type IntrinsicClassAttributes<T> = React.JSX.IntrinsicClassAttributes<T>
    type IntrinsicElements = React.JSX.IntrinsicElements
  }
}

export {}
