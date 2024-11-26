import React from 'react';
import Image from 'next/image';
const MentorList = () => {
  return (
    <div className="flex flex-col justify-center mx-auto items-center mt-6 max-w-full text-sm font-light text-zinc-200 w-[248px]">
      <Image 
        loading="lazy" 
        src="/Images/mentor-avatars.png" 
        width={248}
        height={48}
        alt="Mentor avatars"
        className="object-contain gap-0 w-full aspect-[5.15]"
      />
      <p className="gap-2 self-stretch mt-2 mx-auto">۸ منتور متخصص برنامه‌نویسی</p>
    </div>
  );
};

export default MentorList;