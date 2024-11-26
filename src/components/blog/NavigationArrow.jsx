import React from 'react';
import Image from 'next/image';

function NavigationArrow({ onClick }) {
  return (
    <nav className="flex gap-2 justify-end items-end self-stretch mt-10 ml-16">
      <button onClick={() => onClick('prev')} className="flex gap-2 justify-center items-center self-stretch px-2 my-auto w-12 h-12 bg-gray-100 rounded-2xl" aria-label="Previous">
        <Image src="/Images/ArrowRightIconCarousel.png" alt="left" width={24} height={24} />
      </button>
      <button onClick={() => onClick('next')} className="flex gap-2 justify-center items-center self-stretch px-2 my-auto w-12 h-12 bg-gray-100 rounded-2xl" aria-label="Next">
        <Image src="/Images/ArrowLeftIconCarousel.png" alt="right" width={24} height={24} />
      </button>
    </nav>
  );
}

export default NavigationArrow;