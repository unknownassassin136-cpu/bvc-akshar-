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
    chairmanImage: 'https://placehold.co/400x400/003366/ffffff?text=Chairman',
    mdImage: 'https://placehold.co/400x400/003366/ffffff?text=MD',
    secretaryImage: 'https://media.licdn.com/dms/image/v2/C4E03AQFLSza9q2kS-A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1660268003803?e=1779926400&v=beta&t=EeBkLCghOmR8i18bNRoTJgv0yk8zYOwb_2nLrt-C98k'
  },
  
  media: {
    heroVideo: '',
    heroImage: 'https://placehold.co/1920x1080/001a33/ffffff?text=Hero+Background',
    
    categories: ['All', 'Cultural Events', 'Freshers Party', 'Seminars', 'Achievements', 'Campus Life', 'Leadership Moments'],
    
    gallery: [
      { id: 1, type: 'image', category: 'Campus Life', url: 'https://placehold.co/600x400/003366/ffffff?text=Campus+1', title: 'Campus View' },
      { id: 2, type: 'image', category: 'Seminars', url: 'https://placehold.co/600x400/D4AF37/ffffff?text=Seminar+1', title: 'Guest Lecture' },
      { id: 3, type: 'image', category: 'Cultural Events', url: 'https://placehold.co/800x600/001a4d/ffffff?text=Cultural+Fest', title: 'Annual Fest' },
      { id: 4, type: 'image', category: 'Achievements', url: 'https://placehold.co/600x800/003366/ffffff?text=Award+Ceremony', title: 'Award Ceremony' },
      { id: 5, type: 'image', category: 'Leadership Moments', url: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Leadership', title: 'Chairman Speech' }
    ],

    freshersParty: [
      { id: 1, url: 'https://placehold.co/600x800/ff0066/ffffff?text=Dance', size: 'large' },
      { id: 2, url: 'https://placehold.co/600x400/6600ff/ffffff?text=Music', size: 'small' },
      { id: 3, url: 'https://placehold.co/600x400/00ccff/ffffff?text=Vibe', size: 'small' },
      { id: 4, url: 'https://placehold.co/800x600/ff9900/ffffff?text=Crowd', size: 'medium' }
    ],

    reels: [
      { id: 1, type: 'reel', category: 'Cultural Events', thumbnail: 'https://placehold.co/400x700/000000/ffffff?text=Reel+1', videoUrl: '' },
      { id: 2, type: 'reel', category: 'Campus Life', thumbnail: 'https://placehold.co/400x700/000000/ffffff?text=Reel+2', videoUrl: '' }
    ]
  },

  theme: {
    primary: '#003366',
    accent: '#D4AF37',
    surface: '#ffffff'
  }
};
