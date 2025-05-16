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
