// components/TestimonialSection.js

import * as React from "react";
import TestimonialCard from "./TestimonialCard";

const testimonialData = [
  {
    name: 'نرگس افضلی',
    role: 'طراحی محصول برای استارتاپ‌ها',
    comment:
      'دوره طراحی محصول برای استارتاپ‌ها بسیار کاربردی بود. بعد از این دوره توانستم محصول خود را به شکل بهتری مدیریت و به بازار عرضه کنم.',
    image: 'https://via.placeholder.com/88x88',
    rating: '5'
  },
  {
    name: 'حمید فرزانه',
    role: 'برنامه‌نویسی از صفر تا حرفه‌ای',
    comment:
      'از پشتیبانی خوب مدرسه مسیر بسیار راضی‌ام. همیشه به سوالاتم سریع و دقیق پاسخ می‌دهند و به من کمک کردند مشکلاتم را در یادگیری حل کنم.',
    image: 'https://via.placeholder.com/88x88',
    rating: '4'
  },
];

function TestimonialSection() {
  const positions = [
    { top: '90px', left: '912px' },
    { top: '436px', left: '760px' },
  ];

  return (
    <div className="Comments w-96 h-96 relative">
      {testimonialData.map((review, index) => (
        <TestimonialCard
          key={index}
          review={review}
          top={positions[index].top}
          left={positions[index].left}
        />
      ))}
    </div>
  );
}

export default TestimonialSection;