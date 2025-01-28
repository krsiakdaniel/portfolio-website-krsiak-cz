---
name: ARIA
about: Template for implementing ARIA improvements.
title: 'ARIA: ♿'
labels: ARIA
assignees: krsiakdaniel
---

## Description

> [!NOTE]
>
> Improve the **ARIA** and **accessibility** for the website like navigation and contrast.

## Benefits

> [!TIP]
>
> - Improve user experience for individuals with disabilities.
> - Increase compliance with accessibility standards.
> - Enhance support for assistive technologies.

## ARIA Implementation Plan

- [ ] Identify and add appropriate ARIA roles (`role="img"`,`role="alert"`, `role="dialog"`, `role="navigation"`, etc.)
- [ ] Add ARIA attributes for dynamic content (`aria-live`, `aria-expanded`, `aria-controls`, etc.).
- [ ] Provide meaningful context with ARIA labels and descriptions.
- [ ] Ensure all interactive elements are keyboard navigable.

## Links

- [ ] MDN Web Docs: [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)

## Code Example

Include a code example to demonstrate ARIA implementation if applicable.

```html
<div role="dialog" aria-labelledby="dialogTitle" aria-modal="true">
  <h1 id="dialogTitle">Dialog Title</h1>
  <p>Dialog content goes here...</p>
</div>
```

### Accessibility Considerations

Ensure ARIA roles and attributes are correctly implemented:

- Use **ARIA roles** to define the type of every section (e.g., `role="menu"`).
- Implement **ARIA states and properties** such as `aria-checked` for checkboxes.
- Provide **keyboard support** for all interactive components.

## Tasks

- [ ] Conduct an accessibility audit to identify areas needing ARIA enhancements.
- [ ] Implement ARIA roles and attributes.
- [ ] Test all ARIA implementations with screen readers.
- [ ] Review for keyboard navigation and focus management.

## Acceptance Criteria

- [ ] All ARIA roles and attributes are correctly implemented.
- [ ] ARIA implementations enhance usability for assistive technology users.
- [ ] All tests pass successfully including accessibility tests.
- [ ] Code is reviewed and approved through PR.

## Screenshots

Attach relevant screenshots if applicable.

### Before

![Before](https://placehold.co/400x200?text=Before+Screenshot)

### After

![After](https://placehold.co/400x200?text=After+Screenshot)
