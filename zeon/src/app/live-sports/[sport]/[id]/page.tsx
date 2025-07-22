"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const API_BASE = "https://streami.su/api";

function formatDate(ms: number) {
  if (!ms) return "";
  const d = new Date(ms);
  return d.toLocaleString([], { dateStyle: "medium", timeStyle: "short" });
}

export default function MatchPage() {
  const params = useParams();
  const router = useRouter();
  const { sport, id } = params as { sport: string; id: string };
  const [match, setMatch] = useState<any | null>(null);
  const [streams, setStreams] = useState<any[]>([]);
  const [selectedStream, setSelectedStream] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [streamLoading, setStreamLoading] = useState(false);

  useEffect(() => {
    if (!sport || !id) return;
    setLoading(true);
    fetch(`${API_BASE}/matches/${sport}`)
      .then(res => res.json())
      .then((matches) => {
        const found = (matches || []).find((m: any) => m.id === id);
        setMatch(found || null);
        setLoading(false);
        if (found && found.sources && found.sources.length > 0) {
          // Fetch streams for the first source by default
          fetchStreams(found.sources[0].source, found.sources[0].id);
        }
      });
  }, [sport, id]);

  const fetchStreams = (source: string, sourceId: string) => {
    setStreamLoading(true);
    fetch(`${API_BASE}/stream/${source}/${sourceId}`)
      .then(res => res.json())
      .then((data) => {
        setStreams(data || []);
        setSelectedStream((data && data.length > 0) ? data[0] : null);
        setStreamLoading(false);
      });
  };

  if (loading) return <div className="p-8 text-white text-lg">Loading...</div>;
  if (!match) return <div className="p-8 text-red-500 text-lg">Match not found.</div>;

  const homeBadge = match.teams?.home?.badge;
  const awayBadge = match.teams?.away?.badge;
  const poster = match.poster;
  let posterUrl = "";
  if (poster) {
    posterUrl = `${API_BASE}/images/proxy/${poster}.webp`;
  } else if (homeBadge && awayBadge) {
    posterUrl = `${API_BASE}/images/poster/${homeBadge}/${awayBadge}.webp`;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 mt-16">
      <button onClick={() => router.back()} className="mb-6 text-cyan-400 hover:underline">← Back to Live Sports</button>
      <div className="bg-[#18181b] rounded-2xl shadow-lg border border-[#232329] overflow-hidden mb-8">
        {posterUrl ? (
          <img src={posterUrl} alt={match.title} className="w-full h-48 object-cover" loading="lazy" />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white/40 text-2xl font-bold">Streamed</div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            {homeBadge && <img src={`${API_BASE}/images/badge/${homeBadge}.webp`} alt={match.teams?.home?.name} className="w-12 h-12 object-contain rounded-full bg-white" loading="lazy" />}
            <span className="font-bold text-lg text-white">{match.title}</span>
            {awayBadge && <img src={`${API_BASE}/images/badge/${awayBadge}.webp`} alt={match.teams?.away?.name} className="w-12 h-12 object-contain rounded-full bg-white" loading="lazy" />}
          </div>
          <div className="text-gray-400 text-sm mb-2">{formatDate(match.date)}</div>
          <div className="text-gray-500 text-xs mb-4">{match.category}</div>
          {match.status && match.status.toLowerCase() === "live" && (
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">LIVE</span>
          )}
        </div>
      </div>
      <div className="bg-[#232329] rounded-2xl shadow-lg border border-[#232329] p-6 mb-8">
        <h2 className="text-xl font-bold text-white mb-4">Available Streams</h2>
        {streamLoading ? (
          <div className="text-white text-lg">Loading streams...</div>
        ) : streams.length === 0 ? (
          <div className="text-white/60">No streams available for this match.</div>
        ) : (
          <div className="flex flex-col gap-3">
            {streams.map((stream: any) => (
              <button
                key={stream.id}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg border border-cyan-400 text-white font-semibold transition ${selectedStream?.id === stream.id ? 'bg-cyan-900' : 'bg-[#18181b] hover:bg-cyan-800'}`}
                onClick={() => setSelectedStream(stream)}
              >
                <span className="text-cyan-400 font-bold">Stream #{stream.streamNo}</span>
                <span className="text-xs">{stream.language}</span>
                <span className="text-xs">{stream.hd ? 'HD' : 'SD'}</span>
                <span className="text-xs">Source: {stream.source}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      {selectedStream && (
        <div className="bg-black rounded-2xl shadow-lg border border-[#232329] p-4">
          <h3 className="text-lg font-bold text-white mb-2">Now Playing</h3>
          <iframe
            src={selectedStream.embedUrl}
            allowFullScreen
            className="w-full aspect-video rounded-xl border border-white/20 shadow-lg"
            style={{ minHeight: 320 }}
            title="Live Stream"
          />
        </div>
      )}
    </div>
  );
} 