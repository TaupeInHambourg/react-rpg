function PlayerListItem({ player }) {
  return (
    <div className='flex flex-col h-10 max-w-56 p-2 items-center justify-center gap-4 border-2 border-gray-200 rounded-lg'>
      <h4 className='font-semibold text-lg'>{player.name}</h4>
      <p>{player?.biography?.substring(0, 50)}... </p>
    </div>
  )
}

function PlayerList({ players, selectedPlayer, onPlayerSelect }) {
  if (!players || players.length < 1) {
    return (
      <div className='w-full flex flex-row gap-4'>
        <p>Aucun joueur trouvé</p>
      </div>
    )
  }

  return (
    <button
      className={`flex flex-col w-full h-full mx-auto justify-center items-center gap-4 bg-white shadow-md rounded-lg p-4 max-w-md ${isSelected ? 'border-2 border-blue-500' : ''}`}
      onClick={onClick}
    >
      <h3 className='text-2xl font-semibold'>Mes personnages</h3>
      <div className='w-full flex flex-row gap-4'>
        {
          players && players.map(player => (
            <PlayerListItem
              key={player.id}
              player={player}
              onClick={() => onPlayerSelect(player)}
              isSelected={selectedPlayer?.id === player.id}
            />
          ))
        }
      </div>
    </button>
  )
}

export default PlayerList
