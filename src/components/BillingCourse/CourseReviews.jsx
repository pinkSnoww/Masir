import React from 'react';
import Image from 'next/image';
const ReviewCard = ({ name, comment, rating, imageSrc }) => (
  <div className="flex gap-7 self-stretch p-7 my-auto bg-neutral-100 min-h-[200px] min-w-[240px] rounded-[32px] w-[416px] max-md:px-5">
     <div className="flex relative gap-4 justify-center items-start self-start w-[88px]">
      <div className="flex overflow-hidden z-0 flex-col justify-center items-center my-auto rounded-3xl bg-zinc-200 h-[88px] min-h-[88px] w-[88px]">
        <Image loading="lazy" src={imageSrc} alt="avatar" className="object-contain flex-1 aspect-square w-[88px]" />
      </div>
      <div className="absolute left-4 gap-2 self-start px-2.5 py-2 text-sm text-center text-lime-400 whitespace-nowrap bg-gray-700 rounded-3xl bottom-[-9px]">
        {rating}/5
      </div>
    </div>
    <div className="flex flex-col flex-1 shrink text-right basis-0 min-w-[240px]">
      <div className="flex flex-col justify-center w-full text-2xl font-medium text-gray-800">
        <div className="flex-1 shrink gap-2 self-stretch w-full min-h-[31px]">{name}</div>
      </div>
      <p className="flex-1 shrink gap-2 self-stretch pl-1.5 mt-4 w-full text-lg font-extralight text-gray-700">
        {comment}
      </p>
    </div>
   
  </div>
);

const AudioReviewCard = ({ name, surname, rating, imageSrc }) => (
  <div className="flex gap-7 items-center self-stretch p-7 my-auto bg-neutral-100 min-w-[240px] rounded-[32px] w-[416px] max-md:px-5">
    <div className="flex flex-1 shrink gap-7 items-center self-stretch my-auto basis-0 min-w-[240px]">
    <div className="flex relative gap-4 justify-center items-start self-stretch my-auto w-[88px]">
        <div className="flex overflow-hidden z-0 flex-col justify-center items-center my-auto rounded-3xl bg-zinc-200 h-[88px] min-h-[88px] w-[88px]">
          <Image loading="lazy" src={imageSrc} alt="avatar" className="object-contain flex-1 aspect-square w-[88px]" />
        </div>
        <div className="absolute left-4 gap-2 self-start px-2.5 py-2 text-sm text-center text-lime-400 whitespace-nowrap bg-gray-700 rounded-3xl bottom-[-9px]">
          {rating}/5
        </div>
      </div>
      <div className="flex flex-col flex-1 shrink justify-center items-end self-stretch my-auto text-2xl text-right whitespace-nowrap basis-0">
        <div className="font-medium text-gray-800">{name}</div>
        <div className="mt-1.5 font-light text-slate-500">{surname}</div>
      </div>
      <button className="flex gap-2 self-stretch py-5 my-auto backdrop-blur-[6px] bg-zinc-200 h-[72px] min-h-[72px] rounded-[80px] w-[72px]" aria-label="Play audio review"/>

    </div>
  </div>
);

