import React from 'react';

function Rating({ value }) {
  return (
    <div className="absolute left-4 gap-2 self-start px-2.5 py-2 text-sm text-center text-lime-400 whitespace-nowrap bg-gray-700 rounded-3xl bottom-[-9px]">
      {value}/5
    </div>
  );
}

export default Rating;