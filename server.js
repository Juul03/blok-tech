const express = require("express");
const app = express();
const port = 3300;

// de static map openbaar maken (middleware)
app.use(express.static('static'));

// View engine instellen en server laten weten welk mapje deze staat
app.set('view engine', 'ejs');
app.set('views', './views');

// formulier middleware
app.use(app.urlencoded({extended: true}));
// app.post('/succes', add);

app.get('/succes',(req,res)=>{
  res.render('succes')
})

app.post('/succes',(req,res)=>{
  const { name} = req.body
  res.render('submit',{name:name})
})

const data = (req,res) => {
  var id = slug(req.body.name).toLowerCase();

  data.push({
    id: id,
    name: req.body.name
  });

  console.log(req.body.name);
  res.redirect('/' + id);
}


// Notification API
// const agreeButton = document.querySelector('#permissionbutton');
// console.log(agreeButton);

// agreeButton.addEventListener("click", () => {
//   let promise = Notification.requestPermission();
//   console.log(promise);
// });

// if (window.Notification && Notificaiton.permission !== "denied") {
//   Notification.requestPermission((status) => {
//     let notification = new Notification('Title', {
//       body: 'Test tekst'
//     })
//   })
// }

var plants = [
  { planttype: 'Spiderplant', height:'25', repot:'yes'},
  { planttype: 'Cactus', height:'100', repot:'no'},
  { planttype: 'Calathea', height:'14', repot:'no'}
];

app.get('/', (req, res) => {
  res.render('index', {
    title: 'home',
    allPlants: plants
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

app.get('/feed/:plantType1', (req, res) => {
  res.render('plant.ejs', {
    plantType: req.params.plantType1,
    title: req.params.plantType1
  })
})

app.get('*', (req, res) => {
  res.status(404).render('not-found.ejs', {
    title: '404'
  });
});

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

app.listen(port, () => {
  console.log(`Shaking my booty ${port} times`)
})