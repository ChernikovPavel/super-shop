import React, { useState } from 'react';
import axiosInstance from '../../tools/axiosInstance';
import { useNavigate } from 'react-router-dom';
export default function AuthForm({ type = 'reg' }) {
  const navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const inputs = { password: data.get('password'), login: data.get('login') };
    axiosInstance
      .post(`/api/users/${type}`, { ...inputs })
      .then((el) => {
        if (!el.data.isError) {
          navigate('/');
        }
      })
      .catch((er) => console.error('ошибка', er.message));
  };

  return (
    <div
      className={`d-flex flex-column mx-auto justify-content-center align-items-center mt-10 `}
    >
      <div className={`bg-dark rounded-1 brandPaddingForm trans-1 ${type}`}>
        <h1 className="text-white mb-4">
          {type === 'reg' ? 'Регистрация' : 'Вход'}
        </h1>

        <div className="form-floating mb-3 brandRegForm">
          <form onSubmit={submitHandler}>
            <input
              name="login"
              type="text"
              className="form-control"
              id="login"
              placeholder=""
            />
            <label htmlFor="login">Login</label>
            <div className="form-floating ">
              <input
                name="password"
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
              <label htmlFor="Password">Password</label>
            </div>
            <div className="d-flex">
              <input
                type="submit"
                value={type === 'reg' ? 'Создать аккаунт' : 'Войти'}
                className="brand-btn btn btn-light mt-3 ms-auto rounded-05 arimo-400"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

