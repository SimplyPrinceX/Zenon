"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import GlassCarousel from "../components/GlassCarousel";
import { motion } from "framer-motion";
import { IconBookmark } from "@tabler/icons-react";
import { getImageUrl, Movie, TV } from "../lib/getImageUrl";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { usePathname } from "next/navigation";

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY || "1070730380f5fee0d87cf0382670b255";
const TMDB_BASE = "https://api.themoviedb.org/3";

const providers = [
  { name: "Netflix", slug: "netflix", logo: "/providers/netflix.png" },
  { name: "Prime Video", slug: "primevideo", logo: "/providers/primevideo.png" },
  { name: "Disney+", slug: "disney", logo: "/providers/disney.png" },
  { name: "Apple TV+", slug: "appletv", logo: "/providers/appletv.png" },
  { name: "HBO Max", slug: "hbomax", logo: "/providers/hbomax.png" },
  { name: "Peacock", slug: "peacock", logo: "/providers/peacock.png" },
  { name: "Paramount+", slug: "paramount", logo: "/providers/paramount.png" },
  { name: "Zee5", slug: "zee5", logo: "/providers/zee5.png" },
  { name: "Sony LIV", slug: "sonyliv", logo: "/providers/sonyliv.png" },
  { name: "Crunchyroll", slug: "crunchyroll", logo: "/providers/crunchyroll.png" },
  { name: "Discovery+", slug: "discoveryplus", logo: "/providers/discovery+-01-01.png" },
];

// Card Spotlight effect (Aceternity UI inspired)
function GlassSpotlightCard({ item, isInWatchLater, onToggleWatchLater, children }: {
  item: Movie | TV;
  isInWatchLater: boolean;
  onToggleWatchLater: () => void;
  children: React.ReactNode;
}) {
  // Get title, description, and rating
  const title = (item as Movie).title || (item as TV).name || '';
  const description = (item as Movie).overview || (item as TV).overview || '';
  const rating = ('vote_average' in item && item.vote_average) ? item.vote_average : null;
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="relative group rounded-2xl overflow-hidden shadow-xl transition-all duration-200"
      style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(18px)", border: "1.5px solid rgba(255,255,255,0.18)" }}
    >
      {/* Watch Later Icon */}
      <button
        className="absolute top-3 right-3 z-30 bg-white/30 dark:bg-black/30 rounded-full p-1.5 shadow-md hover:bg-purple-500/60 transition-all"
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); onToggleWatchLater(); }}
        aria-label={isInWatchLater ? "Remove from Watch Later" : "Add to Watch Later"}
        tabIndex={0}
        type="button"
      >
        <IconBookmark size={22} stroke={2.2} className={isInWatchLater ? "text-purple-500 fill-purple-500" : "text-white/80"} />
      </button>
      {/* Poster */}
      {children}
      {/* Glassmorphic overlay on hover (full card) */}
      <motion.div
        variants={{
          rest: { opacity: 0, y: 40 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="absolute inset-0 z-20 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 to-black/10 backdrop-blur-md rounded-2xl pointer-events-none"
      >
        <div className="font-bold text-lg text-white mb-1 truncate" title={title}>{title}</div>
        <div className="text-white/80 text-xs mb-1 line-clamp-2">{description}</div>
        {rating && (
          <div className="flex items-center gap-1 text-yellow-400 text-sm font-semibold">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
            {rating.toFixed(1)}
    </div>
        )}
      </motion.div>
    </motion.div>
  );
}

function repeatArray<T>(arr: T[], minLength: number): T[] {
  if (arr.length === 0) return arr;
  const result: T[] = [];
  while (result.length < minLength) {
    result.push(...arr);
  }
  return result.slice(0, minLength);
}

// Utility to get type for a content item
function getContentType(item: Movie | TV): string {
  // Check if it's a TV show by looking for the 'name' property and ensuring it doesn't have a 'title'
  // TV shows from TMDB have 'name' but not 'title', movies have 'title' but not 'name'
  if ('name' in item && item.name && !('title' in item && item.title)) {
    console.log(`Item ${item.id} identified as TV:`, item.name);
    return 'tv';
  }
  
  // If it has a 'title' property, it's a movie
  if ('title' in item && item.title) {
    console.log(`Item ${item.id} identified as Movie:`, item.title);
    return 'movie';
  }
  
  // Fallback: if it has 'name' but no 'title', it's TV
  if ('name' in item && item.name) {
    console.log(`Item ${item.id} identified as TV (fallback):`, item.name);
    return 'tv';
  }
  
  // Default to movie
  const title = 'title' in item ? item.title : 'name' in item ? item.name : 'Unknown';
  console.log(`Item ${item.id} identified as Movie (default):`, title);
  return 'movie';
}

function Carousel({ title, items, isInWatchLater, setWatchLater, loop }: { title: string; items: (Movie | TV)[]; isInWatchLater: (item: Movie | TV) => boolean; setWatchLater: React.Dispatch<React.SetStateAction<(Movie | TV & { id: string | number })[]>>; loop: boolean }) {
  // Duplicate items if not enough for infinite loop
  const minSlides = 7;
  const displayItems = loop && items.length > 0 && items.length < minSlides ? repeatArray(items, minSlides) : items;
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-3 text-white drop-shadow-lg">{title}</h2>
      <GlassCarousel loop={loop}>
        {displayItems.map((item, idx) => (
          <GlassSpotlightCard
            key={item.id + '-' + idx}
            item={item}
            isInWatchLater={isInWatchLater(item)}
            onToggleWatchLater={() => {
              if (isInWatchLater(item)) {
                setWatchLater((prev) => prev.filter((w) => w.id !== item.id));
              } else {
                setWatchLater((prev) => [...prev, item]);
              }
            }}
          >
            <Link
              href={`/watch/${getContentType(item)}/${item.id}`}
              className="block focus:outline-none focus:ring-2 focus:ring-cyan-400 min-w-[180px] max-w-[180px] rounded-2xl overflow-hidden"
              tabIndex={0}
              aria-label={`Open ${(item as Movie).title || (item as TV).name}`}
            >
              <div className="relative w-full aspect-[2/3] bg-black/30">
                <Image
                  src={getImageUrl(item)}
                  alt={(item as Movie).title || (item as TV).name || ''}
                  fill
                  sizes="180px"
                  className="object-cover w-full h-full rounded-2xl group-hover:scale-105 transition-transform duration-200"
                  priority={false}
                />
          </div>
            </Link>
          </GlassSpotlightCard>
        ))}
      </GlassCarousel>
    </section>
  );
}

