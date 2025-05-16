"use client";

import "@google/model-viewer";
import { useState } from "react";

export default function ModelViewerClient() {
  const [showBgImage, setShowBgImage] = useState(true);
  return (
    <div className="relative w-full h-full">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(/models/poster.webp)`,
          display: showBgImage ? "block" : "none",
        }}
      />
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
        onload={() => {
          (window as any).modelLoaded = true;
          setShowBgImage(false);
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
