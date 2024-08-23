import React from 'react'
import AuthForm from '../../components/AuthForm/AuthForm'

export default function RegPage({setUser}) {
  return (
    <AuthForm type='reg' setUser={setUser}/>
  )
}
