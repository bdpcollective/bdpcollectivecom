# Design System Documentation

## Overview

This design system provides a consistent set of components, colors, typography, and spacing rules for the bdpcollective.com website. It ensures visual consistency across all pages and improves development efficiency through reusable components.

## Colors

Our color palette is defined in `src/styles/design-tokens.css` and includes:

- **Primary Colors**: Used for main actions and branding
- **Secondary Colors**: Used for supporting elements
- **Accent Colors**: Used for highlights and special elements
- **Neutral Colors**: Used for text, backgrounds, and borders

## Typography

Typography is managed through the `Typography` component with the following variants:

- **Headings**: h1-h6 with responsive sizes
- **Body Text**: Standard paragraph text
- **Small Text**: For less important information
- **Caption**: For image captions and small labels

Font weights include normal, medium, semibold, and bold.

## Components

### Button

A versatile button component with multiple variants:

```astro
<Button variant="primary" size="md">Click Me</Button>
<Button variant="secondary" size="lg">Large Button</Button>
<Button variant="outline" size="sm">Small Outline</Button>
<Button variant="text">Text Button</Button>
```

### Card

Card component for content containers:

```astro
<Card variant="elevated" padding="md">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

### Container

Container for consistent page width and padding:

```astro
<Container size="lg">
  <p>Content with consistent max-width and padding</p>
</Container>
```

### Typography

Typography component for consistent text styling:

```astro
<Typography variant="h1" weight="bold" color="primary">Heading</Typography>
<Typography variant="body" color="muted">Body text</Typography>
```

### Grid

Grid component for flexible layouts:

```astro
<Grid cols={3} gap="md">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</Grid>
```

## Spacing

Consistent spacing is achieved through:

- **Container Padding**: Defined in the Container component
- **Grid Gaps**: Small (0.5rem), Medium (1rem), Large (2rem)
- **Component Padding**: Defined in individual components

## Layout Rules

1. Use the Container component for page content
2. Maintain consistent spacing between sections
3. Use Grid for multi-column layouts
4. Ensure responsive behavior for all components

## Best Practices

1. Always use the provided components instead of creating custom ones
2. Follow the established color palette
3. Use Typography component for all text elements
4. Maintain consistent spacing using the defined values
5. Test all components at different viewport sizes 