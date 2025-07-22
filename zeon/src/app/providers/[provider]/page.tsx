"use client";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

const providers = [
  { name: "Apple TV", slug: "appletv", logo: "/providers/appletv.png", color: "bg-gradient-to-r from-[#a8edea] to-[#fed6e3]" },
  { name: "HBO Max", slug: "hbomax", logo: "/providers/hbomax.png", color: "bg-gradient-to-r from-[#a18cd1] to-[#fbc2eb]" },
  { name: "Disney+", slug: "disney", logo: "/providers/disney.png", color: "bg-gradient-to-r from-[#43cea2] to-[#185a9d]" },
  { name: "Peacock", slug: "peacock", logo: "/providers/peacock.png", color: "bg-gradient-to-r from-[#f7971e] to-[#ffd200]" },
  { name: "Prime Video", slug: "primevideo", logo: "/providers/primevideo.png", color: "bg-gradient-to-r from-[#1e3c72] to-[#2a5298]" },
];

const movies = [
  { title: "Dune: Part Two", image: "/trending/dune2.jpg", provider: "hbomax" },
  { title: "Godzilla x Kong", image: "/trending/godzillakong.jpg", provider: "hbomax" },
  { title: "Oppenheimer", image: "/trending/oppenheimer.jpg", provider: "peacock" },
  { title: "Barbie", image: "/trending/barbie.jpg", provider: "peacock" },
  { title: "John Wick 4", image: "/trending/johnwick4.jpg", provider: "primevideo" },
  { title: "Jawan", image: "/indian/jawan.jpg", provider: "appletv" },
  { title: "Pathaan", image: "/indian/pathaan.jpg", provider: "appletv" },
  { title: "RRR", image: "/indian/rrr.jpg", provider: "disney" },
  { title: "Pushpa", image: "/indian/pushpa.jpg", provider: "disney" },
  { title: "KGF Chapter 2", image: "/indian/kgf2.jpg", provider: "primevideo" },
];

export default function ProviderPage() {
  const params = useParams<{ provider: string }>();
  const provider = providers.find((p) => p.slug === params.provider);
  if (!provider) return notFound();
  const filtered = movies.filter((m) => m.provider === provider.slug);
  const trending = filtered[0];
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6">
      {/* Trending Banner */}
      {trending && (
        <div className={`relative rounded-3xl overflow-hidden mb-8 glass-card ${provider.color}`}>
          <Image src={trending.image} alt={trending.title} width={1200} height={400} className="w-full h-[220px] sm:h-[320px] object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute left-0 bottom-0 p-6 flex items-center gap-4">
            <Image src={provider.logo} alt={provider.name} width={48} height={48} className="rounded-full border border-white/30" />
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow-lg mb-1">{provider.name}</h1>
              <p className="text-lg text-white/90 max-w-xl drop-shadow">Trending: {trending.title}</p>
            </div>
          </div>
        </div>
      )}
      {/* Movie Grid */}
      <h2 className="text-2xl font-bold mb-4 text-white drop-shadow-lg">All Movies & Shows</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {filtered.map((movie) => (
          <div key={movie.title} className="glass-card">
            <Image src={movie.image} alt={movie.title} width={220} height={320} className="object-cover w-full h-[220px]" />
            <div className="p-2 text-white font-semibold text-center bg-gradient-to-t from-black/60 to-transparent">{movie.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 