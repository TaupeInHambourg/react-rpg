import Button from '../Button'

function ProfileSection() {
  return (
    <section className='flex flex-col w-full h-full justify-center items-center mx-auto, gap-4'>
      <h2 className='text-2xl font-bold'>Profile Section</h2>
      <Button
        type='submit'
      >
        Générer mon personnage
      </Button>
    </section>
  )
}

export default ProfileSection
