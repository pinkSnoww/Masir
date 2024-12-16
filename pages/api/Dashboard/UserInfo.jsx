import React from 'react';
import Image from 'next/image';
function UserInfo() {
  return (
    <section className="flex overflow-hidden flex-col flex-1 justify-between p-5  w-full rounded-[32px] max-md:max-w-full">
      <div className="flex flex-col justify-center w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-8 items-center w-full max-md:max-w-full">
         
          <h2 className="flex-1 shrink gap-2 self-stretch my-auto text-2xl font-light text-right text-gray-800 basis-6 min-w-[240px]">
            اطلاعات کاربری
          </h2>
          <div className="flex gap-2 justify-center items-center self-stretch px-3 my-auto w-12 h-12 bg-neutral-100 rounded-[32px]">
            <Image loading="lazy" width={48} height={48} src="/Images/DashiconDashboard.png" alt="UserImage" className="object-contain self-stretch my-auto w-6 aspect-square" />
          </div>
        </div>
        <div className="flex flex-wrap gap-4 items-center mt-8 w-full max-md:max-w-full">
        <div className="flex overflow-hidden flex-col justify-center self-stretch my-auto w-20 rounded-3xl min-h-[80px]">
            <Image loading="lazy" width={80} height={80} src="/Images/UserImage.png" alt="User profile" className="object-contain flex-1 w-20 aspect-square" />
          </div>
          <div className="flex flex-col flex-1 shrink self-stretch my-auto text-right basis-0 min-w-[240px]">
            <div className="text-2xl font-light text-gray-800">محمد حسینی</div>
            <div className="mt-1.5 text-xl font-extralight text-slate-500">هنرجو</div>
          </div>
         
        </div>
      </div>
      <div className="flex flex-col mt-14 w-full  max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-2 justify-center items-center p-2 w-full rounded-2xl bg-neutral-100 max-md:max-w-full">
        
        
        <button className="flex gap-2 justify-center items-center self-stretch px-3 my-auto w-11 h-11 rounded-2xl bg-neutral-100">
            <Image loading="lazy" width={20} height={20} src="/Images/EmailEditIcon.png" alt="Edit email" className="object-contain self-stretch my-auto w-5 aspect-square" />
          </button>
        <div className="flex-1 shrink gap-2 self-stretch my-auto text-left text-xl font-extralight text-gray-800 whitespace-nowrap basis-6 min-w-[240px]">
            mohammad@email.com
          </div>
          <div className="flex gap-2 justify-center items-center self-stretch px-3 my-auto w-12 h-12 rounded-2xl bg-neutral-100">
           
            <Image loading="lazy" width={24} height={24} src="/Images/emailIcon.png" alt="" className="object-contain self-stretch my-auto w-6 aspect-square" />
          </div>
        
        </div>
        <div className="flex flex-wrap gap-2 justify-center items-center p-2 mt-2.5 w-full rounded-2xl bg-neutral-100 max-md:max-w-full">
        <button className="flex gap-2 justify-center items-center self-stretch px-3 my-auto w-11 h-11 rounded-2xl bg-neutral-100">
            <Image loading="lazy" width={24} height={24} src="/Images/EmailEditIcon.png" alt="Edit phone number" className="object-contain self-stretch my-auto w-5 aspect-square" />
          </button>
        
          <div className="flex-1 shrink gap-2 self-stretch text-left my-auto text-xl font-extralight text-gray-800 basis-6 min-w-[240px]">
            0912 345 6789
          </div>
          <div className="flex gap-2 justify-center items-center self-stretch px-3 my-auto w-12 h-12 rounded-2xl bg-neutral-100">
            <Image loading="lazy" width={24} height={24} src="/Images/PhoneIcon.png" alt="PhoneIcon" className="object-contain self-stretch my-auto w-6 aspect-square" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserInfo;