"use client";

import { useEffect } from "react";

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
    interactionPrompt: "auto" | "none";
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
  useEffect(() => {
    const src =
      "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
    if (!document.querySelector(`script[src="${src}"]`)) {
      const s = document.createElement("script");
      s.src = src;
      s.type = "module";
      s.async = true;
      document.head.appendChild(s);
    }
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
        poster="/models/alvi.webp"
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
