import * as React from "react";

const ProgressIndicator = ({ isActive, onClick }) => {
  return (
    <button
    variant="dot"
      className={`flex shrink-0 self-stretch my-auto h-2 rounded-2xl ${
        isActive ? 'w-6 bg-white' : 'w-2 bg-white bg-opacity-40'
      }`}
      onClick={onClick}
    />
  );
};

export default ProgressIndicator;
