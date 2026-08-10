"use client";

import Snowfall from "react-snowfall";

export default function SnowfallBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Snowfall
        color="#5d7dff"
        snowflakeCount={80}
        speed={[0.5, 1]}
        wind={[-0.5, 1]}
        radius={[0.5, 2]}
        opacity={[0.3, 0.8]}
      />
    </div>
  );
}
