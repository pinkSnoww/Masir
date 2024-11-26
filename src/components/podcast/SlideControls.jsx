
import * as React from "react";
import {ArrowRightIcon,ArrowLeftIcon} from "@nextui-org/shared-icons";
function SlideControls() {
  return (
    <nav className="flex flex-wrap gap-10 justify-between items-center px-2 mt-10 w-full min-h-[48px] max-md:max-w-full">
      <div className="flex gap-2 justify-center items-center self-stretch my-auto">
      <button className="flex gap-2 justify-center items-center self-stretch px-2 my-auto w-12 h-12 rounded-2xl bg-stone-100" aria-label="Next slide">
          <ArrowRightIcon className="object-contain self-stretch my-auto w-8 aspect-square" />
        </button>
        <button className="flex gap-2 justify-center items-center self-stretch px-2 my-auto w-12 h-12 rounded-2xl bg-stone-100" aria-label="Previous slide">
          <ArrowLeftIcon className="object-contain self-stretch my-auto w-8 aspect-square" />
        </button>
       
      </div>
      
      <div className="flex gap-2 justify-center items-center self-stretch my-auto" role="tablist">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={index === 4}
            className={`flex shrink-0 self-stretch my-auto rounded-2xl ${
              index === 4 
                ? "w-6 h-2 bg-stone-500" 
                : "w-2 h-2 bg-stone-400"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </nav>
  );
}

export default SlideControls;