"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ModelViewerClient() {
  const [isModelViewerLoaded, setIsModelViewerLoaded] = useState(false);
  useEffect(() => {
    let timer: NodeJS.Timeout;
    // Dynamically import model-viewer only on client side
    import("@google/model-viewer").then(() => {
      timer = setTimeout(() => {
        setIsModelViewerLoaded(true);
      }, 500);
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full">
      {!isModelViewerLoaded && (
        <div className="absolute inset-0">
          <Image
            src="/models/poster.webp"
            alt="Alvi"
            fill
            className="object-contain"
            priority
            fetchPriority="high"
          />
        </div>
      )}
      {/* @ts-ignore */}
      <model-viewer
        src="/models/alvi.glb"
        alt="Alvi"
        camera-controls
        auto-rotate
        loading="eager"
        environment-image="neutral"
        camera-orbit="90deg 75deg 2.5m"
        poster="/models/poster.webp"
        interaction-prompt="none"
        onload={() => {
          (window as any).modelLoaded = true;
        }}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
        }}
      />
    </div>
  );
}
