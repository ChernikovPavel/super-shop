import React, { useState } from 'react';
import axios from 'axios';
import axiosInstance from '../../tools/axiosInstance';
import ListOfItems from '../../components/Lists/ListOfItems';
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
    .catch((er) => console.error(er));
};


export default function TestPage({user}) {

const handler2 = () => {
    axiosInstance.get('api/products/all').then(el => console.log(el))
  }

  return (
    <>
    <div className='stack'>
<ListOfItems user={user} ></ListOfItems>
</div>
    </>
  );
}
