import Image from 'next/image';
import MentorList from './MentorList';
import CourseDetails from './CourseDetail';
import CourseTag from './CourseTag';
import CourseImage from './CourseImage';
import CTAButton from './CTAButton';
import React, { forwardRef } from 'react';
const CourseCard = forwardRef(({ image, tag, title, description }, ref) => {
  return (
    <article ref={ref} className="flex overflow-hidden relative card-shadow flex-col mb-[80px] px-10 pt-64 pb-10 bg-gray-800 rounded-[44px] w-[624px] max-w-[1312px] max-md:px-5 max-md:pt-24 max-sm:mb-10">
   
        <CourseImage image={image} />
      
      <CourseTag />
      <CourseDetails tag={tag} title={title} description={description} />
      <MentorList />
      <CTAButton />
    </article>
  );
});

CourseCard.displayName = 'CourseCard';

export default CourseCard;