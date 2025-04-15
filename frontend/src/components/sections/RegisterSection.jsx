import { Link } from 'react-router'
import RegisterForm from '../forms/RegisterForm'
import { useAuth } from '../../contexts/AuthContext'

function RegisterSection() {
  const { register } = useAuth()
  const handleSubmit = async (credentials) => {
    if (credentials?.email && credentials?.password && credentials?.username) {
      await register(credentials)
    }
  }

  return (
    <section className='flex flex-col mx-auto h-full w-full justify-center items-center'>
      <h2>Login section</h2>
      <RegisterForm onSubmit={handleSubmit} />
      <Link to='/login' className='text-sm underline'>
        J'ai déjà un compte
      </Link>
    </section>
  )
}

export default RegisterSection
