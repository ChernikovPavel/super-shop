import React, { useState } from 'react';
import axiosInstance from '../../tools/axiosInstance';
import { useNavigate } from 'react-router-dom';
export default function AuthForm({ type = 'reg', setUser }) {
  const navigate = useNavigate();

  const [borderFill, setBorderFill] = useState('normal-fill');

  const submitHandler = (event) => {
    setBorderFill('normal-fill');
    event.preventDefault();
    const data = new FormData(event.target);
    const inputs = { password: data.get('password'), login: data.get('login') };
    axiosInstance
      .post(`/api/users/${type}`, { ...inputs })
      .then((el) => {
        if (!el.data.isError) {
          setUser(el.data.user);
          navigate('/');
        }
      })
      .catch((er) => {
        console.error('ошибка', er.message);
        console.log('not ok');
        setBorderFill('wrong-fill');
      });
  };

  return (
    <div
      className={`d-flex flex-column mx-auto justify-content-center align-items-center mt-13`}
    >
      <div
        className={`bg-dark rounded-1 brandPaddingForm trans-1 ${type} brandRegForm  max-width-600p`}
      >
        <h1 className="text-white mb-4 ">
          {type === 'reg' ? 'Регистрация' : 'Вход'}
        </h1>

        <form className="width-73" onSubmit={submitHandler}>
          <div className="form-floating mb-3 width-73">
            <input
              name="login"
              type="text"
              className={`form-control ${borderFill}`}
              id="login"
              placeholder="login"
            />
            <label htmlFor="login">Login</label>
          </div>

          <div className="form-floating width-100">
            <input
              name="password"
              type="password"
              className={`form-control  ${borderFill}`}
              id="password"
              placeholder="Password"
            />
            <label htmlFor="Password">Password</label>
          </div>

          <div className="d-flex width-73">
            <input
              type="submit"
              value={type === 'reg' ? 'Создать аккаунт' : 'Войти'}
              className="brand-btn btn btn-light mt-3 ms-auto rounded-05 arimo-400"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
