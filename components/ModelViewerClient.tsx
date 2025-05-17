"use client";

import "@google/model-viewer";

export default function ModelViewerClient() {
  return (
    <div className="relative w-full h-full">
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
        style={{ width: "100%", height: "100%", background: "transparent" }}
      />
    </div>
  );
}
