import React from 'react';

const PageIndicator = ({ activeTab, totalTabs }) => {
  return (
    <div className="flex items-center justify-start mt-10 mr-16">
      {Array.from({ length: totalTabs }).map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 mx-1 rounded-full ${index === activeTab ? 'bg-blue-500' : 'bg-gray-300'}`}
        />
      ))}
    </div>
  );
};

export default PageIndicator;