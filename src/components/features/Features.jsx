import * as React from "react";
import { FeatureCard } from "./FeatureCard";
import Image from 'next/image';
const featureData = [
  {
    icon: "/Images/icon4.png",
    title: "مدرک معتبر",
    description:
      "پس از اتمام دوره، گواهینامه‌ای معتبر و قابل ارائه در رزومه دریافت کنید.",
    backgroundImage:
      "/Images/Frame_3.png",
    className: "min-h-[243px] w-[371px]",
  },
  {
    icon: "/Images/icon4.png",
    title: "محتوای به‌روز",
    description:
      "یادگیری با جدیدترین منابع و تکنیک‌های آموزشی متناسب با نیازهای بازار کار.",
    backgroundImage:"/Images/Frame_2.png",
   className: "min-h-[243.2px] w-[307.20px]",
  },

  {
    icon: "/Images/icon4.png",
    title: "دسترسی مادام‌العمر",
    description:
      "به تمام محتوای دوره‌ها همیشه دسترسی خواهید داشت، بدون محدودیت زمانی.",
    className: "min-h-[198px] w-[372px]", 
    backgroundImage:"/Images/Box 4.svg",
  },
  {
    icon: "/Images/icon4.png",
    title: "اساتید مجرب ",
    description: "آموزش از متخصصان حرفه‌ای با سال‌ها تجربه در صنعت و تدریس.",
    className: "min-h-[205px] w-[364px] ",
            backgroundImage:"/Images/Box2.svg",
  },
  {
    icon: "/Images/icon4.png",
    title: "پشتیبانی و راهنمایی",
    description:
      "در هر مرحله از یادگیری، از پشتیبانی حرفه‌ای و پاسخ‌گویی دقیق بهره‌مند شوید.",
    backgroundImage:
      "/Images/Frame.png",
    className: "min-h-[288px] w-[339px]",
  },
];
 
export function Features() {
  return (
    <main id="hero" className=" flex flex-col justify-center items-center px-20 w-full mt-8 max-md:px-5">
      <div className="inline-block overflow-hidden place-items-center mx-[64px] h-[880px]  pt-4 pb-28  lg:w-full bg-[#325444]  min-h-[704px]  rounded-[32px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <header className="flex z-0 flex-col items-center  w-full max-md:max-w-full">
          <div className="flex justify-between gap-3 text-4xl tracking-wide font-medium text-right max-md:max-w-full">
            <h1 className="font-light text-white">نقطه تمایزهای </h1>
            <h1 className="font-light text-lime-400 leading-10">مدرسه مسیر!</h1>
          </div>
          <p className=" align-middle px-4 py-2 gap-5 mt-5 text-lg font-light  text-white bg-[#527163] rounded-[32px] max-md:max-w-full">
            <span className="text-xl text-white gap-1">
              تجربه‌ای متفاوت در آموزش آنلاین
            </span>
            <span className=" text-white gap-1">
            ، با ارائه بهترین‌ها در کیفیت، پشتیبانی و انعطاف‌ پذیری
            </span>
          </p>
        </header>
         <div className="m-auto  z-0 items-center relative ">
          <Image src="/Images/image_2.png" alt="image" className="m-auto -mt-[180px]" width={1288} height={625} />
          <div className="flex flex-wrap z-50 gap-2 w-[1288px] h-[625px]  p-2.5 -mt-[680px] m-auto justify-between">
            <div className="Boxs w-[1088px] h-[525px] m-auto relative z-10">
              <div className="Box4 w-[364.80px] h-[198.40px] p-8 left-0 top-0 absolute flex-col justify-between items-end inline-flex">
                
                <div className="ContentContainer self-stretch h-[78.20px] flex-col justify-start items-end gap-[11.20px] flex">
                  <FeatureCard {...featureData[2]} />
                </div>
              </div>
              <div className="Box5 w-[339.20px] h-72 p-8 left-0 top-[236.80px] absolute flex-col justify-between items-end inline-flex">
               
                <div className="Text self-stretch h-[78.20px] flex-col justify-start items-end gap-[11.20px] flex">
                  <FeatureCard {...featureData[4]} />
                </div>
              </div>
              <div className="Box3 w-[307.20px] h-[243.20px] p-8 left-[780.80px] top-[281.60px] absolute rounded-[19.20px] flex-col justify-between items-end inline-flex">
                <div className="Text2 self-stretch h-[78.20px] flex-col justify-start items-end gap-[11.20px] flex">
                  <FeatureCard {...featureData[1]} />
                </div>
              </div>
              <div className="Box2 w-[364.80px] h-[204.80px] p-8 left-[377.60px] top-[320px] absolute  flex-col justify-between items-end inline-flex">
                <div className="Text3 self-stretch h-[78.20px] flex-col justify-start items-end gap-[11.20px] flex">
                  <FeatureCard {...featureData[3]} />
                </div>
              </div>
              <div className="Box1 w-[371.20px] h-[243.20px] p-8 left-[716.80px] top-0 absolute  flex-col justify-between items-start inline-flex">
                <div className="Text4 self-stretch h-[78.20px] flex-col justify-start items-end gap-[11.20px] flex">
                  <FeatureCard {...featureData[0]} />
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </main>
  );
}
