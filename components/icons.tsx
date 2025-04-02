import React from "react";

export const SunFilledIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="5" />
  </svg>
);

export const MoonFilledIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2a9.931 9.931 0 0 0 0 20 10 10 0 0 1 0-20z" />
  </svg>
);
