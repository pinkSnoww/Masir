import React from 'react';
import Image from 'next/image';
const CourseBanner = () => {
  return (
    <main className=" flex flex-col justify-center items-center px-20 w-full mt-8 max-md:px-5">
      <div className="flex relative overflow-hidden place-items-center mx-[64px] h-[704px]  pb-28  lg:w-full bg-[#F4F5F0]  min-h-[704px]  rounded-[32px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <Image 
      loading="lazy" 
      src="/images/BannerBillCourse.png"
       alt="Course banner background" 
       width={1000}
       height={1000}
       className="object-cover  inset-0 z-0 aspect-[1.86] min-w-[240px] w-full h-fit max-md:max-w-full" />
     
      <div className="flex absolute z-0 flex-wrap flex-1 shrink gap-8 items-end self-end w-full h-full text-right basis-[52px] min-w-[240px] max-md:max-w-full">
     
        <div className="flex flex-col flex-1 mr-10 shrink text-white basis-[26px] min-w-[240px] max-md:max-w-full">
          <h1 className="text-4xl font-semibold max-md:max-w-full">
            از کد تا شغل، مسیری <br /> برای برنامه‌نویسان آینده
          </h1>
          <p className="mt-3 text-xl font-light leading-8 max-md:max-w-full">
            مهارت‌های برنامه‌نویسی خود را ارتقا دهید <br />و آماده ورود به بازار کار شوید.
          </p>
        </div>
        <div className="flex gap-4 items-center py-1.5 ml-10 pr-5 pl-1.5 whitespace-nowrap bg-black bg-opacity-40 min-w-[240px] rounded-[40px]">
        <div className="flex gap-1 items-center self-stretch my-auto text-white">
            
            <span className="self-stretch my-auto text-2xl">۴۳,۳۰۰,۰۰۰</span>
            <span className="self-stretch my-auto text-xl font-extralight opacity-80">﷼</span>
          </div>
          <button className="overflow-hidden gap-2 self-stretch px-7 py-2 my-auto text-lg leading-9 bg-white rounded-[32px] text-stone-900 max-md:px-5">
            ثبت‌نام
          </button>
        
        </div>
      </div>
      <div className="flex absolute top-8 left-8 z-0 gap-2 justify-center items-center">
        <div className="flex shrink-0 self-stretch my-auto w-6 h-2 bg-white rounded-2xl" />
        <div className="flex shrink-0 self-stretch my-auto w-2 h-2 rounded-2xl bg-white bg-opacity-40" />
        <div className="flex shrink-0 self-stretch my-auto w-2 h-2 rounded-2xl bg-white bg-opacity-40" />
        <div className="flex shrink-0 self-stretch my-auto w-2 h-2 rounded-2xl bg-white bg-opacity-40" />
        <div className="flex shrink-0 self-stretch my-auto w-2 h-2 rounded-2xl bg-white bg-opacity-40" />
      </div>
      <button className="flex absolute top-2/4 left-2/4 z-0 gap-2.5 justify-center items-center px-7 -translate-x-2/4 -translate-y-2/4 bg-black bg-opacity-20 h-[104px] rounded-[87px] w-[104px] max-md:px-5">
        <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/ab917f4557be20648e61de2e8215632a3a15db2c8f4f49679c6290ad2efa01a9?apiKey=3d76d12e2dac4ef79a22992c109ad062&" alt="Play button" className="object-contain self-stretch my-auto aspect-square fill-white w-[52px]" />
      </button>
    </div>
    </main>
  );
};

export default CourseBanner;