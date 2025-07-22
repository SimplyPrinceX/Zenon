"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { IconBookmark, IconSearch } from "@tabler/icons-react";
import WatchLaterModal from "./WatchLaterModal";

type TMDBResult = {
  id: string | number;
  media_type: string;
  title?: string;
  name?: string;
  poster_path?: string;
};

function ThemeSwitcher() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    }
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    }
  };
  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="ml-4 p-2 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-black/20 shadow hover:scale-105 transition"
    >
      {theme === "dark" ? (
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      ) : (
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
      )}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<TMDBResult[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (search.length > 1) {
      fetch(`https://api.themoviedb.org/3/search/multi?api_key=1070730380f5fee0d87cf0382670b255&query=${encodeURIComponent(search)}`)
        .then(res => res.json())
        .then(data => setResults(data.results?.slice(0, 8) || []));
      setShowDropdown(true);
    } else {
      setResults([]);
      setShowDropdown(false);
    }
  }, [search]);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-card bg-white/10 dark:bg-black/20 border-b border-white/10 dark:border-black/20 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center px-2 sm:px-4 py-1 md:py-2">
        {/* Logo flush left */}
        <Link href="/" className="flex items-center gap-3 select-none shrink-0">
          <Image src="/zeon-logo.svg" alt="ZEON Logo" width={90} height={28} priority />
        </Link>
        {/* Nav links immediately right of logo */}
        <div className="hidden md:flex items-center gap-6 text-base font-medium ml-2 shrink-0">
          <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
          <Link href="/movies" className="hover:text-cyan-400 transition">Movies</Link>
          <Link href="/tv" className="hover:text-cyan-400 transition">TV Shows</Link>
          <Link href="/indian-cinema" className="hover:text-cyan-400 transition">Indian Cinema</Link>
          <Link href="/live-sports" className="hover:text-cyan-400 transition">Live Sports</Link>
          <Link href="/providers" className="hover:text-cyan-400 transition">Providers</Link>
        </div>
        {/* Flexible spacer */}
        <div className="flex-1" />
        {/* Right: Search, Watch Later */}
        <div className="flex items-center gap-3 min-w-0">
          {/* Search */}
          <div className="relative w-32 sm:w-48 md:w-64" ref={searchRef}>
            <div className="flex items-center glass-card px-3 py-2 rounded-full border border-white/20 dark:border-black/20 shadow-md bg-white/30 dark:bg-black/30">
              <IconSearch size={20} className="text-gray-500 mr-2" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search..."
                className="bg-transparent outline-none border-none text-white placeholder:text-gray-400 w-full min-w-0"
                onFocus={() => setShowDropdown(results.length > 0)}
              />
            </div>
            {/* Dropdown */}
            {showDropdown && results.length > 0 && (
              <div className="absolute left-0 mt-2 w-64 max-w-[90vw] glass-card rounded-xl shadow-xl z-50 overflow-hidden">
                {results.map((item) => (
                  <Link
                    key={item.id + item.media_type}
                    href={`/watch/${item.media_type === 'tv' ? 'tv' : 'movie'}/${item.id}`}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 transition"
                    onClick={() => { setShowDropdown(false); setSearch(""); }}
                  >
                    <Image
                      src={item.poster_path ? `https://image.tmdb.org/t/p/w92${item.poster_path}` : "/no-image.svg"}
                      alt={item.title || item.name || ""}
                      width={36}
                      height={54}
                      className="rounded-md object-cover"
                    />
                    <div className="flex flex-col">
                      <span className="text-white font-semibold text-sm line-clamp-1">{item.title || item.name}</span>
                      <span className="text-xs text-gray-400">{item.media_type === 'tv' ? 'TV Show' : 'Movie'}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          {/* Watch Later */}
          <button
            aria-label="Watch Later"
            onClick={() => setOpen(true)}
            className="ml-2 p-2 rounded-full glass-card border border-white/20 dark:border-black/20 shadow transition"
          >
            <IconBookmark size={22} />
          </button>
        </div>
      </div>
      <WatchLaterModal open={open} onClose={() => setOpen(false)} />
    </nav>
  );
} 