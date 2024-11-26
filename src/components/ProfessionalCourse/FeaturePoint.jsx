import React from 'react';
import Image from 'next/image';
const FeaturePoint = ({ text, iconSrc }) => {
  return (
    <div className="flex gap-2 items-center self-stretch my-auto">
       <Image loading="lazy" width={24} height={24} src={iconSrc} alt="Future" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
      <span className="text-white">{text}</span>
     
    </div>
  );
};

export default FeaturePoint;