export default function Home() {
  const [trendingMovie, setTrendingMovie] = useState<Movie | null>(null);
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [trendingTV, setTrendingTV] = useState<TV[]>([]);
  const [trendingIndian, setTrendingIndian] = useState<Movie[]>([]);
  const [watchLater, setWatchLater] = useState<(Movie | TV & { id: string | number })[]>([]);
  const [bannerIndex, setBannerIndex] = useState(0);
  const bannerInterval = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (trendingMovies.length > 0) {
      // Only reset bannerIndex if out of bounds
      setBannerIndex((prev) => (prev >= Math.min(trendingMovies.length, 10) ? 0 : prev));
      setTrendingMovie(trendingMovies[bannerIndex] || trendingMovies[0]);
      if (bannerInterval.current) clearInterval(bannerInterval.current);
      bannerInterval.current = setInterval(() => {
        setBannerIndex((prev) => (prev + 1) % Math.min(trendingMovies.length, 10));
      }, 5000);
      return () => {
        if (bannerInterval.current) clearInterval(bannerInterval.current);
      };
    }
  }, [trendingMovies]);

  useEffect(() => {
    if (trendingMovies.length > 0) {
      setTrendingMovie(trendingMovies[bannerIndex]);
    }
  }, [bannerIndex, trendingMovies]);

  useEffect(() => {
    // Load Watch Later from localStorage
    const saved = localStorage.getItem("watchLater");
    if (saved) {
      try {
        setWatchLater(JSON.parse(saved));
      } catch {
        setWatchLater([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('watchLater', JSON.stringify(watchLater));
  }, [watchLater]);
  const isInWatchLater = (item: Movie | TV) => watchLater.some((w) => w.id === item.id);

  useEffect(() => {
    async function fetchData() {
      // Trending Movies
      const movieRes = await fetch(`${TMDB_BASE}/trending/movie/week?api_key=${TMDB_API_KEY}`);
      const movieData = movieRes.ok ? await movieRes.json() : { results: [] };
      setTrendingMovies(movieData.results?.slice(0, 20) || []);
      // Trending TV
      const tvRes = await fetch(`${TMDB_BASE}/trending/tv/week?api_key=${TMDB_API_KEY}`);
      const tvData = tvRes.ok ? await tvRes.json() : { results: [] };
      setTrendingTV(tvData.results?.slice(0, 20) || []);
      // Trending Indian Movies (TMDB API)
      try {
        // Use discover endpoint for Indian region and language
        const indianRes = await fetch(`${TMDB_BASE}/discover/movie?api_key=${TMDB_API_KEY}&region=IN&with_original_language=hi&sort_by=popularity.desc&page=1`);
        const indianData = indianRes.ok ? await indianRes.json() : { results: [] };
        setTrendingIndian(indianData.results?.slice(0, 20) || []);
      } catch {
        setTrendingIndian([]);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      const playAudio = () => {
        if (audioRef.current) {
          audioRef.current.volume = 0.5;
          audioRef.current.play().catch(() => {});
        }
      };
      playAudio();
      const tryPlay = () => playAudio();
      window.addEventListener("click", tryPlay, { once: true });
      window.addEventListener("keydown", tryPlay, { once: true });
      return () => {
        window.removeEventListener("click", tryPlay);
        window.removeEventListener("keydown", tryPlay);
      };
    }
  }, [pathname]);

  // Remove display arrays for all carousels
  // Use original arrays for each Carousel

  // Trending Banner navigation handlers
  const maxBanners = Math.min(trendingMovies.length, 10);
  const handlePrevBanner = () => {
    if (maxBanners > 1) {
      setBannerIndex((prev) => (prev - 1 + maxBanners) % maxBanners);
    }
  };
  const handleNextBanner = () => {
    if (maxBanners > 1) {
      setBannerIndex((prev) => (prev + 1) % maxBanners);
    }
  };

  return (
    <main className="min-h-screen w-full flex flex-col gap-12">
      <audio ref={audioRef} src="/startup.mp3" preload="auto" />
      {/* Trending Banner (Hero) */}
      <div className="relative w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px] overflow-hidden shadow-2xl border-b border-white/20 dark:border-black/20">
        {trendingMovie && (
          <>
            <Image
              src={`https://image.tmdb.org/t/p/original${trendingMovie.backdrop_path || trendingMovie.poster_path}`}
              alt={trendingMovie.title}
              fill
              sizes="100vw"
              className="w-full h-full object-cover object-center"
              priority
            />
            {/* Netflix-style dark gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            {/* Content */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-center pl-8 pr-4 sm:pl-16 sm:pr-8 gap-4 z-10 max-w-2xl pt-16">
              {/* Optional: Subtitle or logo image here */}
              {/* <img src="/logo/squidgame.png" alt="Squid Game" className="h-12 mb-2" /> */}
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg mb-2 leading-tight">
                {trendingMovie.title}
              </h1>
              <h2 className="text-xl font-semibold text-white/90 mb-1">Watch Now</h2>
              <p className="text-base sm:text-lg text-white/90 max-w-xl drop-shadow mb-4 line-clamp-3">
                {trendingMovie.overview}
              </p>
              <div className="flex gap-3 mt-2">
                <Link href={`/watch/movie/${trendingMovie.id}`}>
                  <button className="flex items-center gap-2 px-7 py-2.5 rounded bg-white text-black font-bold text-lg shadow-lg hover:bg-neutral-200 transition-all">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    Play
                  </button>
                </Link>
                <button className="flex items-center gap-2 px-7 py-2.5 rounded bg-white/30 text-white font-bold text-lg shadow-lg hover:bg-white/50 transition-all">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                  More Info
                </button>
              </div>
              {/* Banner navigation dots */}
              <div className="flex gap-2 mt-4">
                {trendingMovies.slice(0, 10).map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-2.5 h-2.5 rounded-full border-2 border-white/60 transition-all ${bannerIndex === idx ? 'bg-white/90' : 'bg-white/30'}`}
                    onClick={() => setBannerIndex(idx)}
                    aria-label={`Show banner ${idx + 1}`}
                  />
                ))}
              </div>
        </div>
            {/* Age badge (optional) */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs font-bold px-3 py-1 rounded-lg z-20">A 18+</div>
            {/* Left/Right Navigation Arrows */}
            {trendingMovies.length > 1 && (
              <>
                <button
                  onClick={handlePrevBanner}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 rounded-full p-2 shadow-lg hover:bg-black/70 transition-all border border-white/20"
                  aria-label="Previous banner"
                  style={{ zIndex: 2 }}
                >
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button
                  onClick={handleNextBanner}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 rounded-full p-2 shadow-lg hover:bg-black/70 transition-all border border-white/20"
                  aria-label="Next banner"
                  style={{ zIndex: 2 }}
                >
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </>
            )}
          </>
        )}
      </div>
      {/* Providers Row */}
      <div className="flex gap-4 overflow-x-auto py-4 px-1 scrollbar-thin scrollbar-thumb-cyan-400/30 scrollbar-track-transparent">
        {providers.map((p) => (
          <Link key={p.slug} href={`/providers/${p.slug}`} className="min-w-[128px] min-h-[56px]">
            <LiquidButton variant="default" size="icon" className="!p-0 w-32 h-14 flex items-center justify-center">
              <Image src={p.logo} alt={p.name} width={40} height={40} className="rounded-full object-contain" />
            </LiquidButton>
          </Link>
        ))}
      </div>
      {/* Carousels */}
      <div className="mt-8 space-y-12">
        <Carousel title="Trending Movies" items={trendingMovies} isInWatchLater={isInWatchLater} setWatchLater={setWatchLater} loop={true} />
        <Carousel title="Trending TV" items={trendingTV} isInWatchLater={isInWatchLater} setWatchLater={setWatchLater} loop={true} />
        <Carousel title="Indian Cinema" items={trendingIndian} isInWatchLater={isInWatchLater} setWatchLater={setWatchLater} loop={true} />
    </div>
    </main>
  );
}
