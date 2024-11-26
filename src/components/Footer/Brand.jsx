"use client";
import { Button } from '@nextui-org/react';
import React from 'react';
import Image from 'next/image';
function Brand() {
  const socialIcons = [
    { src: "/Images/facebookIcon.png", alt: "facebookIcon" },
    { src: "/Images/instagramIcon.png", alt: "instagramIcon" },
    { src: "/Images/linkedinIcon.png", alt: "linkedinIcon" },
    { src: "/Images/twitterIcon.png", alt: "twitterIcon" },
    { src: "/Images/telegramIcon.png", alt: "telegramIcon" },
  ];
  const scrollToTop = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
    <div className="flex flex-col justify-center mt-36 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-start w-full max-md:max-w-full">
        <Button onClick={scrollToTop} ><Image loading="lazy" src="/Images/ArrowUp.png" width={24} height={24} alt="Masir" className="object-contain shrink-0 w-12 aspect-square" />
        </Button>
        <div className="flex flex-col min-w-[240px] w-[601px] max-md:max-w-full">
          <Image loading="lazy" src="/Images/EnLogotype.png" width={601} height={104} alt="Company Logo" className="object-contain max-w-full aspect-[5.78] fill-slate-500 w-[601px]" />
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-between items-center mt-8 w-full max-md:max-w-full">
       
        <p className="gap-2 self-stretch my-auto text-2xl text-center min-w-[240px] text-slate-500">
          Copyright © Masir 2024
        </p>
        <div className="flex gap-6 justify-center items-center self-stretch my-auto">
          {socialIcons.map((icon, index) => (
            <a href="#" key={index}>
              <Image loading="lazy" src={icon.src} width={24} height={24} alt="icon" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brand;