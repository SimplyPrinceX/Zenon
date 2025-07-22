import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IconX, IconTrash } from "@tabler/icons-react";
import Link from "next/link";
import { getImageUrl, Movie, TV } from "../lib/getImageUrl";
import GlassCarousel from "./GlassCarousel";

interface WatchLaterModalProps {
  open: boolean;
  onClose: () => void;
}

const WatchLaterModal: React.FC<WatchLaterModalProps> = ({ open, onClose }) => {
  const [items, setItems] = useState<(Movie | TV)[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      const saved = localStorage.getItem("watchLater");
      if (saved) {
        try {
          setItems(JSON.parse(saved));
        } catch {
          setItems([]);
        }
      } else {
        setItems([]);
      }
    }
  }, [open]);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClick);
      return () => document.removeEventListener("mousedown", handleClick);
    }
  }, [open, onClose]);

  // Remove item
  const removeItem = (id: string | number) => {
    const filtered = items.filter((item) => item.id !== id);
    setItems(filtered);
    localStorage.setItem("watchLater", JSON.stringify(filtered));
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="glass-modal max-w-2xl w-full rounded-2xl shadow-2xl p-6 sm:p-8 relative border border-white/20 dark:border-black/30 bg-white/30 dark:bg-black/40 backdrop-blur-xl flex flex-col items-center justify-center mx-2"
      >
        <button
          className="absolute top-3 right-3 p-2 rounded-full bg-white/30 dark:bg-black/30 hover:bg-red-400/60 transition"
          onClick={onClose}
          aria-label="Close"
        >
          <IconX size={22} />
        </button>
        <h2 className="text-xl font-bold mb-6 text-center">Watch Later</h2>
        {items.length === 0 ? (
          <div className="glass-card p-6 text-center text-lg text-gray-400">No items saved yet.</div>
        ) : (
          <div className="w-full">
            <GlassCarousel className="w-full">
              {items.map((item) => (
                <div key={item.id} className="flex flex-col items-center min-w-[220px] max-w-[220px]">
                  <Link href={`/watch/${item.id}`} className="block min-w-[220px] max-w-[220px] aspect-[2/3] rounded-2xl overflow-hidden mb-2">
                    <div className="relative w-full h-full aspect-[2/3]">
                      <Image
                        src={getImageUrl(item)}
                        alt={(item as Movie).title || (item as TV).name || ''}
                        fill
                        sizes="220px"
                        className="object-cover w-full h-full rounded-2xl"
                      />
                    </div>
                  </Link>
                  <div className="font-semibold text-base truncate text-center w-full mb-1">
                    {(item as Movie).title || (item as TV).name}
                  </div>
                  <button
                    className="p-2 rounded-full bg-white/20 dark:bg-black/20 hover:bg-red-500/60 transition"
                    onClick={() => removeItem(item.id)}
                    aria-label="Remove"
                  >
                    <IconTrash size={18} />
                  </button>
                </div>
              ))}
            </GlassCarousel>
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchLaterModal; 