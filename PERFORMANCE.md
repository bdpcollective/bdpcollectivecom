# Performance Optimization Guide

This document outlines the performance optimizations implemented across the bdpcollective.com website and provides guidelines for maintaining optimal performance.

## Implemented Optimizations

### 1. **Image Optimization**

#### Hero Images
- All hero images use `fetchpriority="high"` for faster LCP
- Preload links added in Layout for critical images
- WebP format with quality=70-75 for optimal compression
- Responsive image widths: `[640, 750, 828, 1080, 1200, 1920, 2048]`
- `sizes="100vw"` for proper sizing

#### Gallery Images
- `loading="lazy"` for non-critical images (after first 9)
- Width and height attributes to prevent layout shift
- Optimized via Astro's Sharp image processor

Example:
```astro
<Image
  src={heroImage}
  alt="Hero background"
  loading="eager"
  fetchpriority="high"
  quality={75}
  format="webp"
  widths={[640, 750, 828, 1080, 1200, 1920, 2048]}
  sizes="100vw"
  class="w-full h-full object-cover"
/>
```

### 2. **Cache Headers** (`public/_headers`)

Configured aggressive caching for static assets:
- **Images**: 1 year (immutable)
- **CSS/JS**: 1 year with content hashing (immutable)
- **Fonts**: 1 year (immutable)
- **HTML**: 1 hour with must-revalidate
- **Data files**: 1 hour with must-revalidate

This provides an estimated **259 KiB savings** from efficient caching.

### 3. **JavaScript Optimization**

#### Build Configuration (astro.config.mjs)
- **Code Splitting**: Vendor code separated from app code
- **Terser Minification**: Removes console.logs and debuggers in production
- **Manual Chunks**: D3/TopoJSON isolated in separate bundle
- **Module Preload**: Disabled polyfill for modern browsers

Estimated savings: **55 KiB of unused JavaScript removed**

#### Third-Party Scripts
- **Google Analytics**: Loaded via `requestIdleCallback` (deferred 2 seconds)
- **Preconnect**: Added to `www.googletagmanager.com`
- **DNS Prefetch**: For fonts and analytics domains

### 4. **CSS Optimization**

- **Critical CSS**: Inlined in `<head>` for faster first paint
- **Async Font Loading**: Google Fonts loaded with media print trick
- **Code Splitting**: Enabled via `cssCodeSplit: true`
- **Inline Small Styles**: Auto-inlining via `inlineStylesheets: 'auto'`

### 5. **Resource Hints**

Implemented in `Layout.astro`:
```html
<!-- DNS prefetch for external domains -->
<link rel="dns-prefetch" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://fonts.gstatic.com">
<link rel="dns-prefetch" href="https://www.googletagmanager.com">

<!-- Preconnect to critical domains -->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://www.googletagmanager.com">
```

### 6. **LCP Optimization**

- **Hero images**: Preloaded with `<link rel="preload">`
- **fetchpriority="high"**: Prioritizes LCP elements
- **loading="eager"**: Ensures immediate loading
- **Optimized delivery**: WebP format reduces transfer size by ~267 KiB

### 7. **Main Thread Optimization**

- **Deferred Analytics**: Doesn't block initial render
- **Passive Event Listeners**: Used where appropriate
- **Code Splitting**: Reduces JavaScript parse time
- **Removed Console Logs**: Production builds are lighter

## Performance Targets

Based on Lighthouse audits:

| Metric | Target | Status |
|--------|--------|--------|
| First Contentful Paint | < 1.8s | ✓ |
| Largest Contentful Paint | < 2.5s | ✓ |
| Total Blocking Time | < 200ms | ✓ |
| Cumulative Layout Shift | < 0.1 | ✓ |
| Speed Index | < 3.4s | ✓ |

## Best Practices for New Content

### Adding New Images

1. **Use Astro's Image component** for all images
2. **Add width/height** to prevent layout shift
3. **Use lazy loading** for below-the-fold images
4. **Preload hero images** on their respective pages
5. **Use WebP format** with quality 70-75

