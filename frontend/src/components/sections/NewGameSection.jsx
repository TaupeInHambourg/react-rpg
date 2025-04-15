import { useAuth } from '../../contexts/AuthContext'
import Button from '../Button'

function NewGameSection() {
  const { state: { user: { id } } } = useAuth()
  const handleCreateGame = async () => {
    const gameName = window.prompt('Nom de la partie :', 'name game')
    if (gameName && gameName !== '') {
      console.log(gameName)
      const result = await strapiCreateGame({
        name: gameName,
        userId: id
      })
      console.log(result)
    } else {
      console.log('Nom de la partie incorrect')
    }
    return (
      <>
        <Button
          onClick={handleCreateGame}
        >
          Créer une partie
        </Button>
        <Button>Rejoindre une partie</Button>
      </>
    )
  }
}
export default NewGameSection
