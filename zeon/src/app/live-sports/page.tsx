"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

const API_BASE = "https://streami.su/api";

const SPORT_ORDER = [
  "football", "basketball", "american-football", "hockey", "baseball", "motor-sports", "fight", "tennis", "rugby", "golf"
];

function formatDate(ms: number) {
  if (!ms) return "";
  const d = new Date(ms);
  return d.toLocaleString([], { dateStyle: "medium", timeStyle: "short" });
}

export default function LiveSportsPage() {
  const router = useRouter();
  const [sports, setSports] = useState<any[]>([]);
  const [matchesBySport, setMatchesBySport] = useState<Record<string, any[]>>({});
  const [popularLive, setPopularLive] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Fetch all sports
  useEffect(() => {
    fetch(`${API_BASE}/sports`)
      .then(res => res.json())
      .then(data => setSports(data || []));
  }, []);

  // Fetch matches for all sports in SPORT_ORDER and popular live
  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch(`${API_BASE}/matches/live/popular`).then(res => res.json()),
      ...SPORT_ORDER.map(sport =>
        fetch(`${API_BASE}/matches/${sport}/popular`)
          .then(res => res.json())
          .then(data => [sport, data || []])
      )
    ]).then(([popularLiveData, ...results]) => {
      setPopularLive(popularLiveData || []);
      const bySport: Record<string, any[]> = {};
      results.forEach(([sport, matches]) => {
        bySport[sport] = matches;
      });
      setMatchesBySport(bySport);
      setLoading(false);
    });
  }, []);

  // Card for a match
  const MatchCard = ({ match }: { match: any }) => {
    const homeBadge = match.teams?.home?.badge;
    const awayBadge = match.teams?.away?.badge;
    const homeName = match.teams?.home?.name;
    const awayName = match.teams?.away?.name;
    const poster = match.poster;
    let posterUrl = "";
    if (poster) {
      posterUrl = `${API_BASE}/images/proxy/${poster}.webp`;
    } else if (homeBadge && awayBadge) {
      posterUrl = `${API_BASE}/images/poster/${homeBadge}/${awayBadge}.webp`;
    }
    // Fallback image handler
    const [imgError, setImgError] = useState(false);
    return (
      <div
        className="bg-[#18181b] rounded-xl shadow-md overflow-hidden cursor-pointer border border-[#232329] relative min-w-[220px] max-w-[260px] flex flex-col hover:shadow-xl transition"
        onClick={() => router.push(`/live-sports/${match.category}/${match.id}`)}
      >
        {posterUrl && !imgError ? (
          <img src={posterUrl} alt={match.title} className="w-full h-28 object-cover rounded-t-xl" loading="lazy" onError={() => setImgError(true)} />
        ) : (
          <div className="w-full h-28 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white/40 text-2xl font-bold">Streamed</div>
        )}
        <div className="absolute top-2 left-2">
          {match.status && match.status.toLowerCase() === "live" && (
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">LIVE</span>
          )}
        </div>
        <div className="p-3 flex-1 flex flex-col justify-between">
          <div className="flex items-center justify-center gap-2 mb-1">
            {homeBadge && <img src={`${API_BASE}/images/badge/${homeBadge}.webp`} alt={homeName} className="w-8 h-8 object-contain rounded-full bg-white" loading="lazy" onError={e => (e.currentTarget.style.display = 'none')} />}
            <span className="text-white font-semibold text-sm">{homeName}</span>
            <span className="text-white font-bold mx-1">vs</span>
            <span className="text-white font-semibold text-sm">{awayName}</span>
            {awayBadge && <img src={`${API_BASE}/images/badge/${awayBadge}.webp`} alt={awayName} className="w-8 h-8 object-contain rounded-full bg-white" loading="lazy" onError={e => (e.currentTarget.style.display = 'none')} />}
          </div>
          <div className="font-bold text-base text-white truncate mb-1" title={match.title}>{match.title}</div>
          <div className="text-gray-400 text-xs mb-1">{formatDate(match.date)}</div>
          <div className="text-gray-500 text-xs">{match.category}</div>
        </div>
      </div>
    );
  };

  // Carousel for a section
  const SectionCarousel = ({ title, matches, sectionId }: { title: string, matches: any[], sectionId: string }) => (
    <div className="mb-8" ref={el => { sectionRefs.current[sectionId] = el; }}>
      <h2 className="text-2xl font-bold mb-3 text-white drop-shadow-lg">{title}</h2>
      <div className="flex gap-5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-cyan-400/30 scrollbar-track-transparent">
        {matches.map((match) => <MatchCard key={match.id} match={match} />)}
      </div>
    </div>
  );

  // Sticky sports selector
  const scrollToSection = (sportId: string) => {
    const el = sectionRefs.current[sportId];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-16">
      {/* Sticky Sports Selector */}
      <div className="sticky top-0 z-40 bg-[#18181b] py-3 mb-6 flex gap-3 overflow-x-auto scrollbar-thin scrollbar-thumb-cyan-400/30 scrollbar-track-transparent border-b border-[#232329]">
        {SPORT_ORDER.map((sportId) => {
          const sport = sports.find((s) => s.id === sportId);
          if (!sport) return null;
          return (
            <button
              key={sport.id}
              className="flex flex-col items-center px-4 py-2 rounded-lg bg-[#232329] text-white font-semibold hover:bg-cyan-900 transition min-w-[90px]"
              onClick={() => scrollToSection(sport.id)}
            >
              {/* Optionally add sport icon here */}
              <span>{sport.name}</span>
            </button>
          );
        })}
      </div>
      <h1 className="text-3xl font-extrabold text-white mb-8 drop-shadow-lg">Live Sports</h1>
      {loading ? (
        <div className="text-white text-lg">Loading...</div>
      ) : (
        <>
          {popularLive.length > 0 && <SectionCarousel title="Popular Live" matches={popularLive} sectionId="popular-live" />}
          {SPORT_ORDER.map((sportId) => {
            const sport = sports.find((s) => s.id === sportId);
            if (!sport || !matchesBySport[sportId] || matchesBySport[sportId].length === 0) return null;
            return <SectionCarousel key={sportId} title={`Popular ${sport.name}`} matches={matchesBySport[sportId]} sectionId={sportId} />;
          })}
        </>
      )}
    </div>
  );
} 