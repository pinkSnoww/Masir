import React from 'react';
import Image from 'next/image';
const InstructorCard = ({ name, role, studentCount, courseCount, imageSrc }) => (
  <div className="flex overflow-hidden grow shrink gap-7 justify-center self-stretch p-5 my-auto border border-solid h-[240px] border-zinc-200 min-h-[240px] min-w-[240px] rounded-[32px] w-[416px]">
    <div className="flex overflow-hidden justify-center self-start rounded-3xl min-h-[152px] w-[152px]">
      <Image loading="lazy" src={imageSrc} alt={`${name} - ${role}`} className="object-contain flex-1 shrink aspect-square basis-0 w-[152px]" />
    </div>
    <div className="flex flex-col flex-1 shrink justify-between py-1 text-right basis-0">
      <div className="flex flex-col justify-center w-full rounded-[32px]">
        <div className="flex-1 shrink gap-2 self-stretch w-full text-3xl text-gray-700">{name}</div>
        <div className="flex-1 shrink gap-2 self-stretch mt-2.5 w-full text-lg font-light text-slate-500">{role}</div>
      </div>
      <div className="flex flex-col justify-center items-end mt-10 w-full text-lg text-gray-700 max-md:mt-10">
        <div className="gap-2 self-stretch">{studentCount} دانشجو</div>
        <div className="gap-2 self-stretch mt-2">{courseCount} دوره تدریس</div>
      </div>
    </div>
   
  </div>
);

const CourseInstructors = () => {
  const instructors = [
    {
      name: 'محمد احمدی',
      role: 'توسعه دهنده نرم افزار با تجربه ۸ ساله',
      studentCount: '۲۴',
      courseCount: '۳',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/eab431d80b493b764663e25d37dbea844965974f0972b23e752dd8686a884865?apiKey=3d76d12e2dac4ef79a22992c109ad062&'
    },
    {
      name: 'سارا رحیمی',
      role: 'طراح رابط کاربری با تخصص در UX/UI',
      studentCount: '۱۲',
      courseCount: '۱',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/8c4dde21975d0ab8f62046c1a75374a6a80fbbc2ae650f77b69ea0d315bde22d?apiKey=3d76d12e2dac4ef79a22992c109ad062&'
    },
    {
      name: 'علی رضایی',
      role: 'متخصص برنامه‌نویسی وب و مدرس با بیش از ۱۰ سال سابقه',
      studentCount: '۳۲',
      courseCount: '۲',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/a508e0ded60682a439fd7cb423bf7e36935192bbf69ae692bf1f6ebfacc1ee03?apiKey=3d76d12e2dac4ef79a22992c109ad062&'
    }
  ];

  return (
    <section className="flex flex-col justify-center items-center px-20 w-full mt-8 max-md:px-5">
      <div className='flex flex-wrap overflow-hidden justify-center text-right  mx-[64px]  lg:w-full gap-4 max-md:px-5 max-md:pt-24 max-md:max-w-full'>
      <h2 className="flex gap-8 justify-center items-center px-2 w-full text-4xl font-medium text-right text-slate-400 max-md:max-w-full">
        <span className="flex-1 shrink gap-2 self-stretch my-auto w-full min-w-[240px] max-md:max-w-full">
          <span className='font-light text-black'>مدرسین</span> <span className="font-light text-slate-400">دوره</span>
        </span>
      </h2>
      <div className="flex overflow-x-auto flex-wrap gap-8 items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
        {instructors.map((instructor, index) => (
          <InstructorCard key={index} {...instructor} />
        ))}
      </div>
      </div>
    </section>
  );
};

export default CourseInstructors;