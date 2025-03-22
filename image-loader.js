export default function imageLoader({ src, width, quality }) {
  // Remove leading slash if present
  const path = src.startsWith('/') ? src.slice(1) : src;
  return path;
} 