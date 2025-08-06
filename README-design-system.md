# 🎨 Design System

Welcome to the design system documentation for Daniel Kršiak's portfolio website. This guide provides a comprehensive overview of the visual and functional design elements used throughout the site.

## 🌈 Color Palette

### Primary Brand Colors

- **🟣 Violet**: `#6829D3` (violet-600) - Primary brand color
- **⚪ White**: `#FFFFFF` - Clean backgrounds
- **🌫️ Gray**: `#f9fafb` (gray-50) - Main background

### Semantic Color System

#### 🔵 Information

- **Background**: `bg-blue-100` - Light blue backgrounds
- **Border**: `border-blue-300` - Subtle borders
- **Primary**: `bg-blue-600` - Action buttons
- **Hover**: `hover:bg-blue-800` - Interactive states
- **Text**: `text-blue-800` - Informational text
- **Focus**: `focus:ring-blue-300` - Focus indicators

#### 🟢 Success

- **Background**: `bg-green-100` - Success states
- **Border**: `border-green-300` - Success borders
- **Primary**: `bg-green-600` - Success buttons
- **Hover**: `hover:bg-green-800` - Success hover
- **Text**: `text-green-800` - Success messages
- **Focus**: `focus:ring-green-300` - Success focus

#### 🟡 Warning

- **Background**: `bg-yellow-100` - Warning backgrounds
- **Border**: `border-yellow-300` - Warning borders
- **Primary**: `bg-yellow-600` - Warning buttons
- **Hover**: `hover:bg-yellow-800` - Warning hover
- **Text**: `text-yellow-800` - Warning text
- **Focus**: `focus:ring-yellow-300` - Warning focus

#### 🔴 Danger/Error

- **Background**: `bg-red-100` - Error backgrounds
- **Border**: `border-red-300` - Error borders
- **Primary**: `bg-red-600` - Danger buttons
- **Hover**: `hover:bg-red-800` - Danger hover
- **Text**: `text-red-800` - Error messages
- **Focus**: `focus:ring-red-300` - Error focus

#### ⚫ Neutral

- **Background**: `bg-neutral-100` - Neutral backgrounds
- **Border**: `border-neutral-300` - Neutral borders
- **Primary**: `bg-neutral-600` - Default buttons
- **Hover**: `hover:bg-neutral-800` - Default hover
- **Text**: `text-neutral-800` - Default text
- **Focus**: `focus:ring-neutral-300` - Default focus

### Gray Scale

- **🌫️ Gray 50**: `#f9fafb` - Main background
- **⬜ Gray 100**: `#f3f4f6` - Light backgrounds
- **◻️ Gray 200**: `#e5e7eb` - Borders, dividers
- **🔳 Gray 300**: `#d1d5db` - Disabled states
- **🔲 Gray 600**: `#4b5563` - Secondary text
- **🔘 Gray 700**: `#374151` - Primary text
- **⚫ Gray 800**: `#1f2937` - Headings
- **⬛ Gray 900**: `#111827` - High contrast text

### Dark Mode Colors

- **Text**: `text-white` - Primary text in dark mode
- **Secondary**: `text-gray-300` - Secondary text in dark mode
- **Borders**: `border-gray-700` - Dark mode borders
- **Backgrounds**: `bg-gray-900` - Dark mode backgrounds

## 🔤 Typography

### Font Families

