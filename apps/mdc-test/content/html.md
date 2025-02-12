---
title: HTML
description: HTML Syntax
lastModified: 2025-02-12
---

## Description

Angle Bracketed Syntax:

```vue
<ComponentName />
```

## Observation

- Markdown content following embedded component is not rendered.  
- The `Last Heading` and `Last line` markdown content should be rendered after the `Component Invocation` and before the `GoBack` button.
- To avoid markdown content trim, use the recommended double-colon syntax for embedding Nuxt components in markdown.

```md
::Component Name
::
```

## Component Invocation

<Component1 />

## Last Heading

Last line
