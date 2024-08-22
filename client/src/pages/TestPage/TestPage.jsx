import React, { useState } from 'react';
import axios from 'axios'
import axiosInstance from '../../tools/axiosInstance';
const handler = (event) => {
  axiosInstance(
    {
      method: 'post',
      url: 'http://localhost:3000/api/users/reg',
      data: {
        email: '843@gmail.com',
        login: 'testuser',
        password: '2',
        debug: true
      },
    }
  ).then((e)=> console.log(e)).catch(er => console.error(er)
  )
}

export default function TestPage() {
  const [varib, chngVarib] = useState(true);
  return (
    <>
      <button onClick={() => handler()} className='btn btn-warning mx-5'>click-click</button>
    </>
  );
}
