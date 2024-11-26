import React from 'react';
import Image from 'next/image';
const MentorCard = ({ name, role, imageSrc }) => (
  <div className="flex overflow-hidden flex-col self-stretch my-auto w-48">
    <div className="flex overflow-hidden justify-center w-full rounded-3xl min-h-[192px]">
      <Image loading="lazy" src={imageSrc} alt={`${name} - ${role}`} className="object-contain flex-1 shrink w-48 aspect-square basis-0" />
    </div>
    <div className="flex flex-col justify-center px-1 py-0.5 mt-3.5 w-full text-right rounded-[32px]">
      <div className="flex-1 shrink gap-2 self-stretch w-full text-2xl text-gray-700">{name}</div>
      <div className="flex-1 shrink gap-2 self-stretch mt-1.5 w-full text-base font-light text-slate-500">{role}</div>
    </div>
  </div>
);

const CourseMentors = () => {
  const mentors = [
    { name: 'محمد احمدی', role: 'طراح گرافیک', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/ffaa1fba01c044a3a6f9ddaa2c48d87a6bf28b95e4d95dddbccd51c7404eec58?apiKey=3d76d12e2dac4ef79a22992c109ad062&' },
    { name: 'سارا کریمی', role: 'بازاریاب', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/882e9fd8b4a8866b2defd131ef676bcb46410eaa5da8ca10c4eba814be0674ed?apiKey=3d76d12e2dac4ef79a22992c109ad062&' },
    { name: 'رضا محمدی', role: 'توسعه دهنده نرم افزار', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/05438c3a56db26c37f3c2782f66ed9dc61df2f57231894a9bcccd8c554ec1d81?apiKey=3d76d12e2dac4ef79a22992c109ad062&' },
    { name: 'نازنین احسانی', role: 'مدیر فروش', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/d9c761931dab723d060d8b0f72a82f3efd63dbcd4a4cc3398001bb758a5bda5e?apiKey=3d76d12e2dac4ef79a22992c109ad062&' }
  ];

  return (
    <main className=" flex flex-col justify-center items-center px-20 w-full mt-8 max-md:px-5">
      <div className="flex flex-wrap overflow-hidden justify-center text-right  mx-[64px]  lg:w-full gap-4 max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <h2 className="flex gap-8 justify-center items-center px-2 w-full text-4xl font-medium text-right text-slate-400 max-md:max-w-full">
        <span className="flex-1 shrink gap-2 self-stretch my-auto w-full min-w-[240px] max-md:max-w-full">
         <span className='font-light text-black'>منتور‌های</span>  <span className="font-light text-slate-400">دوره</span>
        </span>
      </h2>
      <div className="flex overflow-x-auto flex-wrap gap-8  justify-start mt-12 w-full max-md:mt-10 max-md:max-w-full">
        {mentors.map((mentor, index) => (
          <MentorCard key={index} {...mentor} />
        ))}
      </div>
    </div>
    </main>
  );
};

export default CourseMentors;