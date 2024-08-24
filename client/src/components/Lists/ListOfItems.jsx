import React, { useEffect, useState } from 'react';
import axiosInstance from '../../tools/axiosInstance';

export default function ListOfItems({ user }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance.get('api/products/all').then((el) => setProducts(el.data));
  }, []);

  const testHandler = (el = { id: 2 }) => {
    axiosInstance
      .post(
        '/api/cart/resend',
        {},
        { params: { productId: el.id, userId: user.id } }
      )
      .catch((er) => console.log(er));
  };
  const toCartHandler = (el) => {
    axiosInstance
      .post(
        '/api/cart/add',
        {},
        { params: { productId: el.id, userId: user.id } }
      )
      .then((res) => {
        console.log(el);
        const prods2 = products.map((el2) => {
          if (el2.id === el.id) {
            el2.number = res.data.number;
          }
          return el2;
        });
        setProducts(prods2);
        console.log(products);
      })
      .catch((er) => console.error(er));
  };

  return (
    <>
      <button className="btn btn-warning" onClick={testHandler}>
        click
      </button>
      {products.map((el) => (
        <div key={el.id} className="card">
          <p>{el.name}</p>
          <p>картинка по адресу {el.image}</p>
          <p>стоимость {el.price}$</p>
          <p>количество: {el.number}</p>
          <p>{el.description}</p>
          <p>создано: {el.createdAt}</p>
          <button onClick={() => toCartHandler(el)} className="btn btn-warning">
            добавить в карзину
          </button>
        </div>
      ))}
    </>
  );
}
