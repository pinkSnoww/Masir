import React from 'react';
import Image from 'next/image';
const CourseImage = ({image}) => {
  return (
    <div className="flex overflow-hidden shadow-lg absolute inset-x-0 top-0 z-0 gap-2 justify-center items-center w-full h-[360px] min-h-[360px] max-md:max-w-full">
      <Image 
      
        src={image} 
        alt="Course cover image"
        width={624}
        height={360}
         style={{ 
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        
        }}
        className="course-image absolute inset-0 z-0 "
     
        priority="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black from-2% to-transparent"/>
      {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black h-1/2" /> */}
    </div>
  );
};

export default CourseImage;