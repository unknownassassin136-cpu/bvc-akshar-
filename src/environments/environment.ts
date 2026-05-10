export const environment = {
  production: false,
  mediaBase: '/assets',

  leadership: {
    chairmanImage: '/assets/leadership/chairman.jpg',
    mdImage: '/assets/leadership/md.jpg',
    secretaryImage: '/assets/leadership/secretary.jpg'
  },

  media: {
    heroVideo: '/assets/hero/hero-bg.mp4',
    heroImage: '/assets/hero/hero-bg.jpg',

    // Phase 4 Media Architecture
    categories: ['All', 'Cultural Events', 'Freshers Party', 'Seminars', 'Achievements', 'Campus Life', 'Leadership Moments'],

    gallery: [
      { id: 1, type: 'image', category: 'Campus Life', url: '/assets/gallery/campus-view.jpg', title: 'Campus View' },
      { id: 2, type: 'image', category: 'Seminars', url: '/assets/gallery/seminar.jpg', title: 'Guest Lecture' },
      { id: 3, type: 'image', category: 'Cultural Events', url: '/assets/gallery/annual-fest.jpg', title: 'Annual Fest' },
      { id: 4, type: 'image', category: 'Achievements', url: '/assets/gallery/awards.jpg', title: 'Award Ceremony' },
      { id: 5, type: 'image', category: 'Leadership Moments', url: '/assets/gallery/leadership.jpg', title: 'Chairman Speech' }
    ],

    freshersParty: [
      { id: 1, url: '/assets/events/freshers-1.jpg', size: 'large' },
      { id: 2, url: '/assets/events/freshers-2.jpg', size: 'small' },
      { id: 3, url: '/assets/events/freshers-3.jpg', size: 'small' },
      { id: 4, url: '/assets/events/freshers-4.jpg', size: 'medium' }
    ],

    reels: [
      { id: 1, type: 'reel', category: 'Cultural Events', thumbnail: '/assets/reels/reel-1-thumb.jpg', videoUrl: '' },
      { id: 2, type: 'reel', category: 'Campus Life', thumbnail: '/assets/reels/reel-2-thumb.jpg', videoUrl: '' }
    ]
  },

  theme: {
    primary: '#003366', // Royal Blue
    accent: '#D4AF37',  // Gold
    surface: '#ffffff'
  }
};
