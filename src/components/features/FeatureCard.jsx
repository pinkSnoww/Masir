
import * as React from "react";
import Image from 'next/image';
export const FeatureCard = ({ icon, title, description, backgroundImage, className }) => {
  return (
    <article className={`flex overflow-hidden flex-col justify-between p-8 text-right text-white rounded-2xl ${backgroundImage ? 'relative' : 'bg-neutral-700 bg-opacity-50'} ${className}`}>
      {backgroundImage && (
        <Image 
          loading="lazy" 
          src={backgroundImage} 
          width={371}
          height={243}
          alt="Masir" 
          className="object-contain absolute inset-0 z-0 w-full rounded-2xl"
        />
      )}
      <Image
        loading="lazy"
        src={icon}
        width={32}
        height={32}
        alt="Masir"
        className="object-contain z-0 self-start w-6 aspect-[1.04] fill-lime-400"
      />
      <div className="flex z-0 flex-col mt-8 w-full">
        <h3 className="text-xl gap-3 font-medium">{title}</h3>
        <p className="mt-3 text-base gap-3 font-extralight">{description}</p>
      </div>
    </article>
  );
};