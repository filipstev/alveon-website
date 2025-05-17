"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ModelViewerClient() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mvRef = useRef<any>(null);

  useEffect(() => {
    let cleanup: () => void;
    (async () => {
      await import("@google/model-viewer");

      // When the actual 3-D model is ready (textures + env),
      // fade the poster out in the next paint cycle.
      const handleLoad = () => {
        requestAnimationFrame(() => {
          containerRef.current?.classList.add("mv-loaded");
        });
      };

      mvRef.current?.addEventListener("load", handleLoad);
      cleanup = () => mvRef.current?.removeEventListener("load", handleLoad);
    })();

    return () => cleanup?.();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {/* Poster stays until mv-loaded class appears */}
      <Image
        src="/models/poster.webp"
        alt="Alvi poster"
        fill
        priority
        className="absolute inset-0 w-full h-full object-contain
                   transition-opacity duration-300
                   [.mv-loaded_&]:opacity-0"
      />

      {/* 3-D model stays invisible until fully loaded */}
      {/* @ts-ignore */}
      <model-viewer
        ref={mvRef}
        src="/models/alvi.glb"
        alt="Alvi"
        camera-controls
        auto-rotate
        loading="eager"
        camera-orbit="90deg 75deg 2.5m"
        reveal="auto"
        poster="/models/poster.webp"
        className="absolute inset-0 w-full h-full opacity-0
                   transition-opacity duration-300
                   [.mv-loaded_&]:opacity-100"
        style={{ background: "transparent" }}
      />
    </div>
  );
}
