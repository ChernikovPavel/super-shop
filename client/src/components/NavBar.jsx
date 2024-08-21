import React from 'react';
import HomeButton from './HomeButton';

function NavBase({ Children }) {
  return (
    <div className="svg-navbar">
      <HomeButton></HomeButton>
      <div>
        <svg
          viewBox={`0 0 1413 111`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H712.5H1413V111H1229.5L1193 81H712.5H98L70.5 111H0V0Z"
            fill="#FFD900"
          />
        </svg>
        {Children}
      </div>
    </div>
  );
}

export default function NavBar() {
  return <NavBase></NavBase>;
}
