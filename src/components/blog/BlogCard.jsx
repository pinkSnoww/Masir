"use client"
import React, { useState } from 'react';
import Image from 'next/image';
function BlogCard({ image, tag, title, description, blogs = [] }) {


  return (
    <article className="flex overflow-hidden relative flex-col bg-fuchsia-400 items-start self-stretch px-8 pt-80 pb-10 my-auto rounded-3xl min-h-[608px] min-w-[240px] w-[640px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <div className="flex overflow-hidden absolute inset-0 z-0 flex-col items-center max-w-full rounded-2xl min-h-[608px] w-[640px]">
        <Image  width={640} height={608} src={image} alt="Blog post cover"  style={{ 
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        className="absolute inset-0 z-0 "
     
        priority="true"
        />
        <div className="flex absolute inset-0 z-0 w-full bg-blend-multiply min-h-[608px]" />
      </div>
      <Image loading="lazy" src="/Images/Arrows.png" alt="Arrow"  width={20} height={20} className="object-contain absolute top-6 left-6 z-0 w-12 h-12 aspect-square" />
      <div className="flex z-0 flex-col self-stretch w-full text-right text-white max-md:max-w-full">
        <div className="flex gap-1 items-end self-start px-3 font-light whitespace-nowrap rounded-3xl bg-white bg-opacity-10 min-h-[32px]">
        <span className="self-stretch my-auto text-base">#</span>
          <span className="self-stretch my-auto text-sm">{tag}</span>
          
        </div>
        <div className="flex flex-col mt-8 ">
          <h3 className="text-3xl text-wrap font-medium leading-[60px] break-all">{title}</h3>
          <p className="mt-2 text-wrap text-lg font-light leading-7 ">{description}</p>
        </div>
      </div>
      
    </article>
  );
}

export default BlogCard;