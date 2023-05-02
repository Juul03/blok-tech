const express = require("express")
const app = express()
const port = 3000

// de static map openbaar maken (middleware)
app.use(express.static('static'))

app.get('/', (req, res) => {
  res.send('index')
})

app.get('/about', (req, res) => {
  res.send('About')
})

app.get('/about/:plant/', (req, res) => {
  console.log('trying to reach' + plant)
  res.params.send('hallo' + plant)
})

app.listen(port, () => {
  console.log(`Shaking my booty ${port} times`)
})