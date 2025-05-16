import HexagonPattern from "./HexagonPattern";
import WavePattern from "./WavePattern";

export function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <div className="hidden sm:block absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="hidden sm:block absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-600 blur-3xl"></div>
        <div className="opacity-60">
          <HexagonPattern />
        </div>
      </div>
      <WavePattern />
    </>
  );
}
