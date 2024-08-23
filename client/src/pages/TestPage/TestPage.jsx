import React, { useState } from 'react';
import axios from 'axios';
import axiosInstance from '../../tools/axiosInstance';
const handler = (event) => {
  axiosInstance({
    method: 'post',
    url: 'http://localhost:3000/api/users/reg',
    data: {
      email: '843@gmail.com',
      login: 'testuser',
      password: '2',
      debug: true,
    },
  })
    .then((e) => console.log(e))
    .catch((er) => console.error(er));
};

const handler2 = (event) => {
  axiosInstance({
    method: 'get',
    url: 'http://localhost:3000/api/users/cookie',
    data: {
      email: '843@gmail.com',
      login: 'testuser',
      password: '2',
      debug: true,
    },
  })
    .then((e) => console.log(e))
    .catch((er) => console.error(er));
};

export default function TestPage() {
  const [varib, chngVarib] = useState(true);
  return (
    <>
      <button onClick={() => handler()} className="btn btn-secondary mx-5">
        click-click
      </button>
      <button onClick={() => handler2()} className="btn btn-secondary mx-5">
        click-click
      </button>

      <form>
        Первый пример: нажмите Enter: <input type="text" />
        <br />
        Второй пример: нажмите на кнопку Отправить:{' '}
        <input type="submit" value="Отправить" />
      </form>
    </>
  );
}
