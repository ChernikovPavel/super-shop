import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import TestButton from './svgs/buttons/TestButton'

export default function Root() {
  return (
    <>
    <NavBar>
    </NavBar>
    <TestButton/>
    <Outlet/>
    </>
  )
}
