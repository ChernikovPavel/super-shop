/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './buttons.scss'


export default function HomeButton({
  color = '#111010',
  height = '49',
  children,
}) {
  const navigate = useNavigate()
  const [fill, changeSvgColor] = useState(color);
  const [clss, ChangeClss] = useState('');

  return (
    <div
      className={`svg-btn left${clss} arimo-400 `}
      onMouseEnter={() => ChangeClss(' hoover')}
      onMouseLeave={() => ChangeClss('')}
      onClick={() => navigate('/')}
    >
      <span className='btn-log-text'>На главную</span>
      <svg
        width='14vw'

        viewBox="0 0 175 71"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.5 0H162.5L175 12.5V48.5L162.5 61H12.5L0 48.5V12.5L12.5 0Z" />
      </svg>
    </div>
  );
}
