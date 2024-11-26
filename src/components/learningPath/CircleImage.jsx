import React from 'react';

const CircleImage = ({ alt, isVisible }) => {
  return (
    <div
      className={`flex shrink-0 rounded-full h-[59px] w-[59px] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      role="Image"
      aria-label={alt}
    />
  );
};

export default CircleImage;