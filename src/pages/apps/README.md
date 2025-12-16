# Adding a New App

Reference guide for adding new applications to the Apps section.

## Steps

### 1. Add to the apps index page

Edit `src/pages/apps.astro` and add an entry to the `appItems` array:

```javascript
const appItems = [
  // ... existing apps
  {
    title: "Your App Name",
    description: "Brief description of what the app does.",
    image: "/path/to/card-image.png",  // Image shown on the card
    slug: "your-app-slug"              // URL will be /apps/your-app-slug
  }
];
```

### 2. Create the app page

Create a new file at `src/pages/apps/your-app-slug.astro`:

```astro
---
import Layout from '../../layouts/Layout.astro';
import { baseUrl } from '../../config';
---

<Layout title="Your App Name - Apps">
  <main>
    {/* Hero Section */}
    <section class="relative bg-gradient-to-b from-gray-700 to-gray-900 py-12">
      <div class="relative z-10 flex flex-col justify-center px-4 container mx-auto">
        <div class="max-w-7xl mx-auto w-full">
          <h1 class="text-4xl md:text-6xl font-bold mb-4 text-white">
            Your App Name
          </h1>
          <p class="text-lg md:text-xl text-gray-300 mb-4">
            Brief description of the app.
          </p>
        </div>
      </div>
    </section>

    {/* Content Section */}
    <section class="container mx-auto px-4 py-20">
      <div class="max-w-3xl mx-auto space-y-16">
        {/* Back Button */}
        <a
          href="/apps"
          class="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8"
        >
          <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Apps
        </a>

        {/* App Interface - customize this section */}
        <div class="bg-white rounded-2xl shadow-xl p-8">
          <!-- Your app content here -->
        </div>

        {/* About Section */}
        <div>
          <h2 class="text-3xl font-bold mb-6">About This App</h2>
          <div class="prose max-w-none">
            <p class="text-gray-700">
              Explanation of what the app does and how it works.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Fixed Back Navigation */}
    <div class="fixed left-4 top-1/2 -translate-y-1/2 z-50">
      <a
        href="/apps"
        class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-lg text-gray-600 hover:text-gray-900 transition-colors"
        aria-label="Back to Apps"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </a>
    </div>
  </main>

  <script>
    document.addEventListener('astro:page-load', () => {
      // Your app JavaScript here
    });
  </script>
</Layout>
```

### 3. Add images (optional)

Place any images in the `public/` folder:
- Card image: `public/apps/your-app-card.png` (recommended ~400x300)
- Other assets: `public/apps/your-app-slug/`

## File Structure

```
src/pages/apps/
├── apps.astro              # Index page with card grid
├── will-there-be-fog.astro # Example app
├── your-new-app.astro      # Your new app
└── README.md               # This file

public/
├── app-hero.png            # Hero image for apps index
└── apps/                   # App-specific images
    └── your-app/
```

## Tips

- Use `astro:page-load` event for JavaScript (supports View Transitions)
- For APIs, prefer free services that don't require API keys (like Open-Meteo)
- Keep the card description short (1-2 sentences)
- Test on mobile - the layout is responsive
