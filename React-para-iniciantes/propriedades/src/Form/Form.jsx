import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {
  return (
    <div>
      <Input id="email" label="Email" required/>
      <Input id="password" type = "password" label="Senha"/>
      <Button />
    </div>
  )
}

export default Form
