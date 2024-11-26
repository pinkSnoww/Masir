"use client";
import * as React from "react";
import { MenuItems } from "./MenuItems";
import { IconContainer } from "./IconContainer";
import LogoFa from "../../../public/Images/LogoFa.png";
import {Button} from "@nextui-org/button";
import SVGComponent from "./SVGComponent";
import Image from 'next/image';
export default function Hero() {
  return (
    <main id="hero" className=" flex flex-col justify-center items-center px-20 w-full mt-8 max-md:px-5">
      <div className="inline-block overflow-hidden place-items-center mx-[64px] h-[880px]  pt-4 pb-28  lg:w-full bg-[#F4F5F0]  min-h-[704px]  rounded-[32px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <nav className="flex flex-wrap  place-items-center gap-2 p-2.5 m-auto bg-black lg:w-[689px] bg-opacity-70 min-h-[40px] rounded-[32px] max-md:max-w-full">
          <Button
            className="flex gap-[8px] items-center px-[16px] h-[48px]  bg-lime-400 rounded-3xl"
         
          >
            شروع مسیر
          </Button>
 
          <MenuItems />
          <IconContainer />
        </nav>
        <div className="flex flex-wrap place-items-center gap-2 p-2.5 m-auto justify-center mt-[180px]">
          <div className="flex flex-col max-md:ml-0">
            <Image
             
              src={LogoFa}
              width={207}
              height={207}
              alt="LogoFa"
              className="object-contain shrink-0 self-stretch my-auto max-w-full aspect-[4.5] w-[207px] max-md:mt-10"
              priority={true}
            />
          </div>
          <div className="flex flex-col max-md:ml-0">
            <h1 className="text-7xl text-right text-custom-green max-md:mt-6 max-md:max-w-full max-md:text-4xl">
              از شروع تا موفقیت!
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap place-items-center gap-2 p-2.5 m-auto justify-center">
          <p className="text-3xl font-extralight text-center leading-[52px] text-neutral-700 w-[704px] max-md:max-w-full">
            <span className="font-light">
              در مسیر پیشرفت از انتخاب و شروع تا پایان مسیر یادگیری و شروع مسیر
              درآمدزایی
            </span>{" "}
            <span className="text-gray-700 rounded-3xl bg-lime-400 px-4 py-2">
              کنار شماییم!
            </span>
          </p>
        </div>
       
       
         <SVGComponent/> 
       
   

         
      </div>
    </main>
  );
}
