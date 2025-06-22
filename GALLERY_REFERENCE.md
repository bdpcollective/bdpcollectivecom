# Gallery Reference Guide

This document outlines the standard patterns for building image galleries on the bdpcollective.com site.

## Gallery Types

There are two main gallery patterns used on the site:

### 1. Dynamic Gallery (with data structure)
Used for: Lacrosse events with structured data
Location: `src/pages/images/lacrosse/[event].astro`

### 2. Simple Gallery (with reusable component)
Used for: Hula events, simple photo collections
Location: `src/pages/images/hula2025/blue-ox.astro`

## Pattern 1: Dynamic Gallery Structure

### File Structure
```
src/pages/images/[category]/[event].astro
```

### Key Components

#### 1. Data Definition
```typescript
export function getStaticPaths() {
  const gameData: Record<string, {
    title: string;
    date: string;
    location: string;
    description: string;
    imageCount: number;
    imagePath: string;
    imagePrefix: string;
  }> = {
    "event-slug": {
      title: "Event Title",
      date: "March 8, 2025",
      location: "Event Location",
      description: "Event description",
      imageCount: 53, // Total number of images
      imagePath: "/images/category/folder-name",
      imagePrefix: "image-prefix-name"
    }
  };

  return Object.keys(gameData).map(event => ({
    params: { event },
    props: { game: gameData[event] }
  }));
}
```

#### 2. Image Array Generation
```typescript
const images = Array.from({ length: game.imageCount }, (_, i) => ({
  id: i + 1,
  src: `${game.imagePath}/${game.imagePrefix} - ${i + 1}.jpeg`,
  alt: `${game.title} - Image ${i + 1}`
}));
```

#### 3. HTML Structure
```astro
<Layout title={game.title}>
  <main class="min-h-screen bg-gray-50" data-images={JSON.stringify(images)}>
    {/* Hero Section */}
    <section class="relative bg-gray-900 text-white py-24">
      <div class="relative z-10 flex items-center h-full">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">{game.title}</h1>
          <p class="text-lg text-gray-200">
            {game.date} at {game.location}
          </p>
        </div>
      </div>
    </section>

    {/* Back Navigation */}
    <section class="container mx-auto px-4 py-12">
      <a 
        href="/images/category" 
        class="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Category
      </a>

      {/* Photo Grid */}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <div 
            class="relative overflow-hidden rounded-lg cursor-pointer group aspect-[4/3]"
            data-index={image.id - 1}
            data-image-src={image.src}
            data-image-title={game.title}
          >
            <img
              src={image.src}
              alt={image.alt}
              class="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            <div class="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 class="text-white text-lg font-semibold">{game.title}</h3>
              <p class="text-gray-200 text-sm">{game.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Custom Lightbox Implementation */}
    <!-- See full implementation in src/pages/images/lacrosse/[event].astro -->
  </main>
</Layout>
```

## Pattern 2: Simple Gallery with Reusable Component

### File Structure
```
src/pages/images/[category]/gallery-name.astro
src/components/Lightbox.astro
```

### Implementation
```astro
---
import Layout from '../../../layouts/Layout.astro';
import Lightbox from '../../../components/Lightbox.astro';

// Generate image array
const images = [
  ...Array.from({length: 85}, (_, i) => {
    const num = String(i + 1).padStart(2, '0');
    return `/images/category/subfolder/Image_Prefix-${num}.jpg`;
  })
];

const title = "Gallery Title";
const description = "Gallery description";
---

<Layout title={title}>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Back Navigation */}
      <div class="mb-8">
        <a href="/images/category" class="text-blue-600 hover:text-blue-800">← Back to Category</a>
      </div>
      
      {/* Header */}
      <h1 class="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      <p class="text-gray-600 mb-8">{description}</p>

      {/* Photo Grid */}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
            <img
              src={image}
              alt={`Gallery photo ${index + 1}`}
              class="gallery-image w-full h-full object-cover cursor-pointer transform hover:scale-105 transition-transform duration-300"
              loading={index < 9 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Reusable Lightbox Component */}
  <Lightbox images={images} />
</Layout>
```

## Lightbox Component (`src/components/Lightbox.astro`)

### Features
- Full-screen modal overlay
- Keyboard navigation (arrow keys, escape)
- Click navigation (prev/next buttons)
- Click outside to close
- Smooth image transitions
- Image preloading

### Usage
```astro
import Lightbox from '../../../components/Lightbox.astro';

// In your component:
<Lightbox images={images} />

// Images must have class "gallery-image" to work with lightbox
<img class="gallery-image" src="..." alt="..." />
```

## Styling Patterns

### Grid Layout
```css
/* Responsive grid */
.grid {
  @apply grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4;
}

/* Fixed aspect ratio for consistency */
.aspect-[4/3] {
  aspect-ratio: 4/3;
}
```

### Hover Effects
```css
/* Image scale on hover */
.transform.group-hover:scale-105 {
  transition: transform 0.3s ease;
}

/* Overlay on hover */
.group-hover:bg-black/20 {
  transition: background-color 0.3s ease;
}
```

### Loading Strategy
```astro
{/* Lazy load images after the first 9 for performance */}
loading={index < 9 ? "eager" : "lazy"}
```

## File Naming Conventions

### Image Files
- Sequential numbering: `Image_Name - 1.jpeg`, `Image_Name - 2.jpeg`
- Zero-padded numbering: `Image_Name-01.jpg`, `Image_Name-02.jpg`
- Consistent extensions: `.jpeg` or `.jpg`

### Directory Structure
```
public/images/
├── category/
│   ├── event-folder/
│   │   ├── Image_Prefix - 1.jpeg
│   │   ├── Image_Prefix - 2.jpeg
│   │   └── ...
│   └── another-event/
└── another-category/
```

## Navigation Patterns

### Breadcrumb Navigation
```astro
<a href="/images/category" class="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8">
  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
  Back to Category
</a>
```

## Performance Considerations

1. **Lazy Loading**: Load first 9 images eagerly, rest lazily
2. **Image Optimization**: Use appropriate file sizes and formats
3. **Responsive Images**: Consider using different sizes for different viewports
4. **Preloading**: Lightbox component handles image preloading for smooth transitions

## When to Use Each Pattern

### Use Dynamic Gallery Pattern When:
- You have structured event data (date, location, description)
- Multiple similar events in the same category
- Need consistent URL structure (`/category/[event]`)
- Want rich metadata and SEO benefits

### Use Simple Gallery Pattern When:
- Single gallery or fewer structured requirements
- Quick setup needed
- Consistent with existing simple galleries
- Less dynamic content

## Creating a New Gallery

1. **Choose the appropriate pattern** based on requirements
2. **Create the directory structure** in `public/images/`
3. **Upload images** with consistent naming
4. **Create the .astro file** using the appropriate pattern
5. **Update navigation** in parent category pages
6. **Test the lightbox functionality**
7. **Verify responsive behavior** on different screen sizes 