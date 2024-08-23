import React from 'react'
import AuthForm from '../../components/AuthForm/AuthForm'

export default function LogPage({setUser}) {
  return (
    <AuthForm type='log' setUser={setUser}/>
  )
}
