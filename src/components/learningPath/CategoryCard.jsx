"use client";
import React, { useState } from "react";
import ImageCard from "./ImageCard";
import { Button } from "@nextui-org/button";
import Image from 'next/image';
function CategoryCard({ name, englishTitle, number, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardData = [
    {
      layerName: "image1",
      className: "bg-blue-500 rotate-[-8deg] top-0 left-32",
      content: "Python",
      iconClasses: [
        {
       
          className: "absolute h-[59px] w-[59px] top-[66px] left-[96px] bg-white opacity-[80%] opacity rounded-full"
        },
        {
        
          className: "absolute h-[59px] w-[59px] top-[54px] left-[70px] bg-white opacity-[80%] opacity rounded-full"
        },
        {
        
          className: "absolute h-[59px] w-[59px] top-[40px] left-[44px] bg-white opacity-[80%] opacity rounded-full"
        }
      ]
    },
    {
      layerName: "image2",
      className: "bg-[#325444] rotate-[-15deg] top-0 left-60",
      content: "Front\nend",
      iconClasses: [
        {
         
          className: "absolute h-[52px] w-[59px] top-[66px] left-[96px] bg-white opacity-[80%] opacity"
        },
        {
        
          className: "absolute h-[59px] w-[59px] top-[54px] left-[70px] bg-white opacity-[80%] opacity"
        },
        {
         
          className: "absolute h-[59px] w-[59px] top-[40px] left-[44px] bg-white opacity-[80%] opacity"
        }
      ]
    },
];


  return (
    <article
      className={`relative flex justify-between items-center py-6 pr-10 pl-4 mt-2.5 w-full rounded-2xl transition-all duration-300 ${
        isHovered ? "bg-black text-white" : "bg-gray-100 text-gray-800"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center w-full">
        <p className="self-stretch my-auto text-center text-2xl">
          {number}
        </p>
        <div className="flex flex-col w-full">
          <h2 className="self-stretch my-auto text-4xl mr-4">
            {name}
          </h2>
        </div>
      </div>

      <div className="flex justify-end w-full rounded-[43px] relative z-10">
        {isHovered &&
          cardData.map((card, index) => <ImageCard key={index} {...card} />)}
        <p className="text-2xl text-right z-10">
          {englishTitle}
        </p>
      </div>
      <div className="flex justify-end">
        <Button 
          isIconOnly 
          rounded="full"  
          aria-label="Arrow"
          onClick={() => {
            if (typeof onClick === 'function') {
              onClick();
            }
          }}
        >
        <Image
          loading="lazy"
          src="/Images/arrow-up-left-01-sharp.png"
          width={32}
          height={32}
          alt="Masir"
          className="object-contain self-stretch aspect-square"
        />
        </Button>
      </div>
    </article>
  );
}

export default CategoryCard;
