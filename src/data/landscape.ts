// Landscape photo collections. Each folder under public/images/landscape/
// is one collection, surfaced as a card on /images/landscape.

export type LandscapeCollection = {
  /** URL slug: /images/landscape/<id> */
  id: string;
  /** Folder name under public/images/landscape/ */
  folder: string;
  title: string;
  location: string;
  date: string;
  /** Filenames inside the folder, in display order */
  files: string[];
};

/**
 * Build filenames for a folder whose first image has no suffix and the rest
 * are `-2` … `-N`. `skip` drops numbers that were never exported, and
 * `startAt` is 2 when there is no unsuffixed first image.
 */
function numbered(
  prefix: string,
  last: number,
  { skip = [] as number[], startAt = 1 } = {}
): string[] {
  const files = startAt === 1 ? [`${prefix}.webp`] : [];
  for (let n = Math.max(startAt, 2); n <= last; n++) {
    if (!skip.includes(n)) files.push(`${prefix}-${n}.webp`);
  }
  return files;
}

export const landscapeCollections: LandscapeCollection[] = [
  {
    id: 'carmel',
    folder: 'carmel',
    title: 'Carmel by the Sea',
    location: 'Carmel-by-the-Sea, California',
    date: 'November 2026',
    files: numbered('20261109_Carmel', 12, { skip: [10], startAt: 2 })
  },
  {
    id: 'colorado',
    folder: 'colorado',
    title: 'Colorado',
    location: 'Colorado',
    date: 'October 2025',
    files: numbered('20251012_Colorado', 11)
  },
  {
    id: 'bahamas',
    folder: 'bahamas',
    title: 'Bahamas',
    location: 'The Bahamas',
    date: 'January 2025',
    files: numbered('20250103_Bahamas', 21, {
      skip: [5, 8, 19, 20],
      startAt: 2
    })
  },
  {
    id: 'omaha',
    folder: 'omaha',
    title: 'Omaha',
    location: 'Omaha, Nebraska',
    date: 'Various',
    files: ['BobKerryBridge.webp', 'SouthwestSpirit.webp']
  }
];

/** Public paths for every image in a collection. */
export function imagePaths(collection: LandscapeCollection): string[] {
  return collection.files.map((file) => `/images/landscape/${collection.folder}/${file}`);
}

/** A random image from the collection, used for its card preview. */
export function randomPreview(collection: LandscapeCollection): string {
  const paths = imagePaths(collection);
  return paths[Math.floor(Math.random() * paths.length)];
}

export function getCollection(id: string): LandscapeCollection {
  const found = landscapeCollections.find((c) => c.id === id);
  if (!found) throw new Error(`Unknown landscape collection: ${id}`);
  return found;
}
