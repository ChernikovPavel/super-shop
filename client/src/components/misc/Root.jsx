import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import TestButton from '../Buttons/TestButton';
import axios from 'axios';

export default function Rooot({ user, setUser }) {
  return (
    <>
      <NavBar user={user} setUser={setUser}></NavBar>

      <p>curt</p>
      <TestButton />

      <div className="mt-6d5vw">
        <Outlet />
      </div>
    </>
  );
}
