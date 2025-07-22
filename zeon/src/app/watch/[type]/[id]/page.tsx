"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY || "1070730380f5fee0d87cf0382670b255";
const TMDB_BASE = "https://api.themoviedb.org/3";
const CONSUMET_BASE = "https://api.consumet.org/anime/enime";

interface Genre {
  id: number;
  name: string;
}
interface Content {
  id: number | string;
  title?: string;
  name?: string;
  release_date?: string;
  first_air_date?: string;
  vote_average?: number;
  genres?: Genre[];
  overview?: string;
  description?: string;
  poster_path?: string;
  number_of_seasons?: number;
  total_episodes?: number;
  anime_type?: string;
  tmdb_id?: number;
  [key: string]: unknown;
}

interface Source {
  id: string;
  name: string;
  urls: {
    movie: string;
    tv: string;
  };
}

export default function WatchPage() {
  const router = useRouter();
  const params = useParams();
  
  // Helper function to map popular anime MyAnimeList IDs to TMDB IDs
  const mapAnimeToTMDB = (malId: string): number | null => {
    const animeMap: { [key: string]: number } = {
      '16498': 1429,    // Attack on Titan
      '38000': 85937,   // Demon Slayer
      '31964': 65930,   // My Hero Academia
      '21': 37854,      // One Piece
      '20': 46298,      // Naruto
      '1': 1399,        // Dragon Ball Z
      '269': 1425,      // Bleach
      '11061': 46225,   // Hunter x Hunter
      '28851': 37165,   // Death Note
      '1530': 1399,     // Dragon Ball
      '1575': 1399,     // Dragon Ball GT
      '813': 1399,      // Dragon Ball Super
    };
    return animeMap[malId] || null;
  };
  
  // All hooks must be called before any early returns
  const [content, setContent] = useState<Content | null>(null);
  const [source, setSource] = useState('embedsu');
  const [sourcesList, setSourcesList] = useState<Source[]>([]);
  const [autoSwitch, setAutoSwitch] = useState(true);
  const [videoErrorCount, setVideoErrorCount] = useState(0);
  const [showWatchLater, setShowWatchLater] = useState(false);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuPos, setContextMenuPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [seasons, setSeasons] = useState<number[]>([]);
  const [episodes, setEpisodes] = useState<number[]>([]);
  const [episodeList, setEpisodeList] = useState<any[]>([]);
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [selectedEpisode, setSelectedEpisode] = useState(1);
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [watchLater, setWatchLater] = useState<Content[]>([]);
  const [copied, setCopied] = useState<string | null>(null);
  const [similar, setSimilar] = useState<Content[]>([]);
  const [similarLoading, setSimilarLoading] = useState(false);

  // Safely extract type and id as strings
  const type = typeof params.type === 'string' ? params.type : Array.isArray(params.type) ? params.type[0] : '';
  const id = typeof params.id === 'string' ? params.id : Array.isArray(params.id) ? params.id[0] : '';
  
  // Debug logging
  console.log('Watch page params:', { type, id, params });

  // Fetch sources.mjs dynamically
  useEffect(() => {
    import('../../../../sources.mjs').then((mod) => {
      let sources = (mod.availableSources || []) as Source[];
      // Always put multiembed first if available
      const multiembedIdx = sources.findIndex(s => s.id === 'multiembed');
      if (multiembedIdx > -1) {
        const [multiembed] = sources.splice(multiembedIdx, 1);
        sources = [multiembed, ...sources];
      }
      setSourcesList(sources);
      // Set default source to multiembed if available
      if (sources.length > 0) {
        setSource(sources[0].id);
      }
    });
  }, []);

  // Fetch content details from TMDB or Cosmos API
  useEffect(() => {
    if (!id || !type) return;
    async function fetchContent() {
      setLoading(true);
      let contentData = null;
      
      try {
        console.log(`Fetching ${type} with ID: ${id}`);
        if (type === 'movie') {
          const res = await fetch(`${TMDB_BASE}/movie/${id}?api_key=${TMDB_API_KEY}&append_to_response=credits,similar`);
          if (res.ok) {
            contentData = await res.json();
            console.log('Movie data:', contentData);
          } else {
            console.log('Movie fetch failed:', res.status, res.statusText);
          }
        } else if (type === 'tv') {
          const res = await fetch(`${TMDB_BASE}/tv/${id}?api_key=${TMDB_API_KEY}&append_to_response=credits,similar`);
          if (res.ok) {
            contentData = await res.json();
            console.log('TV data:', contentData);
          } else {
            console.log('TV fetch failed:', res.status, res.statusText);
          }
        } else if (type === 'anime') {
          // Remove anime-specific logic. If an anime is loaded, treat as not found or fallback to movie/TV logic.
          setContent(null);
        }
        
        setContent(contentData);
        
        // Set seasons/episodes for TV and Anime
        if ((type === 'tv' || type === 'anime') && contentData && contentData.number_of_seasons) {
          setSeasons(Array.from({ length: contentData.number_of_seasons }, (_, i) => i + 1));
          setSelectedSeason(1);
        } else {
          setSeasons([]);
        }
      } catch (error) {
        console.error('Error fetching content:', error);
      }
      
      setLoading(false);
    }
    fetchContent();
  }, [id, type]);

  // Fetch episodes for selected season (TV and Anime)
  useEffect(() => {
    if (!type || !content || !selectedSeason) return;
    async function fetchEpisodes() {
      if (type === 'tv' && content && selectedSeason) {
        // TV shows - fetch from TMDB
        const res = await fetch(`${TMDB_BASE}/tv/${id}/season/${selectedSeason}?api_key=${TMDB_API_KEY}`);
        if (res.ok) {
          const data = await res.json();
          setEpisodeList(data.episodes || []);
          setSelectedEpisode(1);
        }
      } else if (type === 'anime' && content) {
        // Anime - handle based on anime type
        if (content.anime_type === 'Movie') {
          // Anime movies have 1 episode
          setEpisodes([1]);
          setEpisodeList([]);
          setSelectedEpisode(1);
        } else {
          // Anime TV series - use total episodes or default to 12
          const totalEpisodes = (content.total_episodes as number) || 12;
          setEpisodes(Array.from({ length: totalEpisodes }, (_, i) => i + 1));
          setEpisodeList([]);
          setSelectedEpisode(1);
        }
      } else {
        setEpisodes([]);
        setEpisodeList([]);
      }
    }
    fetchEpisodes();
  }, [type, content, selectedSeason, id]);

  // Set video embed URL
  useEffect(() => {
    if (!content || sourcesList.length === 0 || !type || !id) return;
    const src = sourcesList.find((s) => s.id === source) || sourcesList[0];
    let url = '';
    
    if (type === 'movie') {
      url = src.urls.movie.replace('{id}', id);
    } else if (type === 'tv') {
      url = src.urls.tv.replace('{id}', id).replace('{season}', String(selectedSeason)).replace('{episode}', String(selectedEpisode));
    } else if (type === 'anime') {
      // For anime, try to find TMDB equivalent or use anime-specific sources
      if (content.tmdb_id) {
        // If we have a TMDB ID, use it for streaming
        url = src.urls.tv.replace('{id}', content.tmdb_id.toString()).replace('{season}', String(selectedSeason)).replace('{episode}', String(selectedEpisode));
      } else {
        // Fallback: use MyAnimeList ID with anime-specific streaming sources
        // Try to find an anime-compatible source
        const animeSource = sourcesList.find(s => s.id === 'vidsrccc') || sourcesList[0];
        if (animeSource) {
          // Use a different approach for anime - try to map to TMDB anime
          const tmdbAnimeId = mapAnimeToTMDB(id);
          if (tmdbAnimeId) {
            url = animeSource.urls.tv.replace('{id}', tmdbAnimeId.toString()).replace('{season}', String(selectedSeason)).replace('{episode}', String(selectedEpisode));
          } else {
            // Final fallback: use the MyAnimeList ID directly (some sources might work)
            url = animeSource.urls.tv.replace('{id}', id).replace('{season}', String(selectedSeason)).replace('{episode}', String(selectedEpisode));
          }
        }
      }
    }
    setVideoUrl(url);
    setVideoErrorCount(0); // Reset error count on source change
  }, [content, type, source, sourcesList, selectedSeason, selectedEpisode, id]);

  // Fetch similar content
  useEffect(() => {
    if (!content || !type || !id) return;
    async function fetchSimilar() {
      setSimilarLoading(true);
      let results: Content[] = [];
      if (type === 'movie') {
        const res = await fetch(`${TMDB_BASE}/movie/${id}/similar?api_key=${TMDB_API_KEY}`);
        if (res.ok) {
          const data = await res.json();
          results = data.results || [];
        }
      } else if (type === 'tv') {
        const res = await fetch(`${TMDB_BASE}/tv/${id}/similar?api_key=${TMDB_API_KEY}`);
        if (res.ok) {
          const data = await res.json();
          results = data.results || [];
        }
      } else if (type === 'anime') {
        // Consumet Enime API - try to get recommendations or search
        try {
          if (content && content.title) {
            console.log('Fetching anime recommendations from Enime...');
            const res = await fetch(`${CONSUMET_BASE}/search?query=${encodeURIComponent(content.title)}`);
            if (res.ok) {
              const data = await res.json();
              console.log('Enime recommendations received:', data.results?.length || 0, 'items');
              // Transform Consumet search results
              results = (data.results || []).map((anime: { id: string; title: string; image: string; description?: string; releaseDate?: string; rating?: number }) => ({
                id: anime.id,
                title: anime.title,
                name: anime.title,
                description: anime.description,
                overview: anime.description,
                poster_path: anime.image,
                release_date: anime.releaseDate,
                vote_average: anime.rating,
              }));
            }
          }
        } catch (error) {
          console.error('Error fetching anime recommendations:', error);
        }
      }
      setSimilar(results.slice(0, 12));
      setSimilarLoading(false);
    }
    fetchSimilar();
  }, [type, id, content]);

  // Watch Later: load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('watchLater');
    if (stored) setWatchLater(JSON.parse(stored));
  }, []);

  // Watch Later: save to localStorage
  useEffect(() => {
    localStorage.setItem('watchLater', JSON.stringify(watchLater));
  }, [watchLater]);

  // Add a fallback mechanism to try different content types if the current one fails
  useEffect(() => {
    if (!content && !loading && type && id) {
      console.log(`Content not found for ${type}/${id}, trying fallback...`);
      // Try alternative content types if the current one failed
      const fallbackTypes = type === 'tv' ? ['movie'] : type === 'movie' ? ['tv'] : [];
      
      const tryFallback = async () => {
        for (const fallbackType of fallbackTypes) {
          try {
            console.log(`Trying fallback to ${fallbackType}...`);
            const res = await fetch(`${TMDB_BASE}/${fallbackType}/${id}?api_key=${TMDB_API_KEY}&append_to_response=credits,similar`);
            if (res.ok) {
              const fallbackData = await res.json();
              console.log(`Fallback ${fallbackType} data found:`, fallbackData);
              setContent(fallbackData);
              // Update the URL to reflect the correct type
              window.history.replaceState(null, '', `/watch/${fallbackType}/${id}`);
              break;
            }
          } catch (error) {
            console.log(`Fallback ${fallbackType} failed:`, error);
          }
        }
      };
      
      tryFallback();
    }
  }, [content, loading, type, id]);

  // If type or id is missing, show an error or redirect
  if (!type || !id) {
    return <div className="p-8 text-center text-lg text-red-500">Invalid URL: missing type or id.</div>;
  }

  // Watch Later helpers
  const isInWatchLater = () => watchLater.some((item) => item.id === id && item.type === type);
  const handleWatchLater = () => {
    if (!content) return;
    if (isInWatchLater()) {
      setWatchLater(watchLater.filter((item) => !(item.id === id && (typeof item.type === 'string' || typeof item.type === 'number') && item.type === type)));
    } else {
      setWatchLater([
        ...watchLater,
        {
          ...content,
          id: id,
          type: String(type),
        },
      ]);
    }
  };

  // Context menu handler
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowContextMenu(true);
    setContextMenuPos({ x: e.clientX, y: e.clientY });
  };
  const closeContextMenu = () => setShowContextMenu(false);

  // Context menu actions
  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 1200);
    closeContextMenu();
  };

  // UI polish: glassmorphic shadow, border, and hover for cards
  const glassCard =
    "min-w-[180px] max-w-[180px] rounded-2xl bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-black/20 shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition cursor-pointer";

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-16">
      {/* Glassmorphic Player Card */}
      <div className="relative rounded-3xl overflow-hidden mb-8 shadow-2xl border border-white/20 dark:border-black/20 backdrop-blur-2xl bg-white/10 dark:bg-black/20">
        {/* Video Embed */}
        <div className="aspect-video w-full bg-black/80 flex items-center justify-center" onContextMenu={handleContextMenu}>
          {videoUrl ? (
            <iframe
              src={videoUrl}
              allowFullScreen
              className="w-full h-full rounded-3xl border-none"
              style={{ minHeight: 320 }}
              onError={() => {
                if (autoSwitch && videoErrorCount < sourcesList.length - 1) {
                  // Try next source
                  const currentIdx = sourcesList.findIndex(s => s.id === source);
                  const nextIdx = (currentIdx + 1) % sourcesList.length;
                  setSource(sourcesList[nextIdx].id);
                  setVideoErrorCount(videoErrorCount + 1);
                }
              }}
            />
          ) : (
            <span className="text-white/60">Player loading...</span>
          )}
        </div>
      </div>
      {/* Content Details Card (moved below player) */}
      <div className="rounded-3xl glass-card mb-8 p-6">
        {loading ? (
          <div className="text-white/70">Loading...</div>
        ) : content ? (
          <>
            <h1 className="text-3xl font-extrabold text-white drop-shadow-lg mb-2">{content.title || content.name}</h1>
            <div className="flex flex-wrap gap-4 items-center mb-2">
              {content.release_date && <span className="text-white/80 font-semibold">{(content.release_date || content.first_air_date || '').slice(0, 4)}</span>}
              {content.vote_average && <span className="text-yellow-400 font-bold">⭐ {content.vote_average.toFixed(1)}</span>}
              {content.genres && content.genres.map((g: Genre) => (
                <span key={g.id} className="px-2 py-1 rounded-full bg-white/20 text-white/80 text-xs font-medium">{g.name}</span>
              ))}
            </div>
            <p className="text-lg text-white/90 max-w-xl drop-shadow mb-2">{content.overview || content.description}</p>
            {/* Cast Info */}
            {(() => {
              const credits = content.credits as any;
              if (credits && Array.isArray(credits.cast) && credits.cast.length > 0) {
                return (
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-white mb-3">Cast</h3>
                    <Swiper
                      modules={[Navigation]}
                      navigation
                      spaceBetween={16}
                      slidesPerView={2}
                      breakpoints={{
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 5 },
                        1024: { slidesPerView: 7 },
                        1280: { slidesPerView: 8 },
                      }}
                      className="pb-8"
                    >
                      {credits.cast.slice(0, 15).map((actor: any) => (
                        <SwiperSlide key={actor.cast_id || actor.credit_id}>
                          <div className="flex flex-col items-center min-w-[96px] max-w-[96px]">
                            <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-700 mb-2">
                              {actor.profile_path ? (
                                <Image
                                  src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                                  alt={actor.name}
                                  width={80}
                                  height={80}
                                  className="object-cover w-full h-full"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-white/40 text-2xl">?</div>
                              )}
                            </div>
                            <div className="text-white text-xs font-semibold text-center truncate w-full">{actor.name}</div>
                            <div className="text-gray-400 text-xs text-center truncate w-full">{actor.character}</div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                );
              }
              return null;
            })()}
          </>
        ) : (
          <div className="text-white/70">Not found.</div>
        )}
      </div>
      {/* Controls: Source, Season/Episode, Watch Later, etc. */}
      <div className="flex flex-wrap gap-4 mb-8 items-center">
        {/* Source selector as pill buttons (Nova style, multi-line) */}
        <div className="flex flex-wrap gap-2 w-full mb-2">
          {sourcesList.map((s) => (
            <button
              key={s.id}
              className={`px-4 py-2 rounded-full font-semibold transition border text-sm min-w-[110px] text-center whitespace-nowrap
                ${source === s.id ? 'bg-purple-600 text-white border-purple-400 shadow' : 'bg-[#232329] text-white border-[#232329] hover:bg-cyan-900'}`}
              onClick={() => setSource(s.id)}
            >
              {s.name}
            </button>
          ))}
        </div>
        {/* Killswitch for auto source switching */}
        <label className="flex items-center gap-2 text-white font-semibold cursor-pointer">
          <input
            type="checkbox"
            checked={autoSwitch}
            onChange={() => setAutoSwitch(v => !v)}
            className="accent-cyan-500 w-4 h-4"
          />
          Auto Switch Source
        </label>
        {/* Season/Episode selector for TV (Nova style) */}
        {type === 'tv' && seasons.length > 0 && content && (
          <div className="flex flex-col gap-2 w-full">
            {/* Season selector */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-cyan-400/30 scrollbar-track-transparent">
              {seasons.map((s) => (
                <button
                  key={s}
                  className={`px-4 py-2 rounded-lg font-semibold transition border ${selectedSeason === s ? 'bg-cyan-700 text-white border-cyan-400' : 'bg-[#232329] text-white border-[#232329] hover:bg-cyan-900'}`}
                  onClick={() => setSelectedSeason(s)}
                >
                  Season {s}
                </button>
              ))}
            </div>
            {/* Episodes grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-2">
              {episodeList.length > 0
                ? episodeList.map((ep: any, idx: number) => (
                    <button
                      key={ep.id || idx}
                      className={`flex flex-col items-start rounded-xl border transition p-0 overflow-hidden shadow-md ${selectedEpisode === ep.episode_number ? 'border-purple-500 ring-2 ring-purple-400' : 'border-[#232329] hover:ring-2 hover:ring-cyan-400'}`}
                      onClick={() => setSelectedEpisode(ep.episode_number)}
                      style={{ background: '#232329' }}
                    >
                      <div className="relative w-full aspect-video bg-gray-700">
                        {ep.still_path ? (
                          <Image
                            src={`https://image.tmdb.org/t/p/w500${ep.still_path}`}
                            alt={ep.name || `Episode ${ep.episode_number}`}
                            fill
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-white/40 text-lg">No Image</div>
                        )}
                        <span className="absolute top-2 left-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">Episode {ep.episode_number}</span>
                      </div>
                      <div className="p-3 w-full flex-1 flex flex-col items-start">
                        <div className="text-base text-white font-bold mb-1 truncate w-full">{ep.name}</div>
                        <div className="text-xs text-gray-300 line-clamp-2 w-full">{ep.overview}</div>
                      </div>
                    </button>
                  ))
                : episodes.map((e) => (
                    <button
                      key={e}
                      className={`flex flex-col items-start rounded-xl border transition p-0 overflow-hidden shadow-md ${selectedEpisode === e ? 'border-purple-500 ring-2 ring-purple-400' : 'border-[#232329] hover:ring-2 hover:ring-cyan-400'}`}
                      onClick={() => setSelectedEpisode(e)}
                      style={{ background: '#232329' }}
                    >
                      <div className="relative w-full aspect-video bg-gray-700">
                        <div className="w-full h-full flex items-center justify-center text-white/40 text-lg">No Image</div>
                        <span className="absolute top-2 left-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">Episode {e}</span>
                      </div>
                      <div className="p-3 w-full flex-1 flex flex-col items-start">
                        <div className="text-base text-white font-bold mb-1 truncate w-full">Episode {e}</div>
                      </div>
                    </button>
                  ))}
            </div>
          </div>
        )}
        {/* Watch Later button */}
        <button
          className={`glass-toggle px-4 py-2 rounded-lg border border-white/20 dark:border-black/20 backdrop-blur-md bg-white/10 dark:bg-black/20 text-white font-semibold ${isInWatchLater() ? 'bg-purple-600' : ''}`}
          onClick={handleWatchLater}
        >
          {isInWatchLater() ? 'Remove from Watch Later' : 'Add to Watch Later'}
        </button>
        <button
          className="glass-toggle px-4 py-2 rounded-lg border border-white/20 dark:border-black/20 backdrop-blur-md bg-white/10 dark:bg-black/20 text-white font-semibold"
          onClick={() => setShowWatchLater(true)}
        >
          Show Watch Later
        </button>
      </div>
      {/* Similar Content Carousel (Swiper) */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-3 text-white drop-shadow-lg">Similar Content</h2>
        {similarLoading ? (
          <div className="text-white/60 py-8">Loading...</div>
        ) : similar.length === 0 ? (
          <div className="text-white/60 py-8">No similar content found.</div>
        ) : (
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            className="pb-8"
          >
            {similar.map((item) => (
              <SwiperSlide key={`${String(item.id ?? '')}-${String((item as Content)?.media_type ?? type)}`}> 
                <div
                  className={glassCard}
                  onClick={() => {
                    const itemType = (item as any).media_type || (item as any).type || 'movie';
                    router.push(`/watch/${itemType}/${item.id}`);
                  }}
                  title={item.title || item.name}
                  style={{ cursor: 'pointer' }}
                >
                  {item.poster_path ? (
                    <Image
                      src={`https://image.tmdb.org/t/p/w300${item.poster_path || ''}`}
                      alt={item.title || item.name || ''}
                      width={180}
                      height={260}
                      className="object-cover w-full h-[260px]"
                    />
                  ) : (
                    <div className="w-full h-[260px] flex items-center justify-center text-white/40 bg-black/30">No Image</div>
                  )}
                  <div className="p-2 text-white font-semibold text-center bg-gradient-to-t from-black/60 to-transparent">
                    {item.title || item.name}
                  </div>
                  <div className="text-yellow-400 text-xs text-center pb-2">⭐ {item.vote_average?.toFixed(1) || 'N/A'}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      {/* Watch Later Modal (glassmorphic) */}
      {showWatchLater && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
          <div className="rounded-2xl bg-white/20 dark:bg-black/30 backdrop-blur-xl p-8 shadow-2xl border border-white/20 max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4 text-white">Watch Later List</h2>
            {watchLater.length === 0 ? (
              <div className="text-white/70 text-center py-8">No items in your watch later list.</div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {watchLater.map((item) => {
                  const idStr = typeof item.id === 'string' || typeof item.id === 'number' ? String(item.id) : '';
                  const typeStr = typeof (item as Content).type === 'string' || typeof (item as Content).type === 'number' ? String((item as Content).type) : '';
                  return (
                    <div key={`${idStr}-${typeStr}`} className={glassCard + " p-2 flex flex-col items-center"}>
                      {item.poster_path && (
                        <Image src={`https://image.tmdb.org/t/p/w300${item.poster_path || ''}`} alt={item.title || ''} width={80} height={120} className="rounded mb-2" />
                      )}
                      <div className="text-white text-sm font-semibold text-center mb-1">{item.title}</div>
                      <div className="text-yellow-400 text-xs">⭐ {item.vote_average?.toFixed(1) || 'N/A'}</div>
                      <button
                        className="mt-2 px-2 py-1 rounded bg-purple-600 text-white text-xs"
                        onClick={() => {
                          setWatchLater(watchLater.filter((w) => !(w.id === item.id && (typeof (w as Content).type === 'string' || typeof (w as Content).type === 'number') && (w as Content).type === (item as Content).type)));
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
            <button onClick={() => setShowWatchLater(false)} className="mt-6 px-4 py-2 rounded-lg bg-purple-600 text-white w-full">Close</button>
          </div>
        </div>
      )}
      {/* Context Menu (glassmorphic) */}
      {showContextMenu && (
        <div
          style={{ left: contextMenuPos.x, top: contextMenuPos.y, position: 'fixed', zIndex: 100 }}
          className="rounded-xl bg-white/20 dark:bg-black/30 backdrop-blur-xl shadow-lg border border-white/20 p-4 min-w-[180px]"
          onMouseLeave={closeContextMenu}
        >
          <button
            className="block w-full text-left text-white py-1 hover:bg-white/10 rounded"
            onClick={() => handleCopy(content?.title || content?.name || '', 'Title')}
          >
            Copy Title
          </button>
          <button
            className="block w-full text-left text-white py-1 hover:bg-white/10 rounded"
            onClick={() => handleCopy(id, 'TMDB ID')}
          >
            Copy TMDB ID
          </button>
          <button
            className="block w-full text-left text-white py-1 hover:bg-white/10 rounded"
            onClick={() => { handleWatchLater(); closeContextMenu(); }}
          >
            {isInWatchLater() ? 'Remove from Watch Later' : 'Add to Watch Later'}
          </button>
          {copied && <div className="text-xs text-green-300 mt-2">Copied {copied}!</div>}
        </div>
      )}
    </div>
  );
} 