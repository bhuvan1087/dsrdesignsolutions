"use client";

import { useEffect, useRef } from "react";

type LimitedVideoProps = {
  src: string;
  poster?: string;
  maxSeconds?: number;
};

export function LimitedVideo({ src, poster, maxSeconds = 25 }: LimitedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    video.muted = false;
    video.defaultMuted = false;
    video.volume = 1;

    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {
        // Some browsers block autoplay with sound until the user interacts.
      });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      controls
      loop
      playsInline
      poster={poster}
      preload="metadata"
      onTimeUpdate={(event) => {
        const video = event.currentTarget;
        if (video.currentTime >= maxSeconds) {
          video.currentTime = 0;
          video.play().catch(() => {
            // Some browsers block autoplay with sound until the user interacts.
          });
        }
      }}
      onSeeked={(event) => {
        const video = event.currentTarget;
        if (video.currentTime >= maxSeconds) {
          video.currentTime = 0;
        }
      }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