- **📝 Body Text**: `Roboto - Clean, readable sans-serif`
- **📰 Headings**: `Rubik - Bold, modern heading font`
- **💻 Monospace**: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas`

### Heading Hierarchy

```txt
🏷️ H1: text-4xl font-bold (Rubik)
🏷️ H2: text-3xl font-bold (Rubik)
🏷️ H3: text-2xl font-bold (Rubik)
🏷️ H4: text-xl font-bold (Rubik)
```

### Text Styles

- **📝 Body**: `font-roboto leading-relaxed`
- **💪 Bold**: `font-bold`
- **📐 Medium**: `font-medium`
- **🔗 Links**: `text-violet-600 hover:text-violet-700`

## 🎯 Component Patterns

### 🔘 Buttons

#### Primary Button

```css
bg-violet-600 hover:bg-violet-800
text-white font-medium
px-5 py-3.5 rounded-lg
focus:ring-4 focus:ring-violet-400
```

#### Semantic Buttons

- **🔵 Info**: `bg-blue-600 hover:bg-blue-800`
- **🟢 Success**: `bg-green-600 hover:bg-green-800`
- **🟡 Warning**: `bg-yellow-600 hover:bg-yellow-800`
- **🔴 Danger**: `bg-red-600 hover:bg-red-800`
- **⚫ Neutral**: `bg-neutral-600 hover:bg-neutral-800`

### 🏷️ Tags/Badges

```css
bg-blue-100 text-blue-800
px-2.5 py-0.5 text-xs font-medium rounded
dark:bg-blue-900 dark:text-blue-300
```

### 💬 Alerts

Each alert type follows the semantic color system:

```css
border-{color}-300 bg-{color}-100 text-{color}-800
```

### 📝 Code Blocks

#### Inline Code

```css
bg-violet-100 text-violet-800
px-2 py-1 rounded font-mono text-sm
dark:bg-violet-900/30 dark:text-violet-200
```

#### Code Blocks

```css
bg-gray-50 border border-gray-200
rounded-lg p-4 overflow-auto
dark:bg-gray-900 dark:border-gray-700
```

### 💬 Blockquotes

```css
border-l-4 border-violet-600
bg-violet-50 pl-6 py-4 italic
dark:border-violet-400 dark:bg-violet-900/20
```

## 🔄 Interactive States

### 🎯 Focus

- **Ring**: `focus:ring-4`
- **Colors**: Match component's semantic color
- **Outline**: `focus:outline-hidden`

### 🖱️ Hover

- **Buttons**: Darken by 200 (600 → 800)
- **Links**: `hover:underline` + color transition
- **Cards**: Subtle shadows or background changes

### ⚡ Transitions

```css
transition-colors duration-200 ease-in-out
```

## 📱 Responsive Design

### 📏 Breakpoints

- **📱 sm**: `640px` - Small tablets
- **📋 md**: `768px` - Tablets
- **💻 lg**: `1024px` - Laptops
- **🖥️ xl**: `1280px` - Desktops
- **🖥️ 2xl**: `1536px` - Large screens

### 📐 Spacing Scale

- **Tight**: `mb-2, mt-2` - Small gaps
- **Normal**: `mb-4, mt-4` - Standard spacing
- **Loose**: `mb-6, mt-6` - Generous spacing
- **Extra Loose**: `mb-8, mt-8` - Section breaks

## 🎪 Animations

### Custom Animations

- **💫 Pulse Bubble**: Gentle scaling pulse
- **👻 Ghost Movement**: Left/right floating
- **🚶 Man Walk**: Subtle walking animation
- **🏀 Gentle Bounce**: Vertical bouncing
- **✨ Fade In**: Opacity transition
- **📥 Slide Down**: Dropdown animations
- **📤 Slide Up**: Slide-up animations

### ⏱️ Timing

- **🏃 Quick**: `250ms` - Fast interactions
- **🚶 Medium**: `500ms` - Standard transitions
- **🐌 Slow**: `1000ms+` - Emphasis animations

## 🌙 Dark Mode

### Implementation

Dark mode is implemented using Tailwind's `dark:` prefix and follows these principles:

- **📖 Readability**: High contrast ratios
- **🎨 Consistency**: Semantic colors adapt appropriately
- **👁️ Eye Comfort**: Reduced bright areas

### Dark Mode Mappings

- `text-gray-700` → `dark:text-gray-300`
- `bg-white` → `dark:bg-gray-900`
- `border-gray-200` → `dark:border-gray-700`
- Violet colors remain consistent for brand recognition

## 🧩 Design Tokens

### Selection Highlight

```css
::selection {
  @apply bg-violet-400 text-white;
}
```

### Custom Violet

```css
violet: {
  600: '#6829D3';
}
```

## 📋 Usage Guidelines

### ✅ Do's

- Use semantic colors for their intended purpose
- Maintain consistent spacing patterns
- Follow the established typography hierarchy
- Ensure proper contrast ratios for accessibility
- Use brand violet for primary actions and highlights

### ❌ Don'ts

- Mix different color schemes arbitrarily
- Use colors outside the defined palette
- Skip hierarchy levels in typography
- Ignore dark mode considerations
- Override font families without purpose

## 🔗 Related Files

- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - Global styles and fonts
- `lib/data/shared/alertTypeClasses.ts` - Alert styling
- `components/shared/` - Reusable styled components

---

**🎨 This design system ensures consistency, accessibility, and brand coherence across the entire portfolio website.**
