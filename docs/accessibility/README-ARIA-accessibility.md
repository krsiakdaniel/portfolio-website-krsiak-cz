# ♿ ARIA Accessibility

## 📋 Overview

This document outlines the ARIA (Accessible Rich Internet Applications) accessibility improvements implemented across the portfolio website to ensure compliance with WCAG 2.1 AA standards.

**Table of Contents:**

- [♿ ARIA Accessibility](#-aria-accessibility)
  - [🏷️ ARIA Labels and Roles](#️-aria-labels-and-roles)
  - [⏭️ Skip Navigation ARIA](#️-skip-navigation-aria)
  - [📱 Mobile Menu Accessibility](#-mobile-menu-accessibility)
  - [🖼️ Gallery Components](#️-gallery-components)
  - [🗺️ Landmark Regions](#️-landmark-regions)
  - [📢 Live Regions](#-live-regions)
  - [🎯 Focus Management](#-focus-management)
  - [🗣️ Screen Reader Support](#️-screen-reader-support)
  - [🧪 Testing Guidelines](#-testing-guidelines)

## 🏷️ ARIA Labels and Roles

### Comprehensive Label System

All ARIA labels are centrally managed in [localization/english.ts](../../localization/english.ts)

```typescript
export const ARIA_LABELS = {
  // Navigation
  skipToMainContent: 'Skip to main content',
  menu: 'Menu',
  toggleMenu: 'Toggle Menu',

  // Gallery
  galleryProjectShowcase: 'Gallery — Project showcase',
  galleryActiveImage: 'Active image',

  // Content areas
  mainContent: 'Main content',
  navigation: 'Navigation',
}
```

### Implementation Examples

#### Navigation Menu

```tsx
<nav aria-label={ARIA_LABELS.menu}>
  <ul role="menubar" aria-orientation="horizontal">
    <li role="none">
      <Link role="menuitem" aria-current="page">
        Home
      </Link>
    </li>
  </ul>
</nav>
```

#### Gallery Components

```tsx
<div role="region" aria-label={ARIA_LABELS.galleryProjectShowcase}>
  <div role="list" aria-label={ARIA_LABELS.galleryThumbnails}>
    <div role="button" aria-pressed={isActive} aria-selected={isActive} tabIndex={0}>
      Thumbnail
    </div>
  </div>
</div>
```

## ⏭️ Skip Navigation ARIA

Skip navigation links provide keyboard users with quick access to main content areas.

```tsx
const SkipNavigationARIA: FC = () => {
  return (
    <div className="sr-only focus-within:not-sr-only">
      <a href={`#${ID.main}`}>{ARIA_LABELS.skipToMainContent}</a>
      <a href={`#${ID.menu.desktop}`}>{ARIA_LABELS.skipToNavigation}</a>
    </div>
  )
}
```

## 📱 Mobile Menu Accessibility

Enhanced mobile menu with proper ARIA state management and keyboard support.

```tsx
<button
  aria-label={isMenuOpen ? ARIA_LABELS.menuExpanded : ARIA_LABELS.menuCollapsed}
  aria-expanded={isMenuOpen}
  aria-controls={ID.menu.mobile}
  aria-haspopup="menu"
  onClick={handleMenuMobileToggle}
>
  {isMenuOpen ? <IconClose /> : <IconHamburger />}
</button>
```

## 🖼️ Gallery Components

Interactive gallery with comprehensive accessibility features.

```tsx
<div role="region" aria-label={ARIA_LABELS.galleryProjectShowcase}>
  <div role="list" aria-label={ARIA_LABELS.galleryThumbnails}>
    <div role="button" aria-pressed={isActive} aria-selected={isActive} tabIndex={0}>
      Thumbnail
    </div>
  </div>
</div>
```

## 🗺️ Landmark Regions

Proper semantic structure with ARIA landmarks for navigation.

```tsx
<body>
  <SkipNavigationARIA />
  <header role="banner" aria-label="Site header">
    <nav aria-label="Main navigation">{/* Navigation content */}</nav>
  </header>

  <main id="main-content" aria-label="Main content">
    {children}
  </main>

  <footer role="contentinfo" aria-label="Site footer">
    {/* Footer content */}
  </footer>
</body>
```

## 📢 Live Regions

Dynamic content announcements for screen readers.

```tsx
type LiveRegionProps = {
  message?: string
  priority?: 'polite' | 'assertive'
}

const LiveRegion = ({ message, priority = 'polite' }: LiveRegionProps) => {
  return (
    <div role="status" aria-live={priority} className="sr-only">
      {message}
    </div>
  )
}
```

## 🎯 Focus Management

Enhanced focus indicators and keyboard navigation support.

```css
/* Enhanced focus indicators */
.focus:outline-none:focus {
  outline: 2px solid var(--color-violet-400);
  outline-offset: 2px;
}
```

```tsx
// Keyboard event handling
useEffect(() => {
  if (!isMenuOpen) return

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsMenuOpen(false)
    }
  }

  document.addEventListener('keydown', handleKeyDown)
  return () => document.removeEventListener('keydown', handleKeyDown)
}, [isMenuOpen])
```

## 🗣️ Screen Reader Support

Comprehensive screen reader support with proper semantic markup.

### Best Practices

- **Alt Text**: Descriptive alt text for informative images, empty for decorative
- **Heading Structure**: Single h1 per page with logical hierarchy
- **Link Text**: Descriptive and unique, avoid "click here"
- **Forms**: Proper labels and fieldsets
- **Lists**: Use semantic list structures

## 🧪 Testing Guidelines

### Automated Testing

```bash
# ESLint accessibility rules
npm run lint

# Automated accessibility testing
npm run test:a11y
```

### Screen Reader Testing

Test with popular screen readers:

- **NVDA** (Windows)
- **JAWS** (Windows)
- **VoiceOver** (macOS/iOS)
- **TalkBack** (Android)

### Tools and Resources

- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [Lighthouse Accessibility Audit](https://developers.google.com/web/tools/lighthouse)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## Conclusion

This ARIA implementation ensures the portfolio website meets modern accessibility standards, providing an inclusive experience for all users through centralized label management, semantic markup, and proper focus management.
