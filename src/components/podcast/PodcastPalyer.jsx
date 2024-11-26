// components/SpinningCircle.js
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function SpinningCircle({ imageUrl, isPlaying, audioSrc, onPlayPause }) {
  const spinRef = useRef(null);

  // Set up spinning based on playing state
  useEffect(() => {
    if (isPlaying) {
      spinRef.current.style.animation = 'spin 60s linear infinite';
    } else {
      spinRef.current.style.animation = 'none'; // Stop spinning when not playing
    }
  }, [isPlaying]);

  return (
    <div className="relative flex items-center justify-center">
      <div className="relative h-[200px] w-[200px]">
        <div
          ref={spinRef}
          className="spin absolute inset-0 rounded-full border-4 border-transparent"
        >
          <div className="absolute top-0 left-0 border-2 border-transparent rounded-full"></div>
        </div>
        <Image
          src={imageUrl}
          alt="Podcast"
          className="object-cover w-full h-full rounded-full"
        />
        <button
          onClick={onPlayPause}
          className="absolute inset-0 flex items-center justify-center bg-white rounded-full shadow-lg"
        >
          <span className="text-3xl">{isPlaying ? '❚❚' : '▶'}</span> {/* Play/Pause icon */}
        </button>
        <style jsx>{`
          .spin {
            transition: border-top-color 0.15s linear,
              border-right-color 0.15s linear 0.1s,
              border-bottom-color 0.15s linear 0.2s;
          }
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .spin:hover {
            border-top-color: #0eb7da;
            border-right-color: #0eb7da;
            border-bottom-color: #0eb7da;
          }
        `}</style>
      </div>
      <audio src={audioSrc} id="audio" />
    </div>
  );
}