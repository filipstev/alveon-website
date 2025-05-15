"use client";

import { useEffect, useState } from "react";

// Add TypeScript interface for model-viewer
declare global {
  interface ModelViewerElement extends HTMLElement {
    src: string;
    alt: string;
    cameraControls: boolean;
    autoRotate: boolean;
    loading: "auto" | "lazy" | "eager";
    environmentImage: string;
    cameraOrbit: string;
    poster: string;
    shadowIntensity: string;
    exposure: string;
    shadowSoftness: string;
    interactionPrompt: "auto" | "none";
    interactionPromptStyle: "basic" | "wiggle";
    interactionPromptThreshold: string;
  }

  interface HTMLElementTagNameMap {
    "model-viewer": ModelViewerElement;
  }

  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": Partial<ModelViewerElement> &
        React.HTMLAttributes<HTMLElement>;
    }
  }
}

export default function ModelViewerClient() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Preload the model-viewer script
    const src =
      "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
    if (!document.querySelector(`script[src="${src}"]`)) {
      const s = document.createElement("script");
      s.src = src;
      s.type = "module";
      s.async = true;
      document.head.appendChild(s);
    }

    // Add preload link for the model
    const preloadLink = document.createElement("link");
    preloadLink.rel = "preload";
    preloadLink.as = "fetch";
    preloadLink.href = "/models/alvi.glb";
    preloadLink.crossOrigin = "anonymous";
    document.head.appendChild(preloadLink);
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* @ts-ignore */}
      <model-viewer
        src="/models/alvi.glb"
        alt="Alvi"
        camera-controls
        auto-rotate
        loading="lazy"
        environment-image="neutral"
        camera-orbit="90deg 75deg 2.5m"
        poster="/models/alvi.webp"
        shadow-intensity="1"
        exposure="1"
        shadow-softness="1"
        interaction-prompt="none"
        onLoad={(e: Event) => setIsLoading(false)}
        onError={(e: ErrorEvent) => setError("Failed to load 3D model")}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
        }}
      />
    </div>
  );
}
