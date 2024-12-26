let express=require('express');
let cors=require('cors');
let app=express();
app.use(cors());
app.use(express.json())
let port=process.env.PORT||5000;

app.get('/',(req,res)=>{
    res.send('MY Art-Craft-Store-with-Mongo-firebase-CRUD-Operation-server is running')
})

app.listen(port,()=>{
    console.log(`Art-Craft-Store-with-Mongo-firebase-CRUD-Operation-server running is ${port} port N.O`)
})