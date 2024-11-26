import React from 'react';
import {Accordion, AccordionItem} from "@nextui-org/react";
import Image from 'next/image';
const SyllabusItem = ({ episode, title, duration, sectionNumber,syllabusItems }) => (
  
  <div className="flex flex-col mt-3 w-full rounded-3xl bg-[#F5F6F7] max-md:max-w-full">
    <div className="flex flex-wrap gap-10 items-center px-8 py-7 w-full max-md:px-5 max-md:max-w-full">
    <div className="gap-2 self-stretch my-auto text-3xl text-center whitespace-nowrap rounded-3xl text-slate-400">
        {episode}
      </div>
      <div className="flex-1 shrink gap-6 self-stretch my-auto text-2xl text-right text-gray-700 min-w-[240px]">
        {title}
      </div>
      <div className="flex gap-2 justify-center items-center self-stretch my-auto text-right whitespace-nowrap">
        <div className="self-stretch my-auto text-xl font-extralight text-slate-400">دقیقه</div>
        <div className="self-stretch my-auto text-2xl font-light text-slate-500">{duration}</div>
      </div>
    
     
      
      <div className="flex gap-2 justify-center items-center self-stretch my-auto text-right whitespace-nowrap">
        <div className="self-stretch my-auto text-xl font-extralight text-slate-400">قسمت</div>
        <div className="self-stretch my-auto text-2xl font-light text-slate-500">{sectionNumber}</div>
      </div>
      <div className="flex gap-2 accordion-collapse items-center self-stretch my-auto w-8" data-accordion="collapse">
   

</div>

    
     
    </div>
  </div>
);

const CourseSyllabus = () => {

  const syllabusItems = [
    { episode: '۰۱', title: 'مبانی برنامه‌نویسی', duration: '۱۲۰', sectionNumber: '۰۴' },
    { episode: '۰۲', title: 'متغیرها و عملیات‌ها', duration: '۱۱۰', sectionNumber: '۰۲' },
    { episode: '۰۳', title: 'توابع و ماژول‌ها', duration: '۱۷۰', sectionNumber: '۰۴' },
    { episode: '۰۴', title: 'حلقه‌ها و تکرارها', duration: '۱۵۰', sectionNumber: '۰۵' },
    { episode: '۰۵', title: 'ساختمان داده‌ها', duration: '۱۶۰', sectionNumber: '۰۶' },
    { episode: '۰۶', title: 'شیء‌گرایی', duration: '۲۰۰', sectionNumber: '۰۳' },
    { episode: '۰۷', title: 'مدیریت خطاها', duration: '۱۲۰', sectionNumber: '۰۴' },
    { episode: '۰۸', title: 'پروژه نهایی', duration: '۲۴۰', sectionNumber: '۰۸' }
  ];

  return (
    <main className=" flex flex-col justify-center items-center px-20 w-full mt-8 max-md:px-5">
      <div className="flex flex-wrap overflow-hidden justify-center text-right  mx-[64px]  lg:w-full gap-4 max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <div className="flex grow shrink gap-8 justify-center items-center px-2 text-4xl font-medium text-right min-w-[240px] text-slate-400 w-[1229px] max-md:max-w-full">
        <h2 className="flex-1 shrink gap-2 self-stretch my-auto w-full min-w-[240px] max-md:max-w-full">
         <span className='font-light text-black'>سرفصل‌های</span> <span className="font-light text-slate-400">دوره</span>
        </h2>
      </div>
      <div className="w-full flex ">
  
      <div className="flex flex-col grow shrink min-w-[240px] w-[864px] max-md:max-w-full">
        {syllabusItems.map((item, index) => (
          <SyllabusItem key={index} {...item} />
        ))}
      </div>
      <div className="flex  grow shrink justify-center min-w-[240px]  w-[416px]">
        <div className="flex mt-0 overflow-hidden relative flex-col items-start w-[416px] h-[248px]  rounded-3xl  max-w-[416px] min-h-[248px]">
          <div className="flex relative h-[248px] w-full items-center bg-lime-100 rounded-[232px]">
            <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/b5653afecd3336686647940190fb17f39cbfb3d8dd148c15873b33344697c97f?apiKey=3d76d12e2dac4ef79a22992c109ad062&" alt="Sample lesson video" className="object-cover absolute inset-0 size-full" />
            <div className='absolute  w-full m-auto justify-center items-center'>
          <button className="w-16 h-16 mr-44 bg-white bg-opacity-20 rounded-[53px]">
            <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/c62d30d0a08e034fe4f7f9fe2c70da4335030a5101263161c8aaaec79a7bb2d7?apiKey=3d76d12e2dac4ef79a22992c109ad062&" alt="Play button" className="object-contain self-stretch  m-auto w-8 aspect-square fill-white" />
          </button>
          </div>
          <div className="font-modam-vf rounded-3xl z-50  mt-52 mr-8 leading-[normal] gap-2 self-stretch h-[248px]  max-w-full text-base text-right text-white w-[416px]">
            نمونه آموزش مدرس
          </div>
        
          </div>
        </div>
      </div>
      </div>
    </div>
    </main>
  );
};

export default CourseSyllabus;