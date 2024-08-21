/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export default function HomeButton({
  width = '11vw',
  color = '#111010',
  height = '49',
  onClick = null,
  cls = '',
  children
}) {
  const [fill, changeSvgColor] = useState(color);
  const [clss, ChangeClss] = useState('')
  return (
    <div
      className={`svg-btn${clss} ${cls}`}
      onMouseEnter={() => ChangeClss(' hoover')}
      onMouseLeave={() => ChangeClss('')}
      onClick={onClick}
      
    >
      <span>На главную</span>
      <svg
        width={width}
        // height={height}
        viewBox={"0 0 156 49"}
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11.1429 0H144.857L156 12.25V36.75L144.857 49H11.1429L0 36.75V12.25L11.1429 0Z" />
      </svg>
    </div>
  );
}
