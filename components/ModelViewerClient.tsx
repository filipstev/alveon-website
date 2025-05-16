"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ModelViewerClient() {
  const [isModelViewerLoaded, setIsModelViewerLoaded] = useState(false);

  useEffect(() => {
    // Dynamically import model-viewer only on client side
    import("@google/model-viewer").then(() => {
      setIsModelViewerLoaded(true);
    });
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
