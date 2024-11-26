import React from 'react';

function ImageCard({ layerName, className, content, iconClasses, style}) {
  return (
    <article
      data-layername={layerName}
      className={`flex flex-col absolute z-0 px-12 pt-20 pb-12 text-3xl -mt-20 ml-20 text-center text-white whitespace-nowrap rounded-3xl h-[268px] w-[192px] ${className} max-md:px-5`}
    >
      {/* <div className={`flex shrink-0 ${iconClass}`} /> */}
      <div className="flex shrink-0">
      <div className="flex shrink-0"> {/* Container for icons */}
        {iconClasses.map((icon, index) => (
          <div key={index} className={icon.className}>
            <div className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      </div>
      <div className="flex flex-row">
        <h2 className="mt-20 ml-3.5 max-md:ml-2.5">
          {content.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < content.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>
      </div>
    </article>
  );
}

export default ImageCard;
