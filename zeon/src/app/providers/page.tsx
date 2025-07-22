import Image from "next/image";
import Link from "next/link";

const providers = [
  { name: "Apple TV", slug: "appletv", logo: "/providers/appletv.png", color: "bg-gradient-to-r from-[#a8edea] to-[#fed6e3]" },
  { name: "HBO Max", slug: "hbomax", logo: "/providers/hbomax.png", color: "bg-gradient-to-r from-[#a18cd1] to-[#fbc2eb]" },
  { name: "Disney+", slug: "disney", logo: "/providers/disney.png", color: "bg-gradient-to-r from-[#43cea2] to-[#185a9d]" },
  { name: "Peacock", slug: "peacock", logo: "/providers/peacock.png", color: "bg-gradient-to-r from-[#f7971e] to-[#ffd200]" },
  { name: "Prime Video", slug: "primevideo", logo: "/providers/primevideo.png", color: "bg-gradient-to-r from-[#1e3c72] to-[#2a5298]" },
];

export default function ProvidersPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold text-white mb-10 drop-shadow-lg">Browse by Provider</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {providers.map((p) => (
          <Link key={p.slug} href={`/providers/${p.slug}`} className={`rounded-3xl glass-card ${p.color} flex flex-col items-center p-8 hover:scale-105 transition`}>
            <Image src={p.logo} alt={p.name} width={64} height={64} className="rounded-full mb-4" />
            <span className="font-bold text-2xl text-white drop-shadow-lg mb-2">{p.name}</span>
            <span className="text-white/80 text-base">View all movies & shows from {p.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
} 