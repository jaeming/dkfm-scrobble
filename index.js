const express = require('express')
const cors = require('cors')
const { scroble } = require('./scroble')

server = express()
server.use(cors())

server.get('/save', async (req, res) => {
  const { artist, track } = req.query
  let timestamp = Math.floor(Date.now() / 1000)
  await scroble(artist, track, timestamp)
  res.send(`${artist} - ${track} scrobbled!`)
})
server.listen(5050, () => console.log('server listening at http://localhost:5050'))
