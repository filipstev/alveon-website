"use client";

import { useEffect } from "react";

export default function ModelViewerClient() {
  useEffect(() => {
    // Dynamically import model-viewer only on client side
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
        environment-image="neutral"
        camera-orbit="90deg 75deg 2.5m"
        poster="/models/alvi-poster.png"
        interaction-prompt="none"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
        }}
      />
    </div>
  );
}
