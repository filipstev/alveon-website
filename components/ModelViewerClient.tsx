"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ModelViewerClient() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    (async () => {
      await import("@google/model-viewer");
      await customElements.whenDefined("model-viewer");
      containerRef.current?.classList.add("is-mv-ready"); // flip the switch
    })();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {/* Poster – visible until .is-mv-ready appears */}
      <Image
        src="/models/poster.webp"
        alt="Alvi poster"
        fill
        priority
        className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300
                   [.is-mv-ready_&]:opacity-0" /* fades out */
        style={{ background: "transparent" }}
      />

      {/* 3-D model – hidden until .is-mv-ready appears */}
      {/* @ts-ignore */}
      <model-viewer
        src="/models/alvi.glb"
        alt="Alvi"
        camera-controls
        auto-rotate
        loading="eager"
        camera-orbit="90deg 75deg 2.5m"
        reveal="auto"
        poster="/models/poster.webp"
        className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300
                   [.is-mv-ready_&]:opacity-100" /* fades in */
        style={{ background: "transparent" }}
      />
    </div>
  );
}
