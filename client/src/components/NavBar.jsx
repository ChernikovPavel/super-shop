import React from 'react';
import HomeButton from './svgs/buttons/HomeButton';
import LKButton from './svgs/buttons/LKButton';
import RegButton from './svgs/buttons/RegButton';
import LoginButton from './svgs/buttons/LoginButton';
import UnLogButton from './svgs/buttons/UnLog';

const switcher = true;

function NavBase({ Children }) {
  return (
    <div className="svg-navbar">
      <HomeButton />
      {switcher ? <><UnLogButton/> <LKButton /></> : (<><RegButton/> <LoginButton/></>)}
      <div>
        <svg
          viewBox={`0 0 1413 111`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H712.5H1413V111H1208.5L1187.5 81H712.5H320.5L290.5 111H0V0Z"
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
