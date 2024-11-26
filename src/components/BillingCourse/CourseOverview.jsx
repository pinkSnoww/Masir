import React from 'react';
import Image from 'next/image';

const CourseOverview = () => {
  return (
    <main className=" flex flex-col justify-center items-center px-20 w-full mt-8 max-md:px-5">
      <div className="flex flex-wrap overflow-hidden justify-center text-right  mx-[64px]  lg:w-full gap-4 max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <h2 className="flex-1 shrink gap-2 self-stretch px-2.5 text-4xl font-medium text-slate-400 max-md:max-w-full">
       <span className='font-light text-black'>درباره</span> <span className="font-light text-slate-400">دوره</span>
      </h2>
      <div className="flex overflow-hidden flex-col p-10 mt-14 w-full border border-solid border-zinc-200 rounded-[32px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-8 items-start p-2 w-full max-md:max-w-full">
          <p className="flex-1 shrink gap-2 self-stretch text-2xl font-light leading-9 min-w-[240px] text-slate-500 max-md:max-w-full">
            در این دوره، مهارت‌های پیشرفته برنامه‌نویسی مانند ساختار داده‌ها، الگوریتم‌ها و طراحی سیستم‌ها را به‌صورت عملی یاد می‌گیرید. با پروژه‌های واقعی، تکنیک‌های بهینه‌سازی کد و تمرینات چالش‌برانگیز، می‌توانید به یک برنامه‌نویس حرفه‌ای تبدیل شوید.
          </p>
          <h3 className="flex-1 shrink gap-2 self-stretch text-3xl text-gray-700 min-w-[240px] w-[360px]">
            از کد تا شغل، مسیری برای برنامه‌نویسان آینده
          </h3>
        </div>
        <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/0f7981e05cdb1746ddf23c9719694cf94acfa4dd9829b10f98a14b95294f795c?apiKey=3d76d12e2dac4ef79a22992c109ad062&" alt="Divider" className="object-contain mt-10 w-full aspect-[1000] stroke-[1px] stroke-zinc-200 max-md:max-w-full" />
        <div className="flex flex-wrap gap-8 items-start p-2 mt-10 w-full max-md:max-w-full">
          <p className="flex-1 shrink gap-2 self-stretch text-2xl font-light leading-9 min-w-[240px] text-slate-500 max-md:max-w-full">
            این دوره مناسب علاقه‌مندان به برنامه‌نویسی و توسعه نرم‌افزار است که قصد دارند از سطح مبتدی به حرفه‌ای برسند.
          </p>
          <h3 className="flex-1 shrink gap-2 self-stretch text-3xl text-gray-700 min-w-[240px] w-[360px]">
            مخاطبین دوره
          </h3>
        </div>
        <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/0f7981e05cdb1746ddf23c9719694cf94acfa4dd9829b10f98a14b95294f795c?apiKey=3d76d12e2dac4ef79a22992c109ad062&" alt="Divider" className="object-contain mt-10 w-full aspect-[1000] stroke-[1px] stroke-zinc-200 max-md:max-w-full" />
        <div className="flex flex-wrap gap-8 items-start p-2 mt-10 w-full max-md:max-w-full">
          <p className="flex-1 shrink gap-2 self-stretch text-2xl font-light leading-loose min-w-[240px] text-slate-500 max-md:max-w-full">
            آشنایی اولیه با مفاهیم پایه برنامه‌نویسی مانند متغیرها، توابع و شرط‌ها توصیه می‌شود.
          </p>
          <h3 className="flex-1 shrink gap-2 self-stretch text-3xl text-gray-700 min-w-[240px] w-[360px]">
            پیش‌نیاز دوره
          </h3>
        </div>
        <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/0f7981e05cdb1746ddf23c9719694cf94acfa4dd9829b10f98a14b95294f795c?apiKey=3d76d12e2dac4ef79a22992c109ad062&" alt="Divider" className="object-contain mt-10 w-full aspect-[1000] stroke-[1px] stroke-zinc-200 max-md:max-w-full" />
        <div className="flex flex-wrap gap-8 items-start p-2 mt-10 w-full max-md:max-w-full">
    

          <p className="flex-1 shrink gap-2 self-stretch text-2xl font-light leading-loose min-w-[240px] text-slate-500 max-md:max-w-full">
            این دوره شامل محتوای تئوری، تمرین‌های عملی و پروژه‌های واقعی است.
          </p>
          <h3 className="flex-1 shrink gap-2 self-stretch text-3xl text-gray-700 min-w-[240px] w-[360px]">
            مدل آموزشی دوره
          </h3>
        </div>
      </div>
    </div>
    </main>
  );
};

export default CourseOverview;