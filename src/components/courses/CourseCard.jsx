import * as React from "react";
import Image from 'next/image';
const CourseCard = ({ image, tag, title, description, teacherRole, teacherName, teacherAvatar }) => {
  return (
    <article className="flex overflow-hidden relative flex-col items-start px-6 pt-96 pb-8 bg-gray-700 rounded-3xl w-[417px] h-[600px] flex-none mx-5 max-md:px-5 max-md:pt-24">
      <div className="flex overflow-hidden absolute inset-0 z-0 flex-col items-center  w-full font-light text-right text-white whitespace-nowrap rounded-2xl">
        <Image loading="lazy" src={image} alt={title} width={417} height={600} className="object-cover z-0 w-full h-full" />
        <div className="flex absolute inset-0 z-0 w-full bg-blend-multiply" />
        <div className="flex absolute top-5 left-6 z-0 gap-1 items-center px-3 h-8 rounded-3xl bg-white bg-opacity-10">
          <span className="self-stretch my-auto text-base">#</span>
          <span className="self-stretch my-auto text-sm">{tag}</span>
        </div>
      </div>
      <div className="flex z-0 flex-col -mt-14 self-stretch">
        <div className="flex flex-col justify-center w-full text-right text-white">
          <h2 className="text-3xl font-semibold leading-[60px] truncate"
           style={{
               display: '-webkit-box',
               WebkitBoxOrient: 'vertical',
               WebkitLineClamp: 3,
               overflow: 'hidden',
               textOverflow: 'ellipsis',
               wordBreak: 'break-all',
               overflowWrap: 'break-word',
               whiteSpace: 'pre-wrap',
               maxWidth: '100%'
             }}>
            {title}
          </h2>
          <p className="flex-1 mt-2 text-lg font-light leading-7 whitespace-pre-wrap" 
             style={{
               display: '-webkit-box',
               WebkitBoxOrient: 'vertical',
               WebkitLineClamp: 3,
               overflow: 'hidden',
               textOverflow: 'ellipsis',
               wordBreak: 'break-all',
               overflowWrap: 'break-word',
               whiteSpace: 'pre-wrap',
               maxWidth: '100%'
             }}>
            {description}
          </p>
        </div>
        <div className="inline-flex gap-2.5 items-end self-end px-3.5 mt-6 ml-auto rounded-3xl bg-white bg-opacity-10 min-h-[36px]">
          {teacherAvatar && (
            <Image loading="lazy" src={teacherAvatar} alt={`${teacherName}'s avatar`} width={18} height={18} className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" />
          )}
          <div className="flex gap-1.5 items-center self-stretch my-auto font-light text-right text-white">
            <span className="self-stretch my-auto text-base">{teacherName}</span>
            <span className="self-stretch my-auto text-sm">{teacherRole}</span>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden items-end self-end absolute bottom-5 mt-3 z-10 w-12 h-12">
        <Image loading="lazy" src="/Images/Arrows.png" alt="arrow-up-left-sharp" width={40} height={40} className="object-contain z-10 self-stretch w-10 h-10 aspect-square" />
      </div>
    </article>
  );
};

export default CourseCard;