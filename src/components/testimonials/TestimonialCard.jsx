import React from 'react';
import {Badge, Avatar} from "@nextui-org/react";
function TestimonialCard({ review, style }) {
  return (
    <div style={style} className="w-[576px] h-60 p-8 bg-[#F0F2F0] gap-7 rounded-3xl shadow-lg flex">
      <div className="flex relative gap-4 justify-center items-start w-[88px]">
   
        <Badge 
          content={`${review.rating}/5`} 
          placement="bottom-right" 
          color="danger" 
          className="text-lime-400 bg-[#325444] justify-center items-center"
        >
          <Avatar 
            className='rounded-2xl'
            isBordered 
            radius="lg" 
            src={review.image} 
            size='lg'
          />
        </Badge>
       
      </div>
      <div className="flex flex-col flex-1 mr-0 justify-start basis-0 min-w-[240px]">
        <header className="flex flex-col justify-end">
          <h2 className="gap-2 self-stretch text-2xl font-medium min-h-[31px] text-zinc-900 ">
            {review.name}
          </h2>
          <p className="gap-2 self-stretch mt-1.5 text-base font-light text-gray-700">
            {review.role}
          </p>
        </header>
        <p className="flex-1 shrink gap-2 self-stretch pl-2 mt-4 w-full text-xl font-light text-right text-gray-700">
          {review.comment}
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;

