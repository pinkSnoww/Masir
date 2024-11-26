'use client';
import React, { useState } from 'react';
import Image from 'next/image';
const FAQItem = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center p-6 mt-2.5 w-full rounded-3xl bg-neutral-100 max-md:px-5 max-md:max-w-full">
      <button
        className="flex flex-wrap gap-6 items-center w-full max-md:max-w-full"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/9a20102514edcf70dbf95a1ec1540abd440cfea792540860f6a495445fc0ea03?apiKey=3d76d12e2dac4ef79a22992c109ad062&"
          alt={isOpen ? "Collapse" : "Expand"}
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <div className="flex-1 shrink gap-2 self-stretch my-auto text-2xl text-right text-gray-700 min-w-[240px] max-md:max-w-full">
          {question}
        </div>
      </button>
      {isOpen && (
        <div className="mt-4 text-lg text-gray-600">
          {/* Add answer content here */}
          این بخش برای پاسخ به سوال است. لطفاً محتوای مناسب را اضافه کنید.
        </div>
      )}
    </div>
  );
};

const CourseFAQ = () => {
  const faqItems = [
    { question: 'پیش‌نیاز چیست؟' },
    { question: 'به چه سخت‌افزاری نیاز است؟' },
    { question: 'مدت زمان دوره چقدر است؟' },
    { question: 'مدرک داده می‌شود؟' },
    { question: 'چطور با شما تماس بگیریم؟' }
  ];

  return (
    <main className=" flex flex-col justify-center items-center px-20 w-full mt-8 mb-14 max-md:px-5">
      <div className="flex flex-wrap overflow-hidden justify-center text-right text-gray-800  mx-[64px]  lg:w-full gap-4 max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <h2 className="flex-1 shrink self-stretch w-full text-4xl font-medium text-center max-md:max-w-full">
        سوالات شما
      </h2>
      <div className="flex flex-col mt-12 w-full text-2xl text-right max-md:mt-10">
        {faqItems.map((item, index) => (
          <FAQItem key={index} question={item.question} />
        ))}
      </div>
        </div>
      </main>
  );
};
export default CourseFAQ;