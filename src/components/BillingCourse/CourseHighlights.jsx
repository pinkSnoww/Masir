import React from 'react';

const HighlightItem = ({ title, description }) => (
  <div className="flex flex-col flex-1 shrink justify-center items-start p-8 rounded-3xl basis-0 bg-neutral-100 min-w-[240px] max-md:px-5">
    <div className="text-2xl font-medium text-gray-700">{title}</div>
    <div className="mt-2 text-base font-light text-slate-500">{description}</div>
  </div>
);

const CourseHighlights = () => {
  const highlights = [
    { title: '۸', description: 'فصل' },
    { title: 'مبتدی تا پیشرفته', description: 'آموزش از صفر تا حرفه‌ای' },
    { title: 'مدرک بین‌المللی', description: 'در پایان دوره' },
    { title: '۱۲ ساعت', description: 'ویدیو آموزشی' },
    { title: '۵۶', description: 'درس' },
  ];

  return (
      <main className=" flex flex-col justify-center items-center px-20 w-full mt-8 max-md:px-5">
      <div className="flex flex-wrap overflow-hidden justify-center text-right  mx-[64px]  lg:w-full gap-4 max-md:px-5 max-md:pt-24 max-md:max-w-full">
    {/* <div className="flex flex-wrap gap-4 justify-center mt-6 w-full text-right max-w-[1312px] max-md:max-w-full"> */}
      {highlights.map((item, index) => (
        <HighlightItem key={index} title={item.title} description={item.description} />
      ))}
    {/* </div> */}
    </div>
    </main>
  );
};

export default CourseHighlights;