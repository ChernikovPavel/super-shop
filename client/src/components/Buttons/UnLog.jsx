import React, { useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import './buttons.scss';
import axiosInstance, { setAccessToken } from '../../tools/axiosInstance';

export default function UnLogButton({ setUser }) {
  const [clss, ChangeClss] = useState('');
  const navigate = useNavigate();
  const clickHandler = () => {
    axiosInstance.get('api/users/logout');
    setAccessToken('');
    redirect('/s');
    setUser({});
  };

  return (

    <div
      className={'svg-btn arimo-400 right-1' + clss}
      onMouseEnter={() => ChangeClss(' hoover')}
      onMouseLeave={() => ChangeClss('')}
      onClick={clickHandler}
    >
      <span className="">Выйти</span>
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
