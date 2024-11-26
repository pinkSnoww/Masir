import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
function AnimatedImage({ audioSrc, imageSrc }) {
  const audioRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const audioElement = audioRef.current;
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    audioElement.addEventListener('loadedmetadata', () => {
      setDuration(audioElement.duration);
    });

    return () => {
      audioElement.removeEventListener('loadedmetadata', () => {});
    };
  }, []);

  return (
    <div className={`border-animation`} style={{ animationDuration: `${duration}s` }}>
      <Image src={imageSrc} alt="Animated" />
      <button onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <audio ref={audioRef} src={audioSrc} />
    </div>
  );
}

export default AnimatedImage;