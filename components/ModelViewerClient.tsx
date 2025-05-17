"use client";

import { useEffect } from "react";

export default function ModelViewerClient() {
  useEffect(() => {
    import("@google/model-viewer");
  }, []);

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
