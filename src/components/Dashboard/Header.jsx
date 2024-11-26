import React from 'react';
import { Badge, Button } from "@nextui-org/react";
import Image from 'next/image';
function Header() {
  const SrcImages = [{src:'/Images/Dashicon.png',alt:'Dashicon',badge:null},
  {src:'/Images/notification-01.png',alt:'notification-01',
    badge:(
    <Badge content="0" showOutline="false" shape="circle" >
      <Button
        radius="full"
        isIconOnly
        aria-label="more than 99 notifications"
        variant="light"
      >
        <Image src="/Images/notification-01.png" alt="notification-01" className="object-contain self-stretch my-auto w-6 aspect-square" />
      </Button>
    </Badge>
  )}]
 
  return (
    <header className="flex flex-col px-16 w-full max-md:px-5 max-md:max-w-full">
      <nav className="flex flex-wrap gap-10 justify-between items-center p-3 w-full bg-white backdrop-blur-[14px] min-h-[80px] rounded-[56px] max-md:max-w-full">
      <div className="flex gap-4 items-center self-stretch my-auto">
          <div className="flex gap-2.5 items-center self-stretch my-auto">
          <div className="flex overflow-hidden flex-col justify-center self-stretch my-auto w-14 min-h-[56px] rounded-[40px]">
            <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/64c663fd5a235903d3bb5f301bb48770bff719feeea1981f961221f88d9d0dbe?placeholderIfAbsent=true&apiKey=ec8b5be8d0bc439e8d0de4f10baa31dc" alt="User avatar" className="object-contain flex-1 w-14 aspect-square" />
          </div>
            {SrcImages.map((src, index) => (
              <div key={index} className="flex gap-2 justify-center items-center self-stretch px-4 my-auto w-14 h-14 bg-neutral-100 rounded-[32px]">
                {src.badge ? (
                  <div className="mt-1">{src.badge}</div>
                ) : (
                  <Image loading="lazy" src={src.src} alt={`Icon ${index + 1}`} className="object-contain self-stretch my-auto w-6 aspect-square" />
                )}
              </div>
            ))}
          </div>
          
        </div>
        <div className='main-container flex w-[461px] pt-[4px] pr-[4px] pb-[4px] pl-[4px] justify-center items-center flex-nowrap bg-[#f4f5f7] rounded-[40px] relative mx-auto my-0'>          {['داشبورد', 'منابع', 'پشتیبانی', 'بازخوردها', 'دوره‌ها'].map((item, index) => (
        
              <button key={index} className={`'flex w-[94px] h-[44px] pt-0 pr-[20px] pb-0 pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[32px] border-none relative z-[8] pointer ${item === 'داشبورد' ? 'text-white bg-gray-800' : 'bg-neutral-100'}`}>
          
              {item}
            </button>
          ))}
        </div>
   
        <div className="flex flex-col justify-center items-center self-stretch px-4 py-2 my-auto w-[195px]">
          <Image loading="lazy" src="/Images/LogoFa&EnHLight.png" alt="Company logo" className="object-contain max-w-full aspect-[10.2] w-[163px]" />
        </div>
      </nav>
      <div className="flex gap-2.5 items-center self-start px-3 py-2 mt-7 text-right">
      <div className="self-stretch my-auto text-3xl font-light text-gray-800">محمد</div>
        <div className="self-stretch my-auto text-2xl font-extralight text-gray-700">عصر بخیر!</div>
       
      </div>
    </header>
  );
}

export default Header;