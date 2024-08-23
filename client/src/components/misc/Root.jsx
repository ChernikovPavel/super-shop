import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import TestButton from '../Buttons/TestButton';
import axios from 'axios';

export default function Rooot({ user, setUser }) {

  return (
    <>
      <NavBar user={user} setUser={setUser}></NavBar>

      <TestButton />
      <p>curt</p>
      <div className='mt-100'>
        <Outlet />
      </div>
    </>
  );
}
