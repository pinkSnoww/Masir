import React from 'react';
import Image from 'next/image';
const CourseDetails = ({tag, title, description}) => {
  return (
    <section className="flex z-0 flex-col items-center w-full text-center max-md:max-w-full">
      <header className="flex flex-col items-center text-right">
        <h1 className="flex flex-col items-center">
          <span className="text-2xl text-center font-light text-lime-400">{tag}</span>
          <span className="text-2xl text-white">{title}</span>
        </h1>
        <div className="flex gap-2.5 justify-center items-center mt-2.5 text-lg font-light">
          <div className="flex overflow-hidden gap-1 justify-center items-center self-stretch my-auto text-lime-400 whitespace-nowrap">
            <span className="self-stretch my-auto">۴.۸/۵</span>
            <Image 
              loading="lazy" 
              src="/Images/star.png" 
              alt="Rating star"
              width={15}
              height={15}
              className="object-contain shrink-0 self-stretch my-auto aspect-[0.94] w-[15px]"
            />
          </div>
          <span className="gap-2 self-stretch my-auto text-zinc-200">۴۰۰+ هنرجو</span>
        </div>
      </header>
      <p className="flex-1 shrink gap-2 self-stretch mt-6 w-full text-base font-extralight leading-7 text-neutral-300 max-md:max-w-full">
        {description}
      </p>
    </section>
  );
};

export default CourseDetails;