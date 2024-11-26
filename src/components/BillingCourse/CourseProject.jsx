import React from 'react';
import Image from 'next/image';
const ProjectCard = ({ imageSrc, title, hasPlayButton }) => (
  <div className="flex overflow-hidden relative flex-col items-start self-stretch my-auto rounded-3xl bg-zinc-100 min-h-[328px] min-w-[240px] w-[528px] max-md:max-w-full">
    <div className="flex overflow-hidden z-0 flex-1 gap-2 justify-center self-stretch size-full max-md:max-w-full">
      <Image loading="lazy" src={imageSrc} alt="Masir" className="object-contain flex-1 shrink w-full aspect-[1.61] basis-0 min-w-[240px] max-md:max-w-full" />
    </div>
    <div className="absolute inset-x-6 bottom-6 flex-1 shrink gap-2 self-stretch max-w-full text-lg text-right text-white w-[480px] max-md:max-w-full">
      {title}
    </div>
    {hasPlayButton && (
      <button className="flex absolute top-2/4 left-2/4 z-0 gap-1.5 justify-center items-center px-4 w-16 h-16 -translate-x-2/4 -translate-y-2/4 bg-black bg-opacity-20 rounded-[53px]">
        <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/baacd1dd6138c1a3abdc8c592009cc22c21240eee2e551d6fe02884d5906705e?apiKey=3d76d12e2dac4ef79a22992c109ad062&" alt="Play button" className="object-contain self-stretch my-auto w-8 aspect-square fill-white" />
      </button>
    )}
  </div>
);

const CourseProjects = () => {
  const projects = [
    { imageSrc: 'https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/4cf9c51e1b7e6053cf36705a68ee3732ddcf82cb5adc9744bdfde2fd11af5ccb?apiKey=3d76d12e2dac4ef79a22992c109ad062&', title: 'پروژه انجام شده توسط هنرجوی دوره', hasPlayButton: true },
    { imageSrc: 'https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/d0d6256eebdb2f4eab6c8e3eda382429be33eb22e69a2cdeef4c08887f5ce829?apiKey=3d76d12e2dac4ef79a22992c109ad062&', title: 'پروژه انجام شده توسط هنرجوی دوره', hasPlayButton: false },
    { imageSrc: 'https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/bb4b4840a8f181597d5e052a1a5de801430d81cc93051e3d472e4c6c45dc9936?apiKey=3d76d12e2dac4ef79a22992c109ad062&', title: 'پروژه انجام شده توسط هنرجوی دوره', hasPlayButton: true }
  ];

  return (
    <main className=" flex flex-col justify-center items-center px-20 w-full mt-8 max-md:px-5">
      <div className="flex flex-wrap overflow-hidden justify-center text-right  mx-[64px]  lg:w-full gap-4 max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <div className="flex flex-wrap justify-between items-center w-full max-md:max-w-full">
        
        <h2 className="flex-1 shrink self-stretch my-auto text-4xl font-medium text-right basis-0 text-slate-400 max-md:max-w-full">
          <span className='font-light text-black'>پروژه‌های هنرجویان</span> <span className="font-light text-slate-400">دوره</span>
        </h2>
        <div className="flex gap-2 justify-center items-center self-stretch my-auto">
          <button className="flex gap-2 justify-center items-center self-stretch px-2 my-auto w-10 h-10 rounded-xl bg-neutral-100" aria-label="Previous project">
            <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/bebffa946e2238d99a6956fe8f5290e324e91da0f50032d0dc3d21c7c5f1b889?apiKey=3d76d12e2dac4ef79a22992c109ad062&" alt="Previous" className="object-contain self-stretch my-auto w-6 aspect-square" />
          </button>
          <button className="flex gap-2 justify-center items-center self-stretch px-2 my-auto w-10 h-10 rounded-xl bg-neutral-100" aria-label="Next project">
            <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/a7e4444e91f55808ca85b0ddfd57fabc7b948ceee02ab119817b4ceba019c7c7?apiKey=3d76d12e2dac4ef79a22992c109ad062&" alt="Next" className="object-contain self-stretch my-auto w-6 aspect-square" />
          </button>
        </div>
      </div>
      <div className="flex overflow-x-auto flex-col justify-center mt-14 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex overflow-x-auto gap-8 items-center w-full max-md:max-w-full">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="flex gap-2 justify-center items-center self-center mt-8">
          <div className="flex self-stretch my-auto bg-gray-700 rounded-2xl min-h-[6px] w-[18px]" />
        </div>
      </div>
      </div>
    </main>
  );
};

export default CourseProjects;