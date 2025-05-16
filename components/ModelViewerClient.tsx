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
        poster="/models/poster.webp"
        interaction-prompt="none"
        onload={(event: any) => {
          console.log("Model load event fired", event);
          (window as any).modelLoaded = true;
          console.log(
            "Model loaded, window.modelLoaded set to:",
            (window as any).modelLoaded
          );
        }}
        onError={(event: any) => {
          console.error("Model error event fired", event);
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
