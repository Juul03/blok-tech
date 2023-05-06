const express = require("express")
const app = express()
const port = 3000

// de static map openbaar maken (middleware)
app.use(express.static('static'))

// View engine instellen en server laten weten welk mapje deze staat
app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {
  res.render('index', {
    title: 'home'
  })
})

app.get('/upload', (req, res) => {
  res.render('upload', {
    title: 'upload'
  })
})

app.get('/succes', (req, res) => {
  res.render('succes', {
    title: 'succes'
  })
})

// app.get('/about', (req, res) => {
//   res.send('About')
// })

// app.get('/about/:plant/', (req, res) => {
//   console.log('trying to reach' + plant)
//   res.params.send('hallo' + plant)
// })

app.listen(port, () => {
  console.log(`Shaking my booty ${port} times`)
})