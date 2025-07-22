export interface Movie {
  id: number;
  title: string;
  poster_path?: string;
  backdrop_path?: string;
  overview?: string;
  vote_average?: number;
}
export interface TV {
  id: number;
  name: string;
  poster_path?: string;
  backdrop_path?: string;
  overview?: string;
  vote_average?: number;
}

export function getImageUrl(item: Movie | TV): string {
  if ('poster_path' in item && item.poster_path) {
    return `https://image.tmdb.org/t/p/w300${item.poster_path}`;
  }
  return '/no-image.svg';
} 