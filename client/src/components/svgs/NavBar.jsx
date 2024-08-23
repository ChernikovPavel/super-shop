import React from 'react';
import HomeButton from './buttons/HomeButton';
import LKButton from './buttons/LKButton';
import RegButton from './buttons/RegButton';
import LoginButton from './buttons/LoginButton';
import UnLogButton from './buttons/UnLog';

const switcher = false;

function NavBase({ Children, user }) {
  console.log('состояние юзера', Boolean(user));
  console.log('сам юзер', user);
  
  return (
    <div className="svg-navbar">
      <HomeButton />
      {user ? <><UnLogButton/> <LKButton /></> : (<><RegButton/> <LoginButton/></>)}
      <div>
        <svg
          viewBox={`0 0 1413 111`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H712.5H1413V111H1208.5L1187.5 81H712.5H320.5L290.5 111H0V0Z"
            fill="#cc9436"
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
