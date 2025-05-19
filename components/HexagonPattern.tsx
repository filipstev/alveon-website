import React from "react";

interface HexagonPatternProps {
  fullCover?: boolean;
  size?: number;
  headerFit?: boolean;
  scale?: number;
}

const HexagonPattern: React.FC<HexagonPatternProps> = ({
  fullCover = false,
  size = 100,
  headerFit = false,
  scale = 1,
}) => {
  return (
    <div
      className={`absolute ${
        headerFit
          ? "inset-0 w-[120%] h-[120%] -left-[10%] -top-[10%]"
          : fullCover
          ? "inset-0 w-full h-full"
          : "top-0 left-0 w-full h-full"
      } overflow-hidden`}
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 28.87V86.6L50 115.47L0 86.6V28.87L50 0z' fill='none' stroke='%23ffffff' stroke-width='2' stroke-opacity='0.6'/%3E%3C/svg%3E")`,
          backgroundSize: `${size * scale}px ${size * scale}px`,
          transform: "rotate(30deg)",
        }}
      ></div>
    </div>
  );
};

export default HexagonPattern;
