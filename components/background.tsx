"use client";

import DotGrid from "./DotGrid";

const Background = () => {
  return (
    <div style={{ width: "100%", height: "100dvh", position: "relative" }}>
      <DotGrid
        dotSize={2}
        gap={30}
        baseColor="#5227FF"
        activeColor="#5227FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
    </div>
  );
};

export default Background;
