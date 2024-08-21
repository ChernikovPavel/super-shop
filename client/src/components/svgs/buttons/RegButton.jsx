import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './buttons.scss'

export default function RegButton() {
    const [clss, ChangeClss] = useState('');
    const navigate = useNavigate()
  return (
    <div className={'svg-btn arimo-400 right-1' + clss}
    onMouseEnter={() => ChangeClss(' hoover')}
    onMouseLeave={() => ChangeClss('')}
    onClick={() => navigate('/')}
    >
        <span className=''>Регистрация</span>
        <svg width="12vw" viewBox="0 0 127 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_37_3)">
<path d="M112.409 0H12.7411L1.3113e-06 22.6603L12.7411 35H116.725L127 12.5641L112.409 0Z" fill="#111010"/>
</g>
<defs>
<filter id="filter0_i_37_3" x="0" y="0" width="127" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_37_3"/>
</filter>
</defs>
</svg>

    </div>
  );
}