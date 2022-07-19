const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/getParticipants', db.getParticipants)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
