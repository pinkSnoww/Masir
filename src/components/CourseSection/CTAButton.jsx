import React from 'react';
import Image from 'next/image';
const CTAButton = () => {
  return (
    <button className="flex overflow-hidden z-0 gap-2 justify-center items-center self-center px-2 py-4 mt-8 max-w-full text-xl font-light text-center border border-solid border-slate-400 min-h-[56px] rounded-[32px] text-zinc-200 w-[432px] 
      hover:w-[544px] hover:h-[56px] hover:py-[8px] hover:gap-[8px] hover:rounded-[32px] hover:bg-lime-400 hover:text-black transition-all duration-300">
    
      <span className="self-stretch my-auto">اطلاعات بیشتر</span>
      <Image 
        loading="lazy" 
        src="/Images/GrayArrow.png" 
        width={24}
        height={24}
        alt="Arrow right"
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
      />
    </button>
  );
};

export default CTAButton;