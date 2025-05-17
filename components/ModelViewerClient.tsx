"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ModelViewerClient() {
  const mvRef = useRef<HTMLElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    (async () => {
      await import("@google/model-viewer");
      await customElements.whenDefined("model-viewer");

      if (!mounted) return;

      mvRef.current?.addEventListener(
        "poster-dismissed",
        () => mounted && setReady(true),
        { once: true }
      );
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <Image
        src="/models/poster.webp"
        alt="Alvi"
        fill
        sizes="50vw"
        className={`object-contain transition-opacity duration-300 ${
          ready ? "opacity-0" : "opacity-100"
        }`}
        priority
      />

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
        style={{ width: "100%", height: "100%", background: "transparent" }}
      />
    </div>
  );
}
