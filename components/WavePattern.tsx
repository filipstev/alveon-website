import React from "react";

interface WavePatternProps {
  flipped?: boolean;
  className?: string;
}

const WavePattern: React.FC<WavePatternProps> = ({
  flipped = false,
  className = "",
}) => {
  return (
    <div
      className={`absolute ${
        flipped ? "top-0" : "bottom-0"
      } left-0 w-full overflow-hidden ${className}`}
    >
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-[80px] md:h-[100px] lg:h-[120px] text-gray-50 fill-current"
        style={{ transform: flipped ? "rotate(180deg)" : "none" }}
      >
        <path d="M0,120V73.71c47.79-22.2,103.59-32.17,158-28,70.36,5.37,136.33,33.31,206.8,37.5C438.64,87.57,512.34,66.33,583,47.95c69.27-18,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C989.49,95,1113,134.29,1200,67.53V120Z"></path>
      </svg>
    </div>
  );
};

export default WavePattern;
