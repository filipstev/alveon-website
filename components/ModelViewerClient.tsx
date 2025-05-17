"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ModelViewerClient() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mvRef = useRef<any>(null); // <model-viewer>
  const imgRef = useRef<HTMLImageElement | null>(null); // poster <Image>

  useEffect(() => {
    let cleanup: () => void;

    (async () => {
      await import("@google/model-viewer");

      const handleLoad = () => {
        mvRef.current!.style.opacity = "1";

        requestAnimationFrame(() => {
          imgRef.current!.style.opacity = "0";
        });

        const removePoster = () => imgRef.current?.remove();
        imgRef.current!.addEventListener("transitionend", removePoster, {
          once: true,
        });
      };

      mvRef.current?.addEventListener("load", handleLoad, { once: true });
      cleanup = () => mvRef.current?.removeEventListener("load", handleLoad);
    })();

    return () => cleanup?.();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <Image
        ref={imgRef}
        src="/models/poster.webp"
        alt="Alvi poster"
        fill
        priority
        sizes="(max-width: 768px) 220px, 400px"
        className="absolute inset-0 w-full h-full object-contain
                   transition-opacity duration-300"
      />

      {/* @ts-ignore */}
      <model-viewer
        ref={mvRef}
        src="/models/alvi.glb"
        alt="Alvi"
        camera-controls
        disable-zoom
        disable-pan
        auto-rotate
        loading="eager"
        camera-orbit="90deg 75deg 2.5m"
        reveal="auto"
        poster="/models/poster.webp"
        className="absolute inset-0 w-full h-full"
        style={{ background: "transparent", opacity: 0 }}
      />
    </div>
  );
}
