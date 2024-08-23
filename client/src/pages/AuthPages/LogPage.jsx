import React from 'react'
import AuthForm from '../../components/Forms/AuthForm'

export default function LogPage({setUser}) {
  return (
    <AuthForm type='log' setUser={setUser}/>
  )
}
