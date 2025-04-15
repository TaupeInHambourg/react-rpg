import { useNavigate } from 'react-router'
import Button from '../components/Button'
import ProfileSection from '../components/sections/ProfileSection'
import { useAuth } from '../contexts/AuthContext'

function ProfilePage() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <>
      <ProfileSection />
      <Button
        variant='error'
        onClick={handleLogout}
      >Déconnexion
      </Button>
    </>
  )
}

export default ProfilePage
