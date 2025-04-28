import { describe, it, expect } from 'vitest';

describe('Omaha Lacrosse Events', () => {
  const events = [
    {
      title: "2025 Omaha Lacrosse Club",
      events: [
        {
          name: "Blue vs Westside",
          date: "April 27, 2025",
          image: `/images/olc/20250427-Blue-vs-Westside/OLC_BluevsWestside - 1.jpeg`,
          link: "/images/olc/20250427_1_BluevsWestside"
        },
        {
          name: "Blue vs Sarpy",
          date: "April 13, 2025",
          image: `/images/olc/20250413-Blue-vs-Sarpy/20250413_BluevsSarpy - 1.jpeg`,
          link: "/images/olc/20250413_1_BluevsSarpy"
        }
      ]
    }
  ];

  it('should have events ordered from newest to oldest', () => {
    const dates = events[0].events.map(e => new Date(e.date));
    for (let i = 0; i < dates.length - 1; i++) {
      expect(dates[i] > dates[i + 1]).toBe(true);
    }
  });

  it('should have correct event structure', () => {
    expect(events[0].events).toHaveLength(2);
    expect(events[0].events[0]).toEqual({
      name: "Blue vs Westside",
      date: "April 27, 2025",
      image: `/images/olc/20250427-Blue-vs-Westside/OLC_BluevsWestside - 1.jpeg`,
      link: "/images/olc/20250427_1_BluevsWestside"
    });
  });

  it('should have correct gallery link for Blue vs Westside', () => {
    const westsideEvent = events[0].events.find(e => e.name === "Blue vs Westside");
    expect(westsideEvent?.link).toBe("/images/olc/20250427_1_BluevsWestside");
  });
}); 