import { useState } from 'react'
import Input from './inputs/input'
import Button from '../Button'

function LoginForm({ onSubmit }) {
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleRegister = (event) => {
    event.preventDefault()
    if (onSubmit) onSubmit(credentials)
  }

  return (
    <form onSubmit={handleRegister} className='flex flex-col gap-4 justify-center items-center'>
      <Input
        type='text'
        label='Username'
        value={credentials.username}
        onChangeText={(text) => setCredentials({ ...credentials, username: text })}
      />
      <Input
        type='email'
        label='Email'
        value={credentials.email}
        onChangeText={(text) => setCredentials({ ...credentials, email: text })}
      />
      <Input
        type='password'
        label='Password'
        value={credentials.password}
        onChangeText={(text) => setCredentials({ ...credentials, password: text })}
      />
      <Button
        type='submit'
      >
        Register
      </Button>
    </form>
  )
}

export default LoginForm
