import React from 'react';
import CourseCards from './CourseCards';
import Image from 'next/image';

const courseData = [
  {
    bgColor: 'bg-gray-100',
    accentColor: 'bg-slate-500',
    title: 'طراحی محصول برای استارتاپ‌ها',
    description: 'مراحل طراحی محصول از تحقیقات کاربری تا توسعه نمونه اولیه و ارائه به بازار.',
    hours: '۲۰',
    lessons: '۲۵',
    chapters: '۶',
    instructor: 'محمد صالحی',
    price: '۲۴.۹۹۰.۰۰۰'
  },
  {
    bgColor: 'bg-red-50',
    accentColor: 'bg-orange-400',
    title: 'بازاریابی دیجیتال مدرن',
    description: 'بهینه‌سازی استراتژی‌های دیجیتال مارکتینگ، از مدیریت شبکه‌های اجتماعی تا بهینه‌سازی موتورهای جستجو',
    hours: '۲۵',
    lessons: '۳۵',
    chapters: '۸',
    instructor: 'سارا محمدی',
    price: '۱۵.۹۹۰.۰۰۰'
  },
  {
    bgColor: 'bg-gray-100',
    accentColor: 'bg-gray-700',
    title: 'برنامه‌نویسی از صفر تا حرفه‌ای',
    description: 'با یادگیری Python و JavaScript، به دنیای توسعه نرم‌افزار وارد شوید و پروژه‌های واقعی بسازید.',
    hours: '۴۰',
    lessons: '۵۰',
    chapters: '۱۰',
    instructor: 'علی رضایی',
    price: '۱۸.۹۹۰.۰۰۰'
  }
];

const CourseSections = () => {
  return (
    <section className="flex overflow-hidden flex-col py-12 px-20">
      <div className="flex flex-col items-center self-center w-full text-neutral-800 max-md:max-w-full">
        <h1 className="w-full text-4xl font-medium text-center max-md:max-w-full">
          جدید‌ترین دوره‌های{" "}
          <span className="font-light text-gray-700">مدرسه مسیر!</span>
        </h1>
        <div className="flex flex-wrap gap-2 justify-center items-center mt-8 text-xl font-light text-center max-md:max-w-full">
          {['ادیت ویدیو', 'گرافیک‌دیزاین', 'طراحی محصول', 'مارکتینگ', 'برنامه نویسی', 'همه'].map((category, index) => (
            <button key={index} className={`gap-2 self-stretch px-5 my-auto ${index === 5 ? 'text-white bg-gray-700' : 'bg-gray-100'} rounded-xl min-h-[40px]`}>
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-8 justify-center items-center w-full max-md:max-w-full">
          {courseData.map((course, index) => (
            <CourseCards key={index} {...course} />
          ))}
        </div>
        <div className="flex flex-wrap gap-10 justify-between items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-2 justify-center items-center self-stretch my-auto">
            <button className="flex gap-2 justify-center items-center self-stretch px-2 my-auto w-12 h-12 bg-gray-100 rounded-2xl">
              <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/fb19abd9c48d3259dc75cad42bcff779cdbaca43423271a50801252013ba5c36?apiKey=3d76d12e2dac4ef79a22992c109ad062&" alt="Previous" className="object-contain self-stretch my-auto w-8 aspect-square" />
            </button>
            <button className="flex gap-2 justify-center items-center self-stretch px-2 my-auto w-12 h-12 bg-gray-100 rounded-2xl">
              <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/febc77b55a8805b2ff64fe97b4ae68d42b9569a0c225c9ed4a4c1f41637dce70?apiKey=3d76d12e2dac4ef79a22992c109ad062&" alt="Next" className="object-contain self-stretch my-auto w-8 aspect-square" />
            </button>
          </div>
          <div className="flex gap-2 justify-center items-center self-stretch my-auto">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div key={index} className={`flex shrink-0 self-stretch my-auto ${index === 4 ? 'w-6' : 'w-2'} h-2 rounded-2xl ${index === 4 ? 'bg-gray-700' : 'bg-gray-700 bg-opacity-40'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSections;