"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@nextui-org/button";
import { IoCaretForwardOutline, IoPauseSharp } from "react-icons/io5";
import { CiPause1 ,CiPlay1} from "react-icons/ci";
import Image from 'next/image';
function PodcastCard({
  title,
  producers,
  cover_file,
  description,
  tags,
}) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [durationAudio, setDurationAudio] = useState(0);

  const localAudioFile = "/audio/testAudio.mp3"; // Adjust the path as necessary

  const handlePlayPause = async () => {
    const audioElement = audioRef.current;

    if (!audioElement) {
      console.error("Audio element is not available.");
      return;
    }

    try {
      if (isPlaying) {
        await audioElement.pause();
      } else {
        await audioElement.play();
      }
      setIsPlaying((prev) => !prev);
    } catch (error) {
      console.error("Error while toggling play/pause:", error);
    }
  };

  useEffect(() => {
    const audioElement = audioRef.current;

    const handleError = () => {
      console.error("Audio playback failed.");
      setIsPlaying(false);
    };

    const updateProgress = () => {
      if (audioElement) {
        const currentTime = audioElement.currentTime;
        const totalDuration = audioElement.duration;

        if (!isNaN(totalDuration) && totalDuration > 0) {
          setDurationAudio(totalDuration);
          setProgress((currentTime / totalDuration) * 100);
        }
      }
    };

    if (audioElement) {
      audioElement.addEventListener("error", handleError);
      audioElement.addEventListener("timeupdate", updateProgress);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("error", handleError);
        audioElement.removeEventListener("timeupdate", updateProgress);
      }
    };
  }, []);

  const radius = 240;
  const circumference = 2 * Math.PI * radius;

  return (
    <article className="flex overflow-hidden flex-col justify-between self-stretch p-12 mb-[144px] rounded-3xl bg-[#F2F0ED] min-h-[792px] h-[792px] min-w-[240px] w-[576px] max-md:px-5 max-md:max-w-full">
      <header className="flex gap-10 justify-between items-center w-full text-center text-zinc-600 max-md:max-w-full">
        <div className="gap-2 self-stretch my-auto text-2xl">
          {producers.map((producer) => (
            <div key={producer.pk}>
              <p>{producer.first_name} {producer.last_name}</p>
            </div>
          ))}
        </div>
        <p className="gap-2 self-stretch my-auto text-xl font-light">
          {tags || "استراتژی، تجربه"}
        </p>
      </header>

      <div className="flex h-[480px] w-full flex-col items-center">
        <div className="bg-t-bg-tile-line-cover z-0 flex h-[480px] w-[480px] flex-shrink-0 flex-col items-center justify-center bg-cover bg-center px-[7.5px] pb-[7.5px] pt-[8.5px]">
          <div className="z-[2] flex h-[480px] w-[480px]  items-center justify-center relative">
            <div className="absolute inset-0 flex items-center  justify-center">
            
                <svg viewBox="0 0 500 500">
                  <circle
                    cx="250"
                    cy="250"
                    r={radius}
                    stroke="#e0e0e0"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <circle
                      cx="250"
                      cy="250"
                    r={radius}
                    stroke="#FFB671"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset={circumference - (progress / 100) * circumference}
                    style={{
                      transition: 'stroke-dashoffset 0.3s linear',
                      transform: '(-90deg)',
                      transformOrigin: '50% 50%',
                    }}
                  />
                </svg>
              </div>
           
            <Image
              src={cover_file || "Images/imagePodcast.png"}
              alt={title}
              width={460}
              height={460}
              className="object-cover rounded-full h-[460px] w-[460px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <div className="absolute bottom-24 -left-10 pt-2 translate-x-1/2 translate-y-1/2 items-center text-xl text-center bg-white w-[98px] h-[42px] rounded-[42px]">
              {durationAudio}
            </div>
            <Button
              onClick={handlePlayPause}
              className="absolute inset-44 items-center m-auto p-auto bg-black opacity-70 w-[80px] h-[80px] rounded-[80px] cursor-pointer"
            >
              {isPlaying ? <Image src="/Images/pause.png" width={80} height={80} alt="pause" /> : <Image src="/Images/play.png" width={80} height={80}   alt="play" />}
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-14 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-3 w-full max-md:max-w-full">
          <span className="flex gap-2 justify-center items-start pt-4 w-3.5 h-full">
            <span className="flex w-3.5 h-3.5 bg-red-500 rounded-full min-h-[14px]" />
          </span>
          <h4 className="flex-1 shrink my-auto text-3xl font-medium text-right basis-0 text-stone-900 max-md:max-w-full">
            {title}
          </h4>
        </div>
        <p className="flex-1 shrink gap-2 self-stretch mt-3 w-full text-l font-light text-right text-zinc-600 max-md:max-w-full">
          {description}
        </p>
      </div>
      <audio ref={audioRef} src={localAudioFile} />
    </article>
  );
}

export default PodcastCard;
