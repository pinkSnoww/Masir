"use client";

import React from "react";
import TestimonialCard from "./TestimonialCard";

// Predefined testimonial data array
const testimonialData = [
  {
    name: 'نرگس افضلی',
    role: 'طراحی محصول برای استارتاپ‌ها',
    comment: 'دوره طراحی محصول برای استارتاپ‌ها بسیار کاربردی بود. بعد از این دوره توانستم محصول خود را به شکل بهتری مدیریت و به بازار عرضه کنم.',
    image: 'https://via.placeholder.com/88x88',
    rating: '5',
  },
  {
    name: 'حمید فرزانه',
    role: 'برنامه‌نویسی از صفر تا حرفه‌ای',
    comment: 'از پشتیبانی خوب مدرسه مسیر بسیار راضی‌ام. همیشه به سوالاتم سریع و دقیق پاسخ می‌دهند و به من کمک کردند مشکلاتم را در یادگیری حل کنم.',
    image: 'https://via.placeholder.com/88x88',
    rating: '4',
  },
  {
    name: 'حمید فرزانه',
    role: 'برنامه‌نویسی از صفر تا حرفه‌ای',
    comment: 'از پشتیبانی خوب مدرسه مسیر بسیار راضی‌ام. همیشه به سوالاتم سریع و دقیق پاسخ می‌دهند و به من کمک کردند مشکلاتم را در یادگیری حل کنم.',
    image: 'https://via.placeholder.com/88x88',
    rating: '4',
  },
  {
    name: 'حمید فرزانه',
    role: 'برنامه‌نویسی از صفر تا حرفه‌ای',
    comment: 'از پشتیبانی خوب مدرسه مسیر بسیار راضی‌ام. همیشه به سوالاتم سریع و دقیق پاسخ می‌دهند و به من کمک کردند مشکلاتم را در یادگیری حل کنم.',
    image: 'https://via.placeholder.com/88x88',
    rating: '4',
  },
  {
    name: 'حمید فرزانه',
    role: 'برنامه‌نویسی از صفر تا حرفه‌ای',
    comment: 'از پشتیبانی خوب مدرسه مسیر بسیار راضی‌ام. همیشه به سوالاتم سریع و دقیق پاسخ می‌دهند و به من کمک کردند مشکلاتم را در یادگیری حل کنم.',
    image: 'https://via.placeholder.com/88x88',
    rating: '4',
  },
  {
    name: 'حمید فرزانه',
    role: 'برنامه‌نویسی از صفر تا حرفه‌ای',
    comment: 'از پشتیبانی خوب مدرسه مسیر بسیار راضی‌ام. همیشه به سوالاتم سریع و دقیق پاسخ می‌دهند و به من کمک کردند مشکلاتم را در یادگیری حل کنم.',
    image: 'https://via.placeholder.com/88x88',
    rating: '4',
  },
  {
    name: 'حمید فرزانه',
    role: 'برنامه‌نویسی از صفر تا حرفه‌ای',
    comment: 'از پشتیبانی خوب مدرسه مسیر بسیار راضی‌ام. همیشه به سوالاتم سریع و دقیق پاسخ می‌دهند و به من کمک کردند مشکلاتم را در یادگیری حل کنم.',
    image: 'https://via.placeholder.com/88x88',
    rating: '4',
  },
  {
    name: 'حمید فرزانه',
    role: 'برنامه‌نویسی از صفر تا حرفه‌ای',
    comment: 'از پشتیبانی خوب مدرسه مسیر بسیار راضی‌ام. همیشه به سوالاتم سریع و دقیق پاسخ می‌دهند و به من کمک کردند مشکلاتم را در یادگیری حل کنم.',
    image: 'https://via.placeholder.com/88x88',
    rating: '4',
  },
  // Add more testimonials if needed
];

const positions = [
  { top: '37px', left: 'auto', right: '20px' },
  { top: '90px', left: 'auto', right: '912px' },
  { top: '372px', left: 'auto', right: '48px' },
  { top: '436px', left: 'auto', right: '760px' },
  { top: '90px', left: 'auto', right: '-810px' },
  { top: '436px', left: 'auto', right: '-760px' },
];

function TestimonialSection() {
  return (
    <main className="flex flex-col items-center w-full  mt-28 max-md:px-5 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/Pattern.png')" }}>
      <div className="flex relative flex-col pt-16 max-w-full w-[1310px] h-full">
        <header className="flex z-0 flex-col justify-center mt-0.5 w-full text-center max-md:max-w-full">
          <h2 className="text-4xl font-medium text-[#325444] max-md:max-w-full">
            نظرات هنرجویان ما!
          </h2>
          <p className="mt-4 text-2xl font-light text-[#3E4552] max-md:max-w-full">
            نظرات برخی از هنرجویان موفق ما که با دوره‌های مدرسه مسیر به اهداف خود رسیده‌اند.
          </p>
        </header>
      </div>
      <div className="marquee overflow-hidden user-select-none">
        <div className="Comments marquee__group animate-scroll-x h-[792px] mt-4">
          {testimonialData.map((review, index) => {
            const position = positions[index % positions.length];
            return (
              <TestimonialCard
                key={index}
                review={review}
                style={{ position: 'absolute', ...position, overflow: 'hidden', whiteSpace: 'normal' }}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default TestimonialSection;