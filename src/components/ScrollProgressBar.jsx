import React from "react";
import { useScrollProgressTotal } from "../hooks/useScroll";

export default function ScrollProgressBar() {
  const progress = useScrollProgressTotal();
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]">
      <div
        className="h-full"
        style={{
          width: `${progress * 100}%`,
          background: "var(--accent)",
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
}
