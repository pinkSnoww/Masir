import React from 'react';
import Image from 'next/image';
const CourseCards = ({ bgColor, accentColor, title, description, hours, lessons, chapters, instructor, price }) => {
  return (
    <article className={`flex overflow-hidden flex-col flex-1 shrink self-stretch p-2.5 my-auto ${bgColor} rounded-3xl border border-solid basis-0 border-slate-200 min-w-[240px] max-md:max-w-full`}>
      <div className={`flex w-full rounded-2xl ${accentColor} min-h-[288px] max-md:max-w-full`} />
      <div className="flex flex-col p-2 mt-3.5 w-full max-md:max-w-full">
        <div className="flex flex-col px-2 py-1 w-full text-right max-md:max-w-full">
          <div className="flex flex-col justify-center w-full max-md:max-w-full">
            <h2 className="text-2xl font-medium leading-none text-zinc-900 max-md:max-w-full">
              {title}
            </h2>
            <p className="mt-2.5 text-lg font-light leading-7 text-neutral-400 max-md:max-w-full">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 items-start mt-7 w-full max-md:max-w-full">
            <div className="flex gap-2.5 justify-center items-center px-2.5 whitespace-nowrap rounded-lg bg-slate-200 min-h-[36px]">
              <div className="flex gap-1.5 items-center self-stretch my-auto">
                <div className="flex gap-1 items-center self-stretch my-auto">
                  <span className="self-stretch my-auto text-base font-light text-neutral-400">
                    ساعت
                  </span>
                  <span className="self-stretch my-auto text-lg text-zinc-900">
                    {hours}
                  </span>
                </div>
              </div>
              <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/5530082b7273b4bc6f2e457c7296afabe618c9cf6a7bcc17b34a85ba4e3a4fbf?apiKey=3d76d12e2dac4ef79a22992c109ad062&" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" />
            </div>
            <div className="flex gap-2.5 justify-center items-center px-2.5 whitespace-nowrap rounded-lg bg-slate-200 min-h-[36px]">
              <div className="flex gap-1.5 items-center self-stretch my-auto">
                <div className="flex gap-1 items-center self-stretch my-auto">
                  <span className="self-stretch my-auto text-base font-light text-neutral-400">
                    قسمت
                  </span>
                  <span className="self-stretch my-auto text-lg text-zinc-900">
                    {lessons}
                  </span>
                </div>
                <div className="flex gap-1 items-center self-stretch my-auto">
                  <span className="self-stretch my-auto text-base font-light text-neutral-400">
                    فصل
                  </span>
                  <span className="self-stretch my-auto text-lg text-zinc-900">
                    {chapters}
                  </span>
                </div>
              </div>
              <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/6b806d6befc970a3c2c48ad3fd2cfacdc64deabc37cec83020bccb48321ed94e?apiKey=3d76d12e2dac4ef79a22992c109ad062&" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" />
            </div>
            <div className="flex gap-2.5 items-center px-2.5 font-light rounded-lg bg-slate-200 min-h-[36px] min-w-[240px]">
              <div className="flex gap-1.5 items-center self-stretch my-auto">
                <span className="self-stretch my-auto text-base text-neutral-400">
                  طراح محصول
                </span>
                <span className="self-stretch my-auto text-lg text-zinc-900">
                  {instructor}
                </span>
              </div>
              <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/bfba95b4c34462e9b03aee720f86fc838108b5c95ee2e69f129382d7cb03f3e7?apiKey=3d76d12e2dac4ef79a22992c109ad062&" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" />
            </div>
          </div>
        </div>
        <div className="flex gap-10 justify-between items-center p-2 mt-7 w-full bg-white rounded-2xl max-md:max-w-full">
          <button className={`gap-2 self-stretch px-10 py-2.5 my-auto text-base font-light text-center text-white rounded-2xl ${accentColor} min-h-[40px] max-md:px-5`}>
            ثبت نام
          </button>
          <div className="flex gap-1.5 items-center self-stretch px-2.5 my-auto whitespace-nowrap">
            <span className="self-stretch my-auto text-lg font-light text-neutral-400">
              ﷼
            </span>
            <span className={`self-stretch my-auto text-2xl ${accentColor}`}>
              {price}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CourseCards;