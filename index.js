let express=require('express');
let cors=require('cors');
let app=express();
app.use(cors());
app.use(express.json()) 
 require('dotenv').config();
let port=process.env.PORT||5000;
 
let artCraft=
[
    {
      "id": 1,
      "storeName": "Creative Hands",
      "image": "https://i.ibb.co.com/WtsJ12V/pexels-rdne-7606238.jpg",
      "category": "Paint Supplies",
      "contact": "+1-234-567-8901",
      "location": {
        "address": "123 Art Lane",
        "city": "New York",
        "state": "NY",
        "zipCode": "10001"
      },
      "rating": 4.8,
      "onlineStore": true,
      "description": "Creative Hands specializes in premium art supplies like paints, brushes, and canvases, catering to both beginners and professionals."
    },
    {
      "id": 2,
      "storeName": "The Craft Corner",
      "image": "https://i.ibb.co.com/tsx1Lh7/pexels-ayoub-moukhliss-1262835-27591920.jpg",
      "category": "DIY Kits",
      "contact": "+1-345-678-9012",
      "location": {
        "address": "456 Handmade Ave",
        "city": "Los Angeles",
        "state": "CA",
        "zipCode": "90001"
      },
      "rating": 4.7,
      "onlineStore": true,
      "description": "The Craft Corner offers a variety of DIY kits for creative projects, perfect for kids, adults, and hobbyists."
    },
    {
      "id": 3,
      "storeName": "Artisan Haven",
      "image": "https://i.ibb.co.com/84J6xRJ/pexels-magda-ehlers-pexels-29893326.jpg",
      "category": "Sculpting Tools",
      "contact": "+1-456-789-0123",
      "location": {
        "address": "789 Clay St",
        "city": "Chicago",
        "state": "IL",
        "zipCode": "60601"
      },
      "rating": 4.9,
      "onlineStore": false,
      "description": "Artisan Haven is your go-to store for sculpting tools and materials, offering a wide range of clay, carving tools, and accessories."
    },
    {
      "id": 4,
      "storeName": "Craftopia",
      "image": "https://i.ibb.co.com/zFm1zgp/istockphoto-1294416014-1024x1024.jpg",
      "category": "Knitting Supplies",
      "contact": "+1-567-890-1234",
      "location": {
        "address": "101 Wool Rd",
        "city": "Houston",
        "state": "TX",
        "zipCode": "77001"
      },
      "rating": 4.6,
      "onlineStore": true,
      "description": "Craftopia specializes in knitting and crocheting supplies, featuring a wide selection of yarns, patterns, and needles."
    },
    {
      "id": 5,
      "storeName": "Canvas & Brushes",
      "image": "https://i.ibb.co.com/nMYHt5T/pexels-cottonbro-3777915.jpg",
      "category": "Painting Tools",
      "contact": "+1-678-901-2345",
      "location": {
        "address": "202 Paint Blvd",
        "city": "Miami",
        "state": "FL",
        "zipCode": "33101"
      },
      "rating": 4.5,
      "onlineStore": true,
      "description": "Canvas & Brushes is a one-stop shop for painting tools, offering professional-grade canvases, easels, and brush sets."
    },
    {
      "id": 6,
      "storeName": "Creative Creations",
      "image": "https://i.ibb.co.com/cF4mPWq/pexels-cottonbro-3778179.jpg",
      "category": "Mixed Media",
      "contact": "+1-789-012-3456",
      "location": {
        "address": "303 Mixed Media St",
        "city": "Seattle",
        "state": "WA",
        "zipCode": "98101"
      },
      "rating": 4.7,
      "onlineStore": false,
      "description": "Creative Creations focuses on mixed media art supplies, including collage materials, adhesives, and specialty papers."
    }
  ];
  
  
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@cluster0.jt86e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    let craftArtCollection=client.db('craftArtDB').collection('artDB');
    app.post('/addCraftItem',async(req,res)=>{
        let cursor= await craftArtCollection.insertOne(req.body);
        res.send(cursor)
    })
    app.get('/addCraftItem',async(req,res)=>{ 
      let cursor=craftArtCollection.find(req.body) 
      let result=await cursor.toArray();
      res.send(result)
    })
    app.get('/artCraft',async(req,res)=>{
            res.send(artCraft)
    })
    app.get('/',(req,res)=>{
        res.send('MY Art-Craft-Store-with-Mongo-firebase-CRUD-Operation-server is running');
    })
    app.get('/artCraft/:id', (req,res)=>{
      let id=req.params.id; 
      let idInt=parseInt(id)
       let result=artCraft.find(pro=>pro.id===idInt);
       res.send(result)
      console.log(result)


    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.listen(port,()=>{
    console.log(`Art-Craft-Store-with-Mongo-firebase-CRUD-Operation-server running is ${port} port N.O`)
})