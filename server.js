const express = require("express");
const dotenv = require('dotenv');
const multer  = require('multer')
const app = express();
const port = 3000;

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

// Making the static map public (middleware)
app.use(express.static('static'));

// Used view engine and letting the server know where to find the files
app.set('view engine', 'ejs');
app.set('views', './views');

// Form (middleware)
app.use(express.urlencoded({extended: true}));

// Multer: where to save uploaded files
const upload = multer({ dest: './static/uploadedplantimg' })

// MongoDB connection
const mongoDBRun = async (req, res, next) => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log('Pinged your deployment. You successfully connected to MongoDB!');

  } catch (err) {
      console.log(err);
  } 
}

mongoDBRun().catch(console.dir);


// ROUTES get request
app.get('/', async (req, res) => {
try{
  const plantCollection = client
  .db('plantparents')
  .collection('plantscollection')

  const AllPlantData = await plantCollection.find({}).toArray();
  const mostRecentPlant = AllPlantData[AllPlantData.length - 1];

  res.render('index', {
  title: 'home',
  mostRecentPlant: mostRecentPlant }) 
  
  } catch(err) {
  console.error("Something went wrong with sending data to the db", err);
  }
})

app.get('/upload', async(req, res) => {

  try {
    const plantCollection = client
    .db('plantparents')
    .collection('plantscollection')

    const plantTypes = await plantCollection.find({}, { "planttype": 1, "_id": 0 }).toArray();
    const plantTypesArray = plantTypes.map(item => item.planttype);

    res.render('upload', {
      plantTypes: plantTypesArray,
      title: 'upload'
    })
  } catch (error) {
    console.error('Something went wrong with retrieving data from the database', error);
  }
})

app.get('/feed', async (req, res) => {
  const plantCollection = client
          .db('plantparents')
          .collection('plantscollection')

    const AllPlantData = await plantCollection.find({}).toArray();
    console.log(AllPlantData);

    res.render('feed.ejs', {
        title: 'plantfeed',
        AllPlantData: AllPlantData,
    })
})

app.get('/succes', async (req, res) => {
  try{
    const plantCollection = client
    .db('plantparents')
    .collection('plantscollection')
  
    const AllPlantData = await plantCollection.find({}).toArray();
    const mostRecentPlant = AllPlantData[AllPlantData.length - 1];
  
    res.render('succes', {
    title: 'succes',
    mostRecentPlant: mostRecentPlant }) 
    
    } catch(err) {
    console.error("Something went wrong with sending data to the db", err);
    }
})

app.get('*', (req, res) => {
  res.status(404).render('not-found.ejs', {
    title: '404'
  });
});


// ROUTES post request
app.post('/upload', upload.single('plantpic'), async (req, res) => {

  plantimg = req.file
  planttype = req.body.planttype;
  height = req.body.plantheight;
  potdiameter = req.body.potdiameter; 
  repot = req.body.repot;
  sunlight = req.body.sunlightbrightness;
  water = req.body.waterammount;
  soiltype = req.body.soiltype;
  carelevel = req.body.carelevel;
  additionalinfo = req.body.additionalinfo;

  const formPlantData = {plantimg, planttype, height, potdiameter, repot, sunlight, water, soiltype, carelevel, additionalinfo}

  try {
    await sendData(formPlantData);
    res.redirect('/succes')
  } catch(err) {
    console.error("Something went wrong with sending data to the db", err);
  }
})

async function sendData(data) {
  try {
    const PlantData = client
    .db("plantparents")
    .collection("plantscollection");

    const uploadPlantData = await PlantData.insertOne(data);
    console.log("The plant is planted in the database!", uploadPlantData.insertedId);
  } catch (err) {
    console.error("Something went wrong with adding the plant to the database :(", err);
  }
}


// ROUTES bonus
app.get('/feed/:plantType1', (req, res) => {
  res.render('plant.ejs', {
    plantType: req.params.plantType1,
    title: req.params.plantType1
  })
})

const dataPlant = (req, res) => {
  var id = slug(req.body.name).toLowerCase();

  dataPlant.push({
    id: id,
    name: req.body.name
  });

  console.log(req.body.name);
  res.redirect('/' + id);
} 


app.listen(port, () => {
  console.log(`Shaking my booty ${port} times`)
})