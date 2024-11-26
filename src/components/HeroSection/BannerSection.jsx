"use client"
import * as React from "react";
import { useState } from "react";
import ProgressIndicator from "./ProgressIndictor";
import BannerButton from "./BannerButton";
import Image from "next/image";
const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const progressIndicators = [true, false, false, false, false];

  const images = [
    '/Images/Bannerimg.png',
    '/Images/Mentor.png',
    '/Images/imagePodcast.png',
    '/Images/Bannerimg.png',
    '/Images/Bannerimg.png'
  ];

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <main className="flex flex-col items-center px-20 w-full mt-10 max-md:px-5">
      
      <div className="inline-block overflow-hidden place-items-center mx-[64px] min-h-[704px] w-full  rounded-[32px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <div className="flex flex-col items-center pt-4 w-3/5 -mb-2 bg-stone-100 h-[20px] rounded-[32px] max-md:max-w-full"></div>
        <div className="flex z-10 flex-col items-center pt-6 w-4/5 -mb-4 bg-[#e6e8dc] h-[32px] rounded-[32px] max-md:mb-2.5 max-md:max-w-full"></div>
        <article className="flex relative z-10 flex-col items-center px-20 pt-44 pb-20 w-full bg-gray-700 min-h-[536px] rounded-[40px] max-md:px-5 max-md:pt-24 max-md:mb-2.5 max-md:max-w-full">
       
   
          <Image
            src={images[currentIndex]}
            width={1312}
            height={536}
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            className="absolute inset-0 z-0 rounded-[40px]"
            alt="Banner"
            priority="true"
          />
         
        
          <div className="flex absolute inset-0 z-0 w-full min-h-[536px] max-md:max-w-full" />

          <header className="flex z-0 flex-col items-start self-start text-right text-white max-md:max-w-full">
            <h1 className="flex flex-col text-5xl font-semibold leading-[62.88px] max-md:max-w-full max-md:text-4xl">
              اولین قدم
              <br />
              به دنیای برنامه‌نویسی!
            </h1>
            <p className="mt-2 text-xl font-light">
              با یادگیری اصول پایه تا مهارت‌های پیشرفته،
              <br />
              به یک برنامه‌نویس حرفه‌ای تبدیل شوید.
            </p>
          </header>
          <BannerButton />

          <nav className="flex absolute top-8 left-8 z-0 gap-2 justify-center items-center">
            {progressIndicators.map((isActive, index) => (
              <ProgressIndicator
                key={index}
                isActive={index === currentIndex}
                onClick={() => handleIndicatorClick(index)}
              />
            ))}
          </nav>
        </article>
      </div>
 
    </main>
  );
};

export default Banner;
