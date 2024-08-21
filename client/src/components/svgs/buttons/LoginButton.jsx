import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './buttons.scss'

export default function LoginButton() {
    const [clss, ChangeClss] = useState('');
    const navigate = useNavigate()
  return (
    <div className={'svg-btn arimo-400 right-0' + clss}
    onMouseEnter={() => ChangeClss(' hoover')}
    onMouseLeave={() => ChangeClss('')}
    onClick={() => navigate('/')}
    >
        <span className='btn-log-text'>Вход</span>
      <svg
        width="12vw"
        viewBox="0 0 142 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.1429 0H131.857L142 13.75V41.25L131.857 55H10.1429L0 41.25V13.75L10.1429 0Z"
          fill="#111010"
        />
      </svg>
    </div>
  );
}
