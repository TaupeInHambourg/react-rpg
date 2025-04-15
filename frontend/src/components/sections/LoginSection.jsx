import { Link } from 'react-router'
import LoginForm from '../forms/LoginForm'
import { useAuth } from '../../contexts/AuthContext'

function LoginSection() {
  const { login, state } = useAuth()

  const handleSubmit = async (credentials) => {
    if (credentials?.identifier && credentials?.password) {
      await login(credentials)
    }
  }
  return (
    <section className='flex flex-col mx-auto h-full w-full justify-center items-center'>
      <h2>Login section</h2>
      <LoginForm onSubmit={handleSubmit} />
      <p className='text-red-600'>
        {state.error}
      </p>
      <Link to='/register' className='text-sm underline'>
        Je n'ai pas de compte
      </Link>
    </section>
  )
}

export default LoginSection
