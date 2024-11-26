// components/SemiCircularProgressBar.jsx
import React from 'react';

const CircularProgressBar = ({ value, max, min, gaugePrimaryColor, gaugeSecondaryColor }) => {
  const radius = 50; // Radius of the circle
  const circumference = Math.PI * radius; // Circumference for half circle
  const offset = circumference - (value / max) * circumference; // Calculate the offset for the stroke

  return (
    <svg className="w-32 h-16">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: gaugePrimaryColor, stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: gaugeSecondaryColor, stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        stroke={gaugeSecondaryColor}
        fill="transparent"
        strokeWidth="10"
        d={`M 0, ${radius} A ${radius}, ${radius} 0 0, 1 ${circumference}, ${radius}`}
      />
      <path
        stroke={`url(#gradient)`}
        fill="transparent"
        strokeWidth="10"
        d={`M 0, ${radius} A ${radius}, ${radius} 0 0, 1 ${offset}, ${radius}`}
        className="transition-all duration-500 ease-in-out"
      />
      <text x="50%" y="20%" textAnchor="middle" stroke="#000" strokeWidth="1px" dy=".3em" className="font-bold text-lg">
        {value}%
      </text>
    </svg>
  );
};

export default CircularProgressBar;