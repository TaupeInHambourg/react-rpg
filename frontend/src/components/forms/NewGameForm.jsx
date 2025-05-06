import { useState } from 'react'
import Button from '../button'
import Input from './inputs/Input'
import { useAuth } from '../../contexts/AuthContext'
import PlayerList from '../lists/PlayerList'
import { toast } from 'react-toastify'
import { strapiCreateGame } from '../../api/strapi'

function NewGameForm() {
  const [gameData, setGameData] = useState({
    name: '',
    player: null
  })

  const { state: { user } } = useAuth()

  const handleSubmit = async () => {
    try {
      // Création de la partie dans Strapi
      const result = await strapiCreateGame({
        name: gameData.name,
        playerId: gameData.player.id
      })
      console.log(result)
      toast.success('Partie créée avec succès')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-4 w-full h-full mx-auto justify-center items-center bg-white shadow-md rounded-lg p-4 max-w-md'
    >
      <Input
        type='text'
        value={gameData.name}
        label='Nom'
        onChangeText={(text) => setGameData({ ...gameData, name: text })}
      />
      <PlayerList
        players={user.players}
        selectedPlayer={gameData.player}
        onPlayerSelect={(player) => setGameData({ ...gameData, player })}
      />
      <Button
        type='submit'
      >
        Créer la partie
      </Button>
    </form>
  )
}

export default NewGameForm
