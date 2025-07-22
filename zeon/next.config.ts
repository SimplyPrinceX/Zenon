import withPWA from 'next-pwa';

const nextConfig = {
  images: {
    domains: [
      'image.tmdb.org',
      'cdn.cosmos-api.com',
      'static.animecdn.io',
      'img.anili.st',
      'media.kitsu.io',
      's4.anilist.co',
      'shikimori.one',
      'cdn.myanimelist.net',
      'upload.wikimedia.org',
      'i.imgur.com',
      'i.redd.it',
      'images.unsplash.com',
      'pbs.twimg.com',
      'm.media-amazon.com',
      'assets.cosmos-api.com',
    ],
  },
};

export default withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
})(nextConfig);
