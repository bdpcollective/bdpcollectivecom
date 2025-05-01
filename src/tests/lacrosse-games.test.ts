import { describe, it, expect } from 'vitest';
import { lacrosseGames } from '../pages/images/lacrosse.astro';

describe('Lacrosse Games', () => {
  it('should have correct image counts for each game', () => {
    const gameCounts: Record<string, number> = {
      'varsity-vs-waukee': 33,
      'jv-vs-waukee': 14,
      'varsity-vs-elkhorn': 85,
      'jv-vs-elkhorn': 24,
      'varsity-vs-grand-cities': 74,
      'jv-vs-grand-cities': 29,
      'varsity-vs-akeny': 53,
      'jv-vs-akeny': 19
    };

    lacrosseGames.forEach(game => {
      expect(game.photoCount).toBe(gameCounts[game.id]);
    });
  });

  it('should have valid preview image paths', () => {
    lacrosseGames.forEach(game => {
      // Check if the preview image path matches the expected pattern
      expect(game.previewImage).toMatch(/^\/images\/lacrosse\/\d{8}-[a-z-]+\/[A-Za-z0-9-]+ - \d+\.jpeg$/);
      
      // Extract the number from the path
      const match = game.previewImage.match(/ - (\d+)\.jpeg$/);
      if (match) {
        const imageNumber = parseInt(match[1], 10);
        expect(imageNumber).toBeGreaterThanOrEqual(1);
        expect(imageNumber).toBeLessThanOrEqual(game.photoCount);
      }
    });
  });
}); 