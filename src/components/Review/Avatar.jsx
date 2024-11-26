import React from 'react';
import Image from 'next/image';
function Avatar({ src, alt }) {
  return (
    <div className="flex overflow-hidden z-0 flex-col justify-center items-center my-auto rounded-3xl bg-zinc-200 h-[88px] min-h-[88px] w-[88px]">
      <Image loading="lazy" src={src} alt={alt} className="object-contain flex-1 aspect-square w-[88px]" />
    </div>
  );
}

export default Avatar;