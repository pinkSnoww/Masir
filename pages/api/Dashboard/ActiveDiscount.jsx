import React from 'react';
import Image from 'next/image';
function ActiveDiscounts() {
  return (
    <section className="flex overflow-hidden flex-col p-5 mt-8 w-full bg-white rounded-[32px] max-md:max-w-full">
      <div className="flex flex-wrap gap-8 items-center w-full max-md:max-w-full">
   
        <h2 className="flex-1 shrink gap-2 self-stretch my-auto text-2xl font-light text-right text-gray-800 basis-6 min-w-[240px]">
          تخفیف‌های فعال
        </h2>
        <div className="flex gap-2 justify-center items-center self-stretch px-3 my-auto w-12 h-12 bg-neutral-100 rounded-[32px]">
          <Image loading="lazy" width={24} height={24} src="/Images/DashiconDashboard.png" alt="DashIcon" className="object-contain self-stretch my-auto w-6 aspect-square" />
        </div>
      </div>
      <div className="flex overflow-hidden flex-col justify-center p-4 mt-8 w-full bg-lime-400 rounded-2xl max-md:max-w-full">
        <div className="flex gap-4 items-center p-0.5 w-full text-right text-gray-700 max-md:max-w-full">
        <div className="self-stretch my-auto text-3xl font-[383]">30%</div>
          <div className="flex-1 shrink self-stretch my-auto text-2xl font-light basis-0">
            تخفیف خرید دوره آموزشی
          </div>
         
        </div>
        <div className="flex overflow-hidden gap-10 justify-between items-center p-3 mt-4 w-full bg-yellow-50 rounded-lg max-md:max-w-full">
         
          <div className="self-stretch my-auto text-xl font-light text-gray-700">تا ۳۰ آبان</div>
          <div className="flex gap-4 items-center self-stretch my-auto">
          <div className="gap-2 self-stretch my-auto text-2xl text-gray-700 whitespace-nowrap font-[279]">
              Course30
            </div>
            <div className="flex gap-2 justify-center items-center self-stretch p-1 my-auto w-8 rounded-lg">
              <Image loading="lazy" width={24} height={24} src="/Images/DiscountCodeIcon.png" alt="" className="object-contain self-stretch my-auto w-6 aspect-square" />
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
}

export default ActiveDiscounts;