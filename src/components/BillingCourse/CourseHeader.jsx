import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const CourseHeader = () => {
  return (
    <div className='flex flex-col items-center px-20 w-full mt-5 max-md:px-5'>
     <header className="flex flex-wrap gap-10 mx-[64px] justify-between p-2  backdrop-blur-[14px] bg-[#F5F6F7] rounded-[32px] lg:w-full  max-md:px-5 max-md:pt-24 max-md:max-w-full">
     <div className='flex flex-row items-center w-full mt-5'> 
        <div className='flex justify-center items-center gap-2 mb-4'> 
            <Link href="/" className="w-[211px]">
                <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/44344d7e0df0546bd279bf24887ae3e5f87c66414fc7e606e0f844e494669241?apiKey=3d76d12e2dac4ef79a22992c109ad062&" alt="Company logo" className="object-contain mt-1 max-w-full aspect-[10.2] w-[163px]" />
            </Link>
        </div>
        
        <nav className="flex z-10 flex-col items-center  text-lg font-light text-right text-slate-500 lg:w-full gap-4 max-md:px-5 max-md:pt-24 max-md:max-w-full">
            <ul className="flex flex-wrap justify-center items-center p-2 w-full bg-neutral-100 bg-opacity-80 rounded-[80px] max-md:max-w-full">
            <li className="flex justify-center items-center gap-2 px-3 pb-px my-auto whitespace-nowrap rounded-xl min-h-[44px]">
                    <Link href="/">درباره دوره</Link>
                </li>
                <li className="flex justify-center items-center gap-2 px-3 pb-px my-auto whitespace-nowrap rounded-xl min-h-[44px]">
                    <Link href="/">سرفصل‌ها</Link>
                </li>
                <li className="flex justify-center items-center gap-2 px-3 pb-px my-auto whitespace-nowrap rounded-xl min-h-[44px]">
                    <Link href="/">مدرسین</Link>
                </li>
                <li className="flex justify-center items-center gap-2 px-3 pb-px my-auto whitespace-nowrap rounded-xl min-h-[44px]">
                    <Link href="/">نظرات هنرجویان</Link>
                </li>
                <li className="flex justify-center items-center gap-2 px-3 pb-px my-auto whitespace-nowrap rounded-xl min-h-[44px]">
                    <Link href="/">مدرک</Link>
                </li><li className="flex justify-center items-center gap-2 px-3 pb-px my-auto whitespace-nowrap rounded-xl min-h-[44px]">
                    <Link href="/">مشاوره</Link>
                </li>
             
                <li className="flex justify-center items-center gap-2 px-3 pb-px my-auto whitespace-nowrap rounded-xl min-h-[44px]">
                    <Link href="/">ثبت‌نام</Link>
                </li>
            </ul>
        </nav>
        <div className="flex flex-row justify-end gap-1 w-[100px] px-2 h-full bg-gray-800 rounded-3xl">
        <Link href="/" className="flex gap-2 justify-center items-center self-stretch p-2 my-auto w-10 rounded-3xl">
         <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/8c2964a77837a72637f542b56264dd246346d303266fe35ba785b2e6daa9e177?apiKey=3d76d12e2dac4ef79a22992c109ad062&" alt="User profile" className="object-contain self-stretch my-auto w-6 aspect-square" />
       </Link>
      
       <Link href="/" className="flex gap-2 justify-start  self-stretch p-2 my-auto w-10 rounded-3xl">
         <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/7a64ca02922c3f887ddd98781b48c4761dc2393ca258c3a39410f2863a659922?apiKey=3d76d12e2dac4ef79a22992c109ad062&" alt="Shopping cart" className="object-contain self-stretch my-auto w-6 aspect-square" />
       </Link>
       
     </div>
    </div>
    
     </header>
    </div>

  );
};

export default CourseHeader;