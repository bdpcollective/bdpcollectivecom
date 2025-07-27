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

### Clean Modern Implementation (Recommended)
```astro
---
import Layout from '../../../layouts/Layout.astro';
import Lightbox from '../../../components/Lightbox.astro';

// Generate sequential image array
const images = Array.from({ length: 57 }, (_, i) => `/images/lacrosse/2025MWLAXcamp/2025MWLAXcamp - ${i + 1}.jpeg`);

const title = "2025 MW Lacrosse Camp";
const description = "Gallery of photos from the Millard West High School Lacrosse Summer Camp 2025";
---

<Layout title={title}>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Clean Back Navigation */}
      <div class="mb-8">
        <a href="/images/lacrosse" class="text-blue-600 hover:text-blue-800">← Back to Lacrosse</a>
      </div>
      
      {/* Simple Header */}
      <h1 class="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      <p class="text-gray-600 mb-8">Summer 2025</p>

      {/* Responsive Photo Grid */}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
            <img
              src={image}
              alt={`Camp photo ${index + 1}`}
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

<style>
  /* Remove the fixed aspect ratio style */
  img {
    max-width: 100%;
    height: auto;
  }
</style>
```

### Alternative: Legacy Padding Format
```astro
// For galleries with zero-padded numbering (01, 02, 03...)
const images = [
  ...Array.from({length: 85}, (_, i) => {
    const num = String(i + 1).padStart(2, '0');
    return `/images/category/subfolder/Image_Prefix-${num}.jpg`;
  })
];
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

### Visual Style Comparison

#### Dynamic Gallery Style (Dark/Dramatic)
- **Background**: Dark gray (`bg-gray-50` with `bg-gray-900` hero)
- **Header**: Large hero section with white text on dark background
- **Images**: Overlay effects with hover information
- **Use for**: Structured events, formal presentations, rich metadata

#### Simple Gallery Style (Clean/Modern) - RECOMMENDED
- **Background**: Pure white (`bg-white`)
- **Header**: Simple title and subtitle on white background
- **Images**: Clean grid with subtle hover effects
- **Use for**: Most galleries, camps, casual events, modern aesthetic

### Grid Layout
```css
/* Responsive grid - all galleries */
.grid {
  @apply grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4;
}

/* Image container with rounded corners */
.aspect-w-3.aspect-h-2 {
  aspect-ratio: 3/2;
  overflow: hidden;
  border-radius: 0.5rem; /* rounded-lg */
}
```

### Hover Effects

#### Simple Gallery Hover (Clean)
```css
/* Subtle image scale on hover */
.transform.hover:scale-105 {
  transition: transform 0.3s ease;
}

/* Clean cursor indication */
.cursor-pointer {
  cursor: pointer;
}
```

#### Dynamic Gallery Hover (Dramatic)
```css
/* Image scale with overlay on hover */
.transform.group-hover:scale-105 {
  transition: transform 0.3s ease;
}

/* Dark overlay on hover */
.group-hover:bg-black/20 {
  transition: background-color 0.3s ease;
}
```

### Loading Strategy
```astro
{/* Lazy load images after the first 9 for performance */}
loading={index < 9 ? "eager" : "lazy"}
```

### Color Schemes & Typography

#### Simple Gallery (Clean/Modern)
```css
/* Background */
.bg-white { background-color: white; }

/* Typography */
.text-4xl { font-size: 2.25rem; }  /* Main title */
.font-bold { font-weight: 700; }
.text-gray-900 { color: #111827; }  /* Main title color */
.text-gray-600 { color: #4b5563; }  /* Subtitle color */

/* Navigation */
.text-blue-600 { color: #2563eb; }  /* Back link */
.hover:text-blue-800:hover { color: #1e40af; }
```

#### Dynamic Gallery (Dark/Dramatic)
```css
/* Backgrounds */
.bg-gray-50 { background-color: #f9fafb; }   /* Main background */
.bg-gray-900 { background-color: #111827; }  /* Hero section */

/* Typography */
.text-6xl { font-size: 3.75rem; }  /* Hero title */
.text-white { color: white; }      /* Hero text */
.text-gray-200 { color: #e5e7eb; } /* Hero subtitle */
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
- Formal presentation style desired

### Use Simple Gallery Pattern When (RECOMMENDED):
- Want clean, modern aesthetic
- Single gallery or standalone event
- Quick setup needed
- Consistent with modern web design trends
- Camp events, casual galleries, or personal collections
- Prioritizing user experience over dramatic presentation

## Creating a New Gallery

1. **Choose the appropriate pattern** based on requirements
2. **Create the directory structure** in `public/images/`
3. **Upload images** with consistent naming
4. **Create the .astro file** using the appropriate pattern
5. **Update navigation** in parent category pages
6. **Test the lightbox functionality**
7. **Verify responsive behavior** on different screen sizes

## Troubleshooting

### Images Not Displaying

#### File Extension Mismatch
**Problem**: Images don't show up in gallery even though files exist
**Cause**: File extension mismatch between code and actual files

**Solution**:
1. Check what extension your gallery code expects:
   - Dynamic galleries use `.jpeg` (hardcoded in `[event].astro`)
   - Simple galleries may use `.jpg` or `.jpeg`
2. Check actual file extensions in your directory:
   ```bash
   ls public/images/category/event-name/ | head -5
   ```
3. **For Lacrosse galleries**: Must use `.jpeg` extension
   ```bash
   # Rename .jpg files to .jpeg if needed
   cd public/images/lacrosse/your-event/
   for file in *.jpg; do mv "$file" "${file%.jpg}.jpeg"; done
   ```
4. Update preview image paths in main gallery pages to match

#### Sequential Numbering Issues
**Problem**: Some images show, others don't
**Cause**: Non-sequential or missing numbered files

**Solution**:
1. Rename files to follow sequential pattern:
   ```bash
   ls *.jpg | sort | awk '{print "mv \"" $0 "\" \"EventPrefix - " NR ".jpg\""}' | sh
   ```
2. Update `imageCount` in gallery data to match actual number of files
3. Ensure no gaps in numbering (1, 2, 3... not 1, 3, 5)

#### Path Issues
**Problem**: 404 errors or broken image links
**Cause**: Incorrect `imagePath` or `imagePrefix` in gallery data

**Solution**:
1. Verify directory structure matches `imagePath`
2. Check that `imagePrefix` matches actual file names
3. Test image URLs manually in browser
4. Ensure no spaces or special characters cause URL encoding issues

### Common Mistakes to Avoid

1. **Extension Inconsistency**: Always check existing galleries in the same category for extension patterns
2. **Case Sensitivity**: File names are case-sensitive on production servers
3. **Special Characters**: Avoid spaces, special characters in file names when possible
4. **Missing Updates**: Remember to update both dynamic gallery data AND main category page
5. **Count Mismatch**: Ensure `imageCount` matches actual number of files

### Testing Checklist

Before considering a gallery complete:
- [ ] Images display on main category page
- [ ] Individual gallery page loads correctly
- [ ] All images show (no broken image icons)
- [ ] Lightbox opens and navigates properly
- [ ] Preview images load (random selection works)
- [ ] Mobile responsiveness works
- [ ] Back navigation functions correctly 