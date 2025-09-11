import React from "react";

interface AnnouncementBarProps {
  destinationUrl: string;
}

const AnnouncementBar = ({ destinationUrl }: AnnouncementBarProps) => (
  <div className="bg-breaking-green text-white">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 px-4 py-3 text-center">
      <span className="font-semibold">Glow Alert:</span>
      <span>Essence of Argan Oil is now 20% off.</span>
      <a href={destinationUrl} className="editorial-cta text-sm">Shop Now →</a>
    </div>
  </div>
);

export default AnnouncementBar;

