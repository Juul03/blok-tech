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
    title: 'home',
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

// app.get('*', function(req, res) {
//   res.status(404).render('not-found.ejs', {
//     title:  '404'
//   })
// }

app.get('*', function(req, res) {
  res.status(404).render('not-found.ejs', {
    title: '404'
  });
});

// var plants = [
//   { planttype: 'Spiderplant', height:'25', repot:'yes'},
//   { planttype: 'Cactus', height:'100', repot:'no'},
//   { planttype: 'Calathea', height:'14', repot:'no'}
// ];

// function plants(req,res) {
//   res.render('index.ejs', {
//     data: plants
//   })
// }

// DIT TOEVOEGEN AAN DE INDEX --> WERKT ALLEEN NIET
// <!-- <ul id="plants">
// <% plants.forEach(function(plants) { %>
//     <li><%= plants.planttype %></li>
// <% }) %>
// </ul> -->



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