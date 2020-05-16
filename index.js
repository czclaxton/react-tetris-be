require('dotenv').config()
const cors = require('cors')
const express = require('express')
const server = express()

server.use(express.json(), cors())

require('./components')(server)

const PORT = process.env.PORT || 8000

server.get('/', (req, res) => {
  res.send('up and running')
})

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
