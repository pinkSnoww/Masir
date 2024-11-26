import * as React from "react";
import {Button} from "@nextui-org/button";
import Image from 'next/image';

const BannerButton = () => {
  return (
    <Button
    radius="full"
      className="flex overflow-hidden z-0 gap-2 items-center self-start px-6  mt-8 text-xl leading-9 text-right text-gray-700 whitespace-nowrap bg-white rounded-[32px] max-md:px-5"
      aria-label="مشاهده"
    >
      <h6 className="self-stretch">مشاهده</h6>
 
      <Image 
        loading="lazy"
        src="/Images/ArrowLeft.png"
        width={32}
        height={32}
        alt="Masir"
        className="object-contain shrink-0 self-stretch  w-7 aspect-square" 
      />
    </Button>
  );
};

export default BannerButton;