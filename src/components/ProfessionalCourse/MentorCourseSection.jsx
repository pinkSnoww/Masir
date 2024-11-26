import React from "react";
import TeacherCard from "./TeacherCard";
import FeaturePoint from "./FeaturePoint";
import { Button } from "@nextui-org/react";


;

const featurePoints = [
  {
    text: "آنلاین",
    iconSrc:
      "/Images/computer-video-call.png",
  },
   {
    text: "زمان‌بندی انعطاف‌پذیر",
    iconSrc:
      "/Images/clock-01.png",
  },
  {
    text: "دارای گواهی‌نامه معتبر",
    iconSrc:
      "/Images/diploma.png",
  },
 
 
];

function MentorCourseSection() {
 
  const baseClasses =
    "overflow-hidden gap-2 self-stretch px-8 py-4 my-auto font-light min-h-[56px] rounded-[40px] max-md:px-5";
  const variantClasses = {
    primary: "text-black bg-lime-400",
    secondary: "bg-gray-800 text-zinc-200",
  };
  return (
    <main id="hero" className=" flex flex-col justify-center items-center px-20 w-full mt-20 max-md:px-5">
      <div className="flex overflow-hidden  mx-[64px] h-[880px]  py-12 px-20 lg:w-full bg-neutral-900 min-h-[704px]  rounded-[32px] max-md:px-5 max-md:pt-24 max-md:max-w-full">

      <div className="flex z-0 flex-col w-[50%]mr-[80px] py-2 my-auto text-right  max-md:max-w-full">
        <div className="flex flex-col pl-28 w-full font-extralight leading-9 max-md:pl-5 max-md:max-w-full">
          <h1 className="flex-1 shrink gap-2 self-stretch w-full text-6xl text-white leading-[75px] max-md:text-4xl max-md:leading-[60px]">
            دوره‌های تخصصی <br />
            <span className="text-lime-400">برای حرفه‌ای‌های دیجیتال</span>
          </h1>
          <div className=" gap-2 leading-9 self-stretch mt-8 w-full  hyphens-auto text-xl text-zinc-200">
            <p className="text-white text-xl">
              {" "}
              مهارت‌های خود را در دنیای دیجیتال ارتقا دهید.{" "}
            </p>{" "}
            <p className="text-white text-xl">   به بهترین دوره‌های آموزشی در زمینه طراحی محصول، دیجیتال مارکتینگ و

            برنامه‌نویسی بپیوندید که توسط متخصصان برتر و کارآفرینان موفق تدریس
            می‌شود.</p>
         
          </div>
          <div className="flex gap-8 items-center mt-8 w-full text-lg text-white">
            {featurePoints.map((feature, index) => (
              <FeaturePoint
                key={index}
                text={feature.text}
                iconSrc={feature.iconSrc}
              />
            ))}
          </div>
        </div>
        <div className="flex gap-4 items-center mt-14 text-lg max-md:mt-10 max-md:max-w-full">
          <Button className={`${baseClasses} ${variantClasses.primary}`}>
            مشاهده دوره‌ها
          </Button>
          <Button className={`${baseClasses} ${variantClasses.secondary}`}>
            کلاس‌های نمونه
          </Button>
        </div>
      </div> 
      
      <div className="flex  w-[50%] h-[679px] scroll-smooth mr-[80px] mt-10">
          <TeacherCard style={{ zIndex: 10 }}/>
      </div>
     </div>
    </main>
  );
}

export default MentorCourseSection;
