
import React from 'react';

function SectionTitle() {
  return (
    <header className="flex flex-col justify-center w-full mt-32  text-center max-md:max-w-full">
      <h1 className="text-4xl font-medium text-white max-md:max-w-full">
        آموزش با همراهی{" "}
        <span className="text-lime-400">برترین اساتید و منتورهای حرفه‌ای</span>
      </h1>
      <p className="mt-4 text-2xl font-light text-neutral-300 max-md:max-w-full">
        دوره‌هایی با تدریس تخصصی و پشتیبانی چندین منتور مجرب در مسیر یادگیری و موفقیت شما
      </p>
    </header>
  );
}

export default SectionTitle;