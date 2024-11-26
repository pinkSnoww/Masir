// components/CommentCard.js

import React from 'react';
import Avatar from './Avatar';
import Rating from './Rating';
import Image from 'next/image';
function CommentCard({ name, course, comment, avatarSrc, rating }) {
  return (
    <article className="flex flex-wrap gap-7 items-start p-8 bg-zinc-100 max-w-[500px] rounded-[32px] max-md:px-5 max-md:max-w-full">
    <div className="flex flex-col flex-1 shrink justify-center basis-0 min-w-[240px]">
      <header className="flex flex-col justify-center items-end self-end text-center">
        <h3 className="gap-2 self-stretch text-2xl font-medium min-h-[31px] text-zinc-900">
          {name}
        </h3>
        <p className="gap-2 self-stretch mt-1.5 text-base font-light text-gray-700">
          {course}
        </p>
      </header>
      <p className="flex-1 shrink gap-2 self-stretch pl-2 mt-4 w-full text-xl font-light text-right text-gray-700">
        {comment}
      </p>
    </div>
    <div className="flex relative gap-4 justify-center items-start w-[88px]">
      <div className="flex overflow-hidden z-0 flex-col justify-center items-center my-auto rounded-3xl bg-zinc-200 h-[88px] min-h-[88px] w-[88px]">
        <Image loading="lazy" src={avatarSrc} alt={`Avatar of ${name}`} className="object-contain flex-1 aspect-square w-[88px]" />
      </div>
      <div className="absolute left-4 gap-2 self-start px-2.5 py-2 text-sm text-center text-lime-400 whitespace-nowrap bg-gray-700 rounded-3xl bottom-[-9px]">
        {rating}/5
      </div>
    </div>
  </article>
  );
}

export default CommentCard;