const CourseReviews = () => {
  const textReviews = [
    {
      name: 'مریم قربانی',
      comment: 'از صفر شروع کردم و این دوره کاملا نیازم رو برطرف کرد. شیء‌گرایی رو خیلی خوب یاد گرفتم.',
      rating: '5',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/92e3fe512146c2a77a3b32c11779a8799157cff2e0d7c47bc805ebb7d9927be7?apiKey=3d76d12e2dac4ef79a22992c109ad062&'
    },
    {
      name: 'علی رضایی',
      comment: 'دوره عالی بود! مفاهیم پیچیده رو خیلی روان توضیح داده بود و پروژه نهایی فوق‌العاده مفید بود.',
      rating: '4',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/0e60e3e34f75f58a7eddd0ad4ef3f4a2ec2902a7ada65e49a3ac41f115cda35b?apiKey=3d76d12e2dac4ef79a22992c109ad062&'
    },
    {
      name: 'سینا محسنی',
      comment: 'مثال‌های کاربردی و زمان‌بندی مناسب. یادگیری خیلی سریع‌تر و جذاب‌تر شد!',
      rating: '4',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/de248c92798ac7772e745a87ee1e3d6d5fa49b5fa6e95f8cf608dfe9145a1817?apiKey=3d76d12e2dac4ef79a22992c109ad062&'
    },
    {
      name: 'زهرا نوری',
      comment: 'ساختار دوره عالی بود، فصل به فصل حس پیشرفت داشتم. فصل توابع واقعا برام مفید بود.',
      rating: '5',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/ceafb31c7e74eec739141d3dabe2e4661a7d3395b9bdcb85f234e083b61edbec?apiKey=3d76d12e2dac4ef79a22992c109ad062&'
    }
  ];

  const audioReviews = [
    { name: 'سارا', surname: 'احمدی', rating: '3', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/7155f1fa00fe37064d78b63f8ab99c36c557d1013be4c2cdf2472277a47ced72?apiKey=3d76d12e2dac4ef79a22992c109ad062&' },
    { name: 'مریم', surname: 'رستمی', rating: '2', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/6fdcc7416206389b9a047032fabad88bdfb416732a12a43475c54009fcff37d3?apiKey=3d76d12e2dac4ef79a22992c109ad062&' }
  ];

  return (
    <main className=" flex flex-col justify-center items-center px-20 w-full mt-8 max-md:px-5">
      <div className="flex flex-wrap overflow-hidden justify-center text-right  mx-[64px]  lg:w-full gap-4 max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <div className="flex flex-wrap justify-between items-center w-full max-md:max-w-full">
        
        <h2 className="flex-1 shrink self-stretch my-auto text-4xl font-medium text-right basis-0 text-slate-400 max-md:max-w-full">
          <span className='font-light text-black'>نظر هنرجویان</span> <span className="font-light text-slate-400">دوره</span>
        </h2>
        <div className="flex gap-2 justify-center items-center self-stretch my-auto">
          <button className="flex gap-2 justify-center items-center self-stretch px-2 my-auto w-10 h-10 rounded-xl bg-neutral-100" aria-label="Previous review">
            <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/bebffa946e2238d99a6956fe8f5290e324e91da0f50032d0dc3d21c7c5f1b889?apiKey=3d76d12e2dac4ef79a22992c109ad062&" alt="Previous" className="object-contain self-stretch my-auto w-6 aspect-square" />
          </button>
          <button className="flex gap-2 justify-center items-center self-stretch px-2 my-auto w-10 h-10 rounded-xl bg-neutral-100" aria-label="Next review">
            <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/3d76d12e2dac4ef79a22992c109ad062/a7e4444e91f55808ca85b0ddfd57fabc7b948ceee02ab119817b4ceba019c7c7?apiKey=3d76d12e2dac4ef79a22992c109ad062&" alt="Next" className="object-contain self-stretch my-auto w-6 aspect-square" />
          </button>
        </div>
      </div>
      <div className="flex overflow-x-auto flex-col justify-center mt-14 w-full max-md:mt-10  max-md:max-w-full">
        <div className="flex overflow-x-auto gap-8 items-center w-full max-md:max-w-full">
          {textReviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
        <div className="flex gap-2 justify-center items-center self-center mt-6">
          <div className="flex self-stretch my-auto bg-gray-700 rounded-2xl min-h-[6px] w-[18px]" />
        </div>
      </div>
      <div className="flex overflow-x-auto flex-wrap gap-8  items-center mt-20 w-full max-md:mt-10 max-md:max-w-full">
        {audioReviews.map((review, index) => (
          <AudioReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
    </main>
  );
};

export default CourseReviews;