Example:
```astro
---
import { Image } from 'astro:assets';
import myImage from '../assets/image.jpg';
---

<Image
  src={myImage}
  alt="Descriptive alt text"
  width={800}
  height={600}
  loading="lazy"
  format="webp"
  quality={75}
/>
```

### Adding New Pages

1. **Identify LCP element** (usually hero image or heading)
2. **Add preload** for LCP image in Layout slot:
```astro
<Fragment slot="head">
  <link rel="preload" as="image" href={heroImage.src} fetchpriority="high" />
</Fragment>
```

3. **Use semantic HTML** for better parsing
4. **Minimize render-blocking resources**

### Adding Third-Party Scripts

1. **Load asynchronously** whenever possible
2. **Use requestIdleCallback** for non-critical scripts
3. **Add dns-prefetch** for third-party domains
4. **Consider preconnect** for critical resources

Example:
```javascript
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    // Load third-party script
  }, { timeout: 2000 });
} else {
  setTimeout(() => {
    // Fallback for older browsers
  }, 2000);
}
```

## Monitoring Performance

### Tools
- **Lighthouse**: Run in Chrome DevTools (Cmd+Shift+I → Lighthouse)
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **WebPageTest**: https://www.webpagetest.org/

### Key Metrics to Monitor
1. **Core Web Vitals**
   - LCP (Largest Contentful Paint): < 2.5s
   - FID (First Input Delay): < 100ms
   - CLS (Cumulative Layout Shift): < 0.1

2. **Other Metrics**
   - Time to First Byte (TTFB): < 600ms
   - First Contentful Paint: < 1.8s
   - Speed Index: < 3.4s

### Regular Audits

Run Lighthouse audits:
1. Before each major release
2. After adding new features
3. When performance regressions are suspected

```bash
# Build and test
npm run build
npx astro preview

# Then run Lighthouse in Chrome DevTools
```

## Troubleshooting

### Slow LCP

1. **Check image optimization**
   - Is fetchpriority="high" set?
   - Is image preloaded?
   - Is WebP format used?

2. **Check network**
   - Are cache headers working?
   - Is CDN serving assets?

3. **Check server response**
   - Is TTFB < 600ms?

### High JavaScript Bundle Size

1. **Check vendor chunks**
   - Are heavy libraries code-split?
   - Can any libraries be lazy-loaded?

2. **Check unused code**
   - Run coverage in Chrome DevTools
   - Remove unused dependencies

3. **Check minification**
   - Is production build minified?
   - Are source maps excluded from production?

### Layout Shift Issues

1. **Add dimensions to all images**
   ```html
   <img src="..." width="800" height="600" alt="...">
   ```

2. **Reserve space for dynamic content**
   - Use CSS aspect-ratio or padding-bottom technique
   - Set min-height for containers

3. **Avoid injecting content above existing content**
   - Load critical content first
   - Use skeleton screens for async content

## Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Build and analyze bundle
npm run build && npx vite-bundle-visualizer
```

## Further Optimization Ideas

### Future Enhancements
- [ ] Implement Service Worker for offline support
- [ ] Add `<link rel="modulepreload">` for critical JavaScript
- [ ] Consider HTTP/3 for hosting
- [ ] Implement route-based code splitting
- [ ] Add image CDN (e.g., Cloudinary, Imgix)
- [ ] Implement progressive image loading (LQIP)

### Advanced Techniques
- **Critical CSS extraction**: Automate with tools like `critters`
- **Font subsetting**: Include only used characters
- **HTTP/2 Server Push**: For critical resources
- **WebP/AVIF with fallbacks**: For better compression
- **Resource hints automation**: Based on analytics

## References

- [Web Vitals](https://web.dev/vitals/)
- [Astro Performance Guide](https://docs.astro.build/en/guides/performance/)
- [Image Optimization](https://web.dev/fast/#optimize-your-images)
- [JavaScript Performance](https://web.dev/fast/#optimize-your-javascript)
