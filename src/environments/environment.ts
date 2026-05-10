export const environment = {
  production: false,
  mediaBase: '/assets',

  leadership: {
    chairmanImage: '/assets/leadership/chairman.jpg',
    mdImage: '/assets/leadership/md.jpg',
    secretaryImage: '/assets/leadership/secretary.jpg'
  },

  campus: {
    hostelImage: '/assets/campus-life/hostel.png',
    transportImage: '/assets/campus-life/transport.png'
  },

  facilities: {
    bgImage: '/assets/facilities/bg.png',
    campusImage: '/assets/facilities/campus.png'
  },

  media: {
    heroVideo: '/assets/hero/hero-bg.mp4',
    heroImage: '/assets/hero/hero-bg.jpg',

    // Phase 4 Media Architecture
    categories: ['All', 'Cultural Events', 'Freshers Party', 'Seminars', 'Achievements', 'Campus Life', 'Leadership Moments'],

    gallery: [
      { id: 1, type: 'image', category: 'Campus Life', url: '/assets/gallery/campus-view.png', title: 'Campus View' },
      { id: 2, type: 'image', category: 'Seminars', url: '/assets/gallery/seminar.png', title: 'Guest Lecture' },
      { id: 3, type: 'image', category: 'Cultural Events', url: '/assets/gallery/annual-fest.png', title: 'Annual Fest' },
      { id: 4, type: 'image', category: 'Achievements', url: '/assets/gallery/awards.png', title: 'Award Ceremony' },
      { id: 5, type: 'image', category: 'Leadership Moments', url: '/assets/gallery/leadership.png', title: 'Chairman Speech' }
    ],

    freshersParty: [
      { id: 1, url: '/assets/events/freshers-1.png', size: 'large' },
      { id: 2, url: '/assets/events/freshers-2.png', size: 'small' },
      { id: 3, url: '/assets/events/freshers-3.png', size: 'small' },
      { id: 4, url: '/assets/events/freshers-4.png', size: 'medium' }
    ],

    reels: [
      { id: 1, type: 'reel', category: 'Cultural Events', thumbnail: '/assets/reels/reel-1-thumb.jpg', videoUrl: '/assets/reels/reel-1.mp4' },
      { id: 2, type: 'reel', category: 'Campus Life', thumbnail: '/assets/reels/reel-2-thumb.jpg', videoUrl: '/assets/reels/reel-2.mp4' }
    ]
  },

  theme: {
    primary: '#003366', // Royal Blue
    accent: '#D4AF37',  // Gold
    surface: '#ffffff'
  }
};
