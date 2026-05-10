const mediaBase = 'https://raw.githubusercontent.com/unknownassassin136-cpu/bvc-akshar-/refs/heads/main/bvc%20pics';

export const environment = {
  production: true,

  // Future Firebase keys go here securely
  firebase: {
    projectId: 'bvc-akshar-prod',
    // ...
  },

  // Future Supabase keys
  supabaseUrl: '',
  supabaseKey: '',

  leadership: {
    chairmanImage: `${mediaBase}/leadership/chairman.jpg`,
    mdImage: `${mediaBase}/leadership/md.jpg`,
    secretaryImage: `${mediaBase}/leadership/secratery image.jpg`
  },

  media: {
    // heroVideo: `${mediaBase}/hero/hero-bg.mp4`,
    heroImage: `${mediaBase}/hero/hero-bg.jpg`,

    categories: ['All', 'Cultural Events', 'Freshers Party', 'Seminars', 'Achievements', 'Campus Life', 'Leadership Moments'],

    gallery: [
      { id: 1, type: 'image', category: 'Campus Life', url: `${mediaBase}/gallery/campus-view.jpg`, title: 'Campus View' },
      { id: 2, type: 'image', category: 'Seminars', url: `${mediaBase}/gallery/seminar.jpg`, title: 'Guest Lecture' },
      { id: 3, type: 'image', category: 'Cultural Events', url: `${mediaBase}/gallery/annual-fest.jpg`, title: 'Annual Fest' },
      { id: 4, type: 'image', category: 'Achievements', url: `${mediaBase}/gallery/awards.jpg`, title: 'Award Ceremony' },
      { id: 5, type: 'image', category: 'Leadership Moments', url: `${mediaBase}/gallery/leadership.jpg`, title: 'Chairman Speech' }
    ],

    freshersParty: [
      { id: 1, url: `${mediaBase}/events/freshers-1.jpg`, size: 'large' },
      { id: 2, url: `${mediaBase}/events/freshers-2.jpg`, size: 'small' },
      { id: 3, url: `${mediaBase}/events/freshers-3.jpg`, size: 'small' },
      { id: 4, url: `${mediaBase}/events/freshers-4.jpg`, size: 'medium' }
    ],

    reels: [
      { id: 1, type: 'reel', category: 'Cultural Events', thumbnail: `${mediaBase}/reels/reel-1-thumb.jpg`, videoUrl: '' },
      { id: 2, type: 'reel', category: 'Campus Life', thumbnail: `${mediaBase}/reels/reel-2-thumb.jpg`, videoUrl: '' }
    ]
  },

  theme: {
    primary: '#003366',
    accent: '#D4AF37',
    surface: '#ffffff'
  }
};
