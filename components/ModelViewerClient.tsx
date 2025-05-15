"use client";

import { useEffect } from "react";

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
    // @ts-ignore
    <model-viewer
      src="/models/alvi.glb"
      alt="Alvi"
      camera-controls
      auto-rotate
      loading="eager"
      camera-orbit="90deg 75deg 2.5m"
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
      }}
    />
  );
}
