import React from 'react'
import Input from './input'
import Button from './Button'

const Form = () => {
  return (
    <form>
      <p>
        <label htmlFor="nome">Nome</label>
        <Input />
      </p>
      <label htmlFor="Email">Nome</label>
      <Input />
      <Button />
    </form>
  )
}

export default Form
