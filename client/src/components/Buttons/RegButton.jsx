import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './buttons.scss';

export default function RegButton() {
  const [clss, ChangeClss] = useState('');
  const navigate = useNavigate();
  return (
    <div
      className={'svg-btn arimo-400 right-1' + clss}
      onMouseEnter={() => ChangeClss(' hoover')}
      onMouseLeave={() => ChangeClss('')}
      onClick={() => navigate('/auth/reg')}
    >
      <span className="">Регистрация</span>
      <svg
        width="12vw"
        viewBox="0 0 127 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M112.409 0H12.7411L1.3113e-06 22.6603L12.7411 35H116.725L127 12.5641L112.409 0Z"
          fill="#111010"
        />
      </svg>
    </div>
  );
}
