import Image from 'next/image';
import React from 'react';

const TagButton = ({ text, icon, isActive }) => {
  return (
    <button 
      className={`flex gap-2 justify-center items-center self-stretch px-6 my-auto ${
        isActive ? 'text-black bg-lime-400' : 'bg-gray-100'
      } rounded-2xl min-h-[48px] max-md:px-5`}
    >
      <span className="self-stretch my-auto">{text}</span>
      {icon && (
        <Image 
          loading="lazy" 
          src={icon} 
          alt="" 
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" 
        />
      )}
    </button>
  );
};

export default TagButton;