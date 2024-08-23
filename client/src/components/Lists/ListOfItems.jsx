import React, { useEffect, useState } from 'react';
import axiosInstance from '../../tools/axiosInstance';

export default function ListOfItems() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance.get('api/products/all').then((el) => setProducts(el.data));
  }, []);

  const testHandler = () => {
    console.log(products);
  };
  return (
    <>
      <button className="btn btn-warning" onClick={testHandler}>
        click
      </button>
      {products.map((el, i) => (
          <div  key={el.id} className="card">
            <p>{el.name}</p>
            <p>картинка по адресу {el.image}</p>
            <p>стоимость {el.price}$</p>
            <p>{el.number}</p>
            <p>{el.description}</p>

              <div key={i}> {el.name}</div>

          </div>
      ))}
    </>
  );
}
