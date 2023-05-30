const express = require("express");
const dotenv = require('dotenv');
const app = express();
const port = 3300;

dotenv.config();

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.o8kudyf.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//     console.log('finished')
//   }
// }
// run().catch(console.dir);

// de static map openbaar maken (middleware)
app.use(express.static('static'));

// View engine instellen en server laten weten welk mapje deze staat
app.set('view engine', 'ejs');
app.set('views', './views');

// formulier middleware
app.use(express.urlencoded({extended: true}));

const dataPlant = (req, res) => {
  var id = slug(req.body.name).toLowerCase();

  dataPlant.push({
    id: id,
    name: req.body.name
  });

  console.log(req.body.name);
  res.redirect('/' + id);
} 

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

app.post('/upload', (req, res) => {
  console.log('testpost')
 
  res.redirect('/succes')
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

// TEST DATA OPHALEN UIT DE DATABASE
// app.get('/datatest', async (req, res) => {
//   const collection = client
//     .db('sample_airbnb')
//     .collection('listingsAndReviews');
  
//   const data = await collection.find().toArray;
//   // // console.log(data);
//   res.send(data);
// })

app.get("/datatest", async (req, res) => {
  try {
      // Connect the client to the server (optional starting in v4.7)
      await client.connect();

      // Send a ping to confirm a successful connection
      // await client.db("admin").command({ ping: 1 });
      // console.log(
      //  "Pinged your deployment. You successfully connected to MongoDB!"
      // );
      const collection = client
          .db('Testbase')
          .collection('Test1');

      const data = await collection.find().toArray;
      console.log(data);
      res.send(data);
  
  } catch (err) {
      console.log(err);
  } finally {
      await client.close();
  }
});

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

// app.get('/about', (req, res) => {
//   res.send('About')
// })

app.listen(port, () => {
  console.log(`Shaking my booty ${port} times`)
})