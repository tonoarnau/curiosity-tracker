console.log('Hellos')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
/* Useful to show logs on the terminal about the processes */
app.use(morgan('combined'))
/* Useful to parse your data into a proper json */
app.use(bodyParser.json())
/* Useful for accesing data from other domains or servers. Be aware of security risks with that */
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'Hello You!'
  })
})

app.listen(process.env.PORT || 8081)
