import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LKButton() {
    const [clss, ChangeClss] = useState('');
    const navigate = useNavigate()
  return (
    <div className={'svg-btn arimo-400 right-0' + clss}
    onMouseEnter={() => ChangeClss(' hoover')}
    onMouseLeave={() => ChangeClss('')}
    onClick={() => navigate('/')}
    >
        <span className='btn-log-text'>Корзина<br/></span>
      <svg
        width="12vw"
        viewBox="0 0 175 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5 0H162.5L175 14.5492V56.4508L162.5 71H12.5L0 56.4508V14.5492L12.5 0Z"
          fill="#111010"
        />
      </svg>
    </div>
  );
}
