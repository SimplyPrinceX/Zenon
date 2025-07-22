"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { getImageUrl, Movie } from "../../lib/getImageUrl";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { motion } from "framer-motion";
import { IconBookmark } from "@tabler/icons-react";

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY || "1070730380f5fee0d87cf0382670b255";
const TMDB_BASE = "https://api.themoviedb.org/3";

export default function IndianCinemaPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [watchLater, setWatchLater] = useState<Movie[]>([]);

  useEffect(() => {
    setLoading(true);
    fetch(`${TMDB_BASE}/discover/movie?api_key=${TMDB_API_KEY}&region=IN&with_original_language=hi&sort_by=popularity.desc&page=${page}`)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results || []);
        setLoading(false);
      });
  }, [page]);

  useEffect(() => {
    const saved = localStorage.getItem("watchLater");
    if (saved) {
      try {
        setWatchLater(JSON.parse(saved));
      } catch {
        setWatchLater([]);
      }
    }
    const handleStorage = (e: StorageEvent) => {
      if (e.key === "watchLater") {
        const updated = e.newValue ? JSON.parse(e.newValue) : [];
        setWatchLater(updated);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);
  useEffect(() => {
    localStorage.setItem("watchLater", JSON.stringify(watchLater));
  }, [watchLater]);
  const isInWatchLater = (item: Movie) => watchLater.some((w) => w.id === item.id);

  const goToPage = (p: number) => {
    router.push(`/indian-cinema?page=${p}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-extrabold text-white mb-8 drop-shadow-lg">Indian Cinema</h1>
      {loading ? (
        <div className="text-white text-lg">Loading...</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <motion.div
              key={movie.id}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="relative group rounded-2xl overflow-hidden shadow-xl transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(18px)", border: "1.5px solid rgba(255,255,255,0.18)" }}
            >
              {/* Watch Later Icon */}
              <button
                className="absolute top-3 right-3 z-30 bg-white/30 dark:bg-black/30 rounded-full p-1.5 shadow-md hover:bg-purple-500/60 transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (isInWatchLater(movie)) {
                    setWatchLater((prev) => prev.filter((w) => w.id !== movie.id));
                  } else {
                    setWatchLater((prev) => [...prev, movie]);
                  }
                }}
                aria-label={isInWatchLater(movie) ? "Remove from Watch Later" : "Add to Watch Later"}
                tabIndex={0}
                type="button"
              >
                <IconBookmark size={22} stroke={2.2} className={isInWatchLater(movie) ? "text-purple-500 fill-purple-500" : "text-white/80"} />
              </button>
              {/* Poster */}
              <Link href={`/watch/movie/${movie.id}`} className="block focus:outline-none focus:ring-2 focus:ring-cyan-400 min-w-[180px] max-w-[180px] rounded-2xl overflow-hidden" tabIndex={0} aria-label={`Open ${movie.title}`}>
                <div className="relative w-full aspect-[2/3] bg-black/30">
                  <Image
                    src={getImageUrl(movie)}
                    alt={movie.title || ''}
                    fill
                    sizes="200px"
                    className="object-cover w-full h-full rounded-2xl group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
              </Link>
              {/* Glassmorphic overlay on hover (full card) */}
              <motion.div
                variants={{ rest: { opacity: 0, y: 40 }, hover: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute inset-0 z-20 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 to-black/10 backdrop-blur-md rounded-2xl pointer-events-none"
              >
                <div className="font-bold text-lg text-white mb-1 truncate" title={movie.title}>{movie.title}</div>
                <div className="text-white/80 text-xs mb-1 line-clamp-2">{movie.overview}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      )}
      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <LiquidButton
          variant="default"
          size="icon"
          className="rounded-full"
          onClick={() => goToPage(page - 1)}
          disabled={page <= 1}
          aria-label="Previous page"
        >
          <span className="text-2xl">&#8592;</span>
        </LiquidButton>
        <span className="text-white font-bold">Page {page}</span>
        <LiquidButton
          variant="default"
          size="icon"
          className="rounded-full"
          onClick={() => goToPage(page + 1)}
          aria-label="Next page"
        >
          <span className="text-2xl">&#8594;</span>
        </LiquidButton>
      </div>
    </div>
  );
} 