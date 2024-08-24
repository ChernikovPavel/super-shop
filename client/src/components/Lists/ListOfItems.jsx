import React, { useRef, useEffect, useState } from 'react';
import axiosInstance from '../../tools/axiosInstance';

export default function ListOfItems({ user }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance.get('api/products/all').then((el) => setProducts(el.data));
  }, []);

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

      {products.map((el) => {
       if(el.number > 0) return (
          <div key={el.id} className="card my-4 bg-darkgray">
            <p>{el.name}</p>
            <p>картинка по адресу: {el.image}</p>
            <p>стоимость: {el.price}$</p>
            <p>количество: {el.number}</p>
            <p>{el.description}</p>
            <button
              disabled={!Object.keys(user).length}
              onClick={() => toCartHandler(el)}
              className="btn btn-warning"
            >
              добавить в карзину
            </button>
          </div>
        );
      })}
    </>
  );
}
