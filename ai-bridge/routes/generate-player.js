const { generatePlayer } = require('../controllers/player-controller')

const router = require('express').Router()

router.post('/', async (req, res) => {
  console.log('Generate player:', req.body)

  const { body } = req
  if (!body) return res.status(400).json({ error: 'No body provided' })

  try {
    const result = await generatePlayer(body)
    return res.send(result)
  } catch (error) {
    console.error(error)
    return res.status(500).send(error)
  }
})

module.exports = { router }
