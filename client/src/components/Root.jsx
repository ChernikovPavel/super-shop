import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './svgs/NavBar'
import TestButton from './svgs/buttons/TestButton'

export default function Root({user}) {
  return (
    <>
    <NavBar user={user}>
    </NavBar>
    <TestButton/>
    <Outlet/>
    </>
  )
}
