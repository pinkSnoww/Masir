import React from 'react';
import Image from 'next/image';
function UserInfo() {
  return (
    <section className="flex overflow-hidden flex-col flex-1 justify-between p-5  w-full rounded-[32px] max-md:max-w-full">
      <div className="flex flex-col justify-center w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-8 items-center w-full max-md:max-w-full">
          <div className="flex gap-2 justify-center items-center self-stretch px-3 my-auto w-12 h-12 bg-neutral-100 rounded-[32px]">
            <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff165252fa6249989c95fc385d94cc6d376d4bd53e9a4298410edd5eb8813d9a?placeholderIfAbsent=true&apiKey=ec8b5be8d0bc439e8d0de4f10baa31dc" alt="" className="object-contain self-stretch my-auto w-6 aspect-square" />
          </div>
          <h2 className="flex-1 shrink gap-2 self-stretch my-auto text-2xl font-light text-right text-gray-800 basis-6 min-w-[240px]">
            اطلاعات کاربری
          </h2>
        </div>
        <div className="flex flex-wrap gap-4 items-center mt-8 w-full max-md:max-w-full">
        <div className="flex overflow-hidden flex-col justify-center self-stretch my-auto w-20 rounded-3xl min-h-[80px]">
            <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/68c19c1f1ab07653c0501bc1dfd5a7340c2468508ade293a685cb4db8fab00d5?placeholderIfAbsent=true&apiKey=ec8b5be8d0bc439e8d0de4f10baa31dc" alt="User profile" className="object-contain flex-1 w-20 aspect-square" />
          </div>
          <div className="flex flex-col flex-1 shrink self-stretch my-auto text-right basis-0 min-w-[240px]">
            <div className="text-2xl font-light text-gray-800">محمد حسینی</div>
            <div className="mt-1.5 text-xl font-extralight text-slate-500">هنرجو</div>
          </div>
         
        </div>
      </div>
      <div className="flex flex-col mt-14 w-full  max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-2 justify-center items-center p-2 w-full rounded-2xl bg-neutral-100 max-md:max-w-full">
        
        
        <button className="flex gap-2 justify-center items-center self-stretch px-3 my-auto w-11 h-11 rounded-2xl bg-neutral-100">
            <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/eacf1bfe480a609af483344813301539f6f6d7f3c2c941e3692a23f873707194?placeholderIfAbsent=true&apiKey=ec8b5be8d0bc439e8d0de4f10baa31dc" alt="Edit email" className="object-contain self-stretch my-auto w-5 aspect-square" />
          </button>
        <div className="flex-1 shrink gap-2 self-stretch my-auto text-left text-xl font-extralight text-gray-800 whitespace-nowrap basis-6 min-w-[240px]">
            mohammad@email.com
          </div>
          <div className="flex gap-2 justify-center items-center self-stretch px-3 my-auto w-12 h-12 rounded-2xl bg-neutral-100">
           
            <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e6ee918ee140f96536ee2b2d5ed0420a87103f26d5f93c5de9408c2a49c1ae7?placeholderIfAbsent=true&apiKey=ec8b5be8d0bc439e8d0de4f10baa31dc" alt="" className="object-contain self-stretch my-auto w-6 aspect-square" />
          </div>
        
        </div>
        <div className="flex flex-wrap gap-2 justify-center items-center p-2 mt-2.5 w-full rounded-2xl bg-neutral-100 max-md:max-w-full">
        <button className="flex gap-2 justify-center items-center self-stretch px-3 my-auto w-11 h-11 rounded-2xl bg-neutral-100">
            <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e63fcf84ed2ec9f22b924fd3c37de7c935ed047a8a92beea97935c9c4f5d9fc3?placeholderIfAbsent=true&apiKey=ec8b5be8d0bc439e8d0de4f10baa31dc" alt="Edit phone number" className="object-contain self-stretch my-auto w-5 aspect-square" />
          </button>
        
          <div className="flex-1 shrink gap-2 self-stretch text-left my-auto text-xl font-extralight text-gray-800 basis-6 min-w-[240px]">
            0912 345 6789
          </div>
          <div className="flex gap-2 justify-center items-center self-stretch px-3 my-auto w-12 h-12 rounded-2xl bg-neutral-100">
            <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8b994ed2be397b9c70788db0d9f842c9633bd52672880e37d70a718c20a3d8c?placeholderIfAbsent=true&apiKey=ec8b5be8d0bc439e8d0de4f10baa31dc" alt="" className="object-contain self-stretch my-auto w-6 aspect-square" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserInfo;