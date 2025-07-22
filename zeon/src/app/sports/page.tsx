"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY || "1070730380f5fee0d87cf0382670b255";
const TMDB_BASE = "https://api.themoviedb.org/3";

interface SportsMedia {
  id: number;
  title?: string;
  name?: string;
  poster_path?: string;
  backdrop_path?: string;
  overview?: string;
  vote_average?: number;
}

export default function SportsPage() {
  const [sports, setSports] = useState<SportsMedia[]>([]);
  const [banner, setBanner] = useState<SportsMedia | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSports() {
      setLoading(true);
      // Try to fetch sports movies (genre 28 is Action, 99 is Documentary, 18 is Drama, but Sport is 9805 in TMDB, but not always present)
      // We'll use a keyword search for 'sport' for best coverage
      const res = await fetch(`${TMDB_BASE}/search/movie?api_key=${TMDB_API_KEY}&query=sport`);
      const data = res.ok ? await res.json() : { results: [] };
      setSports(data.results?.slice(0, 12) || []);
      setBanner(data.results?.[0] || null);
      setLoading(false);
    }
    fetchSports();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6">
      {/* Banner */}
      <div className="relative rounded-3xl overflow-hidden mb-8 glass-card bg-gradient-to-r from-[#43cea2]/40 to-[#185a9d]/40">
        {banner && banner.backdrop_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/original${banner.backdrop_path}`}
            alt={banner.title || banner.name || "Sports Banner"}
            width={1200}
            height={400}
            className="w-full h-[220px] sm:h-[320px] object-cover object-center"
            priority
          />
        ) : (
          <div className="w-full h-[220px] sm:h-[320px] flex items-center justify-center text-white/40">Loading...</div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute left-0 bottom-0 p-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow-lg mb-2">Live Sports</h1>
          <p className="text-lg text-white/90 max-w-xl drop-shadow">Watch trending sports movies and documentaries. Streams powered by <span className='font-bold text-cyan-300'>TMDB</span>.</p>
        </div>
      </div>
      {/* Carousel */}
      <h2 className="text-2xl font-bold mb-3 text-white drop-shadow-lg">Trending Sports Movies</h2>
      <div className="flex gap-5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-cyan-400/30 scrollbar-track-transparent">
        {loading ? (
          <div className="text-white/60">Loading...</div>
        ) : sports.length === 0 ? (
          <div className="text-white/60">No sports movies found.</div>
        ) : (
          sports.map((item) => (
            <Link
              key={item.id}
              href={`/watch/${item.id}`}
              className="glass-card focus:outline-none focus:ring-2 focus:ring-cyan-400"
              tabIndex={0}
              aria-label={`Open ${item.title || item.name}`}
            >
              {item.poster_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
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
              {item.vote_average && (
                <div className="text-yellow-400 text-xs text-center pb-2">⭐ {item.vote_average.toFixed(1)}</div>
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
} 