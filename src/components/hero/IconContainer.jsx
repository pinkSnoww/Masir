import * as React from "react";
import {Button} from "@nextui-org/button";
import Link from "next/link";
import Image from 'next/image';
import BasketIcon from "../../../public/Images/BasketIcon.png";
import UserIcon from "../../../public/Images/UserIcon.png";
export function IconContainer() {
  return (
    <div className="flex flex-wrap gap-2 px-2 ml-0 m-auto items-start justify-start h-auto rounded-3xl bg-stone-900">
      <div className="flex gap-1 justify-center items-center self-stretch my-auto w-10 rounded-3xl">
        <Button isIconOnly rounded="full" aria-label="Shopping basket icon">
          <Image 
            loading="lazy"
            width={32}
            height={32}
            src={BasketIcon}
            alt="Shopping basket icon"
            className="object-contain self-stretch m-auto aspect-square w-8 h-8 max-md:w-6 max-md:h-6"
          />
        </Button>
      </div>
      <div className="flex gap-2 justify-center items-center self-stretch my-auto w-10 rounded-3xl">
        <Link href="/Login">
          <Button isIconOnly rounded="full" aria-label="User profile icon">
            <Image 
              loading="lazy" 
              width={32}
              height={32}
              src={UserIcon}
              alt="User profile icon"
              className="object-contain self-stretch m-auto aspect-square w-8 h-8 max-md:w-6 max-md:h-6"
            />
          </Button>
        </Link>
      </div>
    </div>
  );
}