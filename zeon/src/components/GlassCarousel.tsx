"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "../lib/utils";

interface GlassCarouselProps {
  children: React.ReactNode[];
  className?: string;
  loop?: boolean;
}

export default function GlassCarousel({ children, className, loop = true }: GlassCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop, align: "start", skipSnaps: false });
  // Remove duplication logic; just render children as-is
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  // Track Embla ready state
  const [emblaReady, setEmblaReady] = useState(false);
  useEffect(() => {
    if (emblaApi) {
      setEmblaReady(true);
      console.log('Embla API initialized:', emblaApi);
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    setTimeout(onSelect, 0);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    console.log('canScrollPrev:', canScrollPrev, 'canScrollNext:', canScrollNext);
  }, [canScrollPrev, canScrollNext]);

  return (
    <div className={cn("relative px-4", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex flex-row flex-nowrap gap-6 px-4 md:px-8">
          {children.map((child, i) => (
            <div
              key={i}
              className="min-w-[180px] max-w-[180px] flex-shrink-0 rounded-2xl overflow-visible"
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      {/* Navigation */}
      {emblaReady && emblaApi && (
        <>
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 dark:bg-black/30 backdrop-blur-lg rounded-full p-2 shadow-lg hover:bg-purple-500/30 transition disabled:opacity-30"
            onClick={() => {
              if (emblaApi) emblaApi.scrollPrev();
            }}
            disabled={loop ? false : !canScrollPrev}
            aria-label="Previous"
            type="button"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 dark:bg-black/30 backdrop-blur-lg rounded-full p-2 shadow-lg hover:bg-purple-500/30 transition disabled:opacity-30"
            onClick={() => {
              if (emblaApi) emblaApi.scrollNext();
            }}
            disabled={loop ? false : !canScrollNext}
            aria-label="Next"
            type="button"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </>
      )}
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {children.map((_, i) => (
          <button
            key={i}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              selectedIndex === i
                ? "bg-purple-500 shadow-lg"
                : "bg-white/30 dark:bg-black/30 backdrop-blur"
            )}
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